import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import GpsFixed from 'material-ui/svg-icons/device/gps-fixed';
import GpsNotFixed from 'material-ui/svg-icons/device/gps-not-fixed';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Share from 'material-ui/svg-icons/social/share';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import OndemandVideo from 'material-ui/svg-icons/notification/ondemand-video';
import Place from 'material-ui/svg-icons/maps/place';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

import {
    Checkbox,
    IconButton,
    FlatButton,
    RaisedButton,
    TextField,
} from 'material-ui';

import {
    red500,
    blue500,
    cyan500,
} from 'material-ui/styles/colors'

import {
    getCareerDetails,
    resetCareerDetails,
    getCareerEducationPaths,
    getCareerPointOfContact,
    getCareerAdvertisements,
    getCareerVideos,
    setTargetCareer,
    unsetTargetCareer,
} from '../../actions/career-actions';

import { openDialog, closeDialog } from '../../actions/dialog-actions';
import { openSnackbar } from '../../actions/snackbar-actions';
import { sendMessageToUser } from '../../actions/user-actions';
import EducationPath from '../../components/career/EducationPath';
import PointOfContact from '../../components/career/PointOfContact';
import VideoList from '../../components/career/VideoList';
import AnyChart from '../../components/common/AnyChart';
import Advertisement from '../../components/common/Advertisement';
import { getPublicUrl } from '../../utils/common';
import './CareerDetails.css';

const mapStateToProps = (state) => {
    const {
        details,
        educationPaths,
        pointOfContact,
        advertisements,
        targetCareer,
        videos,
    } = state.career;

    return {
        details,
        educationPaths,
        pointOfContact,
        advertisements,
        targetCareer,
        videos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCareerDetails: (careerId) => {
            dispatch(getCareerDetails(careerId));
        },

        resetCareerDetails: () => {
            dispatch(resetCareerDetails());
        },

        getCareerEducationPaths: (careerId) => {
            dispatch(getCareerEducationPaths(careerId));
        },

        getCareerPointOfContact: (careerId) => {
            dispatch(getCareerPointOfContact(careerId));
        },

        getCareerAdvertisements: (careerId) => {
            dispatch(getCareerAdvertisements(careerId));
        },

        sendMessageToUser: (user, message) => {
            dispatch(sendMessageToUser(user, message));
        },

        // TODO: Implement this.
        onInstitutionClick: () => {
            dispatch(openSnackbar({
                message: "Institution Page has not been implemented yet!",
            }));
        },

        // TODO: Implement this.
        onShareButtonClick: () => {
            dispatch(openSnackbar({
                message: "Share Career has not been implemented yet!",
            }));
        },

        openDialog: (props) => {
            dispatch(openDialog(props));
        },

        closeDialog: () => {
            dispatch(closeDialog());
        },

        openSnackbar: (props) => {
            dispatch(openSnackbar(props));
        },

        setTargetCareer: (career) => dispatch(setTargetCareer(career)),
        unsetTargetCareer: () => dispatch(unsetTargetCareer()),
        getCareerVideos: (careerId) => dispatch(getCareerVideos(careerId)),
    };
};

const renderAdvertisements = (advertisements) => (
    advertisements.map((advertisement, idx) => (
        <div key={ idx } className="career-details-advertisement">
            <Advertisement { ...advertisement } />
        </div>
    ))
);

const renderCharts = ({ title, charts, icon }) => {
    return (
        <Card className="career-details-charts-card">
            <CardHeader
                title={ <div>
                    { icon }
                    <span className="career-details-charts-title">{ title }</span>
                </div> }
                actAsExpander={ true }
                showExpandableButton={ true }
            />
            <CardMedia expandable={ true } className="career-details-charts">
                <Row>
                    { charts.map((chart, idx) => {
                        return (
                            <Col key={ idx } xs={4}>
                                <AnyChart { ...chart } />
                            </Col>
                        );
                    }) }
                </Row>
            </CardMedia>
        </Card>
    );
};

// TODO: Convert all these functions into class methods.
const renderVideos = ({ videos, icon, title }) => {
    return (
        <Card>
            <CardHeader
                title={ <div>
                    { icon }
                    <span className="career-details-videos-title">{ title }</span>
                </div> }
                actAsExpander={ true }
                showExpandableButton={ true }
            />
            <CardMedia expandable={ true } className="career-details-videos">
                <VideoList videos={ videos } />
            </CardMedia>
        </Card>
    );
};

class CareerDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sendMessageTextFieldValue: "",
        };
    }

    componentDidMount() {
        const {
            careerId,
            getCareerDetails,
            getCareerEducationPaths,
            getCareerPointOfContact,
            getCareerAdvertisements,
            getCareerVideos,
            // TODO: Check whether career is favorited or targetted.
        } = this.props;

        getCareerDetails(careerId);
        getCareerEducationPaths(careerId);
        getCareerPointOfContact(careerId);
        getCareerAdvertisements(careerId);
        getCareerVideos(careerId);
    }

    updateSendMessageTextFieldValue = (evt, sendMessageTextFieldValue) => {
        this.setState({
            sendMessageTextFieldValue,
        });
    }

    onSendMessageButtonClick = () => {
        const message = this.state.sendMessageTextFieldValue;

        const {
            closeDialog,
            openSnackbar,
            pointOfContact,
            sendMessageToUser,
        } = this.props;

        if (message) {
            sendMessageToUser(pointOfContact, message);
            closeDialog();
        } else {
            openSnackbar({
                message: "You may not send a blank message",
            });
        }
    }

    onPointOfContactClick = () => {
        const {
            openDialog,
            closeDialog,
            pointOfContact,
        } = this.props;

        this.setState({
            sendMessageTextFieldValue: "",
        });

        openDialog({
            title: `Message ${ pointOfContact.name }`,
            width: '500px',

            actions: [
                <FlatButton
                    label="Cancel"
                    primary={ true }
                    onClick={ closeDialog }
                />,

                <RaisedButton
                    style={{ marginLeft: '8px' }}
                    label="Send"
                    primary={ true }
                    onClick={ this.onSendMessageButtonClick }
                />,
            ],

            children: (
                <TextField
                    onChange={ this.updateSendMessageTextFieldValue }
                    hintText="Type your message here."
                    fullWidth={ true }
                    multiLine={ true }
                />
            ),
        });
    }

    onSetTargetCareer = (evt, checked) => {
        if (checked) {
            const {
                openDialog,
                closeDialog,
                setTargetCareer,
                details: {
                    id,
                    title,
                },
            } = this.props;

            setTargetCareer({ id, title });
            openDialog({
                title: "You set a new target career!",
                width: '400px',
                actions: [
                    <RaisedButton
                        style={{ marginLeft: '8px' }}
                        label="Okay"
                        primary={ true }
                        onClick={ closeDialog }
                    />,
                ],
                children: (
                    <div>
                        <span>{ "This is great news! We'll email you about courses you can take right now and postsecondary opportunities that can propel you towards your new goal!" }</span>
                        <div
                            className="career-details-set-target-career-image"
                            style={{
                                backgroundImage: `url(${ getPublicUrl('/images/target/adam.gif') })`, // TODO: Make this dynamic.
                            }}>
                        </div>
                    </div>
                ),
            })
        } else {
            const {
                openSnackbar,
                unsetTargetCareer,
            } = this.props;

            unsetTargetCareer();
            openSnackbar({
                message: "This career is no longer your target.",
            });
        }
    }

    renderActions = () => {
        const {
            onShareButtonClick,
            targetCareer,
            details: {
                id,
            },
        } = this.props;

        return (
            <div className="career-details-actions">
                <Checkbox
                    className="career-details-action"
                    checkedIcon={ <Favorite /> }
                    uncheckedIcon={ <FavoriteBorder /> }
                    iconStyle={{ fill: red500 }}
                />
                <Checkbox
                    className="career-details-action"
                    checkedIcon={ <GpsFixed /> }
                    uncheckedIcon={ <GpsNotFixed /> }
                    iconStyle={{ fill: blue500 }}
                    checked={ id === targetCareer.id }
                    onCheck={ this.onSetTargetCareer }
                />
                <IconButton
                    style={{
                        marginLeft: '-12px',
                    }}
                    onClick={ onShareButtonClick }>
                    <Share color={ cyan500 } />
                </IconButton>
            </div>
        );
    }

    renderEducationPaths = () => {
        const {
            educationPaths,
            openDialog,
            closeDialog,
            // onInstitutionClick,

            muiTheme: {
                palette: {
                    primary1Color,
                },
            },
        } = this.props;

        const evenEducationPaths = educationPaths.filter((educationPath, idx) => (idx % 2 === 0));
        const oddEducationPaths = educationPaths.filter((educationPath, idx) => (idx % 2 === 1));

        const educationPathMapper = (educationPath, idx) => (
            <div key={ idx } className="career-details-education-path">
                <EducationPath { ...educationPath } onInstitutionClick={ ({
                        name,
                        imageUrl,
                        admissionAverage,
                        location,
                    }) => {
                    openDialog({
                        title: `${ educationPath.title } at ${ name }`,
                        width: '600px',

                        children: (
                            <Row>
                                <Col xs={6}>
                                    <div className="career-details-institution-image" style={{
                                            backgroundImage: `url(${ imageUrl })`,
                                        }}>
                                    </div>
                                    <div className="career-details-institution-data">
                                        <div>
                                            <Place color={ primary1Color } />
                                            <div className="career-details-institution-datum">
                                                { 'Location:' }
                                            </div>
                                            <span className="career-details-institution-datum" style={{ color: primary1Color }}>
                                                { location }
                                            </span>
                                        </div>
                                        <div>
                                            <Equalizer color={ primary1Color } />
                                            <div className="career-details-institution-datum">
                                                { 'Admission Average:' }
                                            </div>
                                            <span className="career-details-institution-datum" style={{ color: primary1Color }}>
                                                { `${ admissionAverage }%` }
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                </Col>
                            </Row>
                        ),

                        actions: [
                            <FlatButton
                                label="Close"
                                primary={ true }
                                onClick={ closeDialog }
                            />,

                            <RaisedButton
                                style={{ marginLeft: '8px' }}
                                label="Add Milestone"
                                primary={ true }
                                onClick={ () => {} }
                            />,
                        ],
                    });
                } } />
            </div>
        );

        return (
            <div className="career-details-education">
                <div className="career-details-education-title">
                    Suggested Education Paths
                </div>
                <div>
                    <Row>
                        <Col xs={6}>
                            { evenEducationPaths.map(educationPathMapper) }
                        </Col>
                        <Col xs={6}>
                            { oddEducationPaths.map(educationPathMapper) }
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

    render() {
        const {
            details: {
                title,
                description,
                charts,
                // favorited,
                // featured,
                // id,
            },

            pointOfContact,
            advertisements,
            videos,

            muiTheme: {
                palette: {
                    primary1Color,
                },
            },
        } = this.props;

        return (
            <div>
                <Row className="career-details-row">
                    <Col xs={8}>
                        <div className="career-details-title" style={{
                                color: primary1Color,
                            }}>
                            { title }
                        </div>
                    </Col>
                    <Col xsOffset={1} xs={3}>
                        { this.renderActions() }
                    </Col>
                </Row>
                <Row className="career-details-row">
                    <Col xs={8}>
                        <div className="career-details-description">
                            { description }
                        </div>
                    </Col>
                    <Col xsOffset={1} xs={3}>
                        <PointOfContact
                            title={ title }
                            { ...pointOfContact }
                            onClick={ this.onPointOfContactClick }
                        />
                        { renderAdvertisements(advertisements) }
                    </Col>
                </Row>
                <div className="career-details-charts-container">
                    { renderCharts({
                        title: 'Career Information',
                        charts: charts.slice(0, 3),
                        icon: <Equalizer color={ primary1Color } />,
                    }) }
                    { renderCharts({
                        title: 'Alignment with Your Profile',
                        charts: charts.slice(3, 6),
                        icon: <AccountCircle color={ primary1Color } />,
                    }) }
                </div>
                <div className="career-details-videos-container">
                    { renderVideos({
                        videos,
                        icon: <OndemandVideo color={ primary1Color } />,
                        title: 'Recommended Videos',
                    }) }
                </div>
                { this.renderEducationPaths() }
            </div>
        );
    }

    componentWillUnmount() {
        this.props.resetCareerDetails();
        // TODO: Also reset other stuff; or just don't reset anything.
    }
}

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(CareerDetails));