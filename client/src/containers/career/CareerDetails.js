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
    setTargetCareer,
    unsetTargetCareer,
} from '../../actions/career-actions';

import { openDialog, closeDialog } from '../../actions/dialog-actions';
import { openSnackbar } from '../../actions/snackbar-actions';
import { sendMessageToUser } from '../../actions/user-actions';
import EducationPath from '../../components/career/EducationPath';
import PointOfContact from '../../components/career/PointOfContact';
import AnyChart from '../../components/common/AnyChart';
import Advertisement from '../../components/common/Advertisement';
import './CareerDetails.css';

const mapStateToProps = (state) => {
    const {
        details,
        educationPaths,
        pointOfContact,
        advertisements,
        targetCareerId,
    } = state.career;

    return {
        details,
        educationPaths,
        pointOfContact,
        advertisements,
        targetCareerId,
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

        setTargetCareer: (careerId) => dispatch(setTargetCareer(careerId)),
        unsetTargetCareer: () => dispatch(unsetTargetCareer()),
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

const renderEducationPaths = (educationPaths, onInstitutionClick) => {
    const evenEducationPaths = educationPaths.filter((educationPath, idx) => (idx % 2 === 0));
    const oddEducationPaths = educationPaths.filter((educationPath, idx) => (idx % 2 === 1));

    const educationPathMapper = (educationPath, idx) => (
        <div key={ idx } className="career-details-education-path">
            <EducationPath { ...educationPath } onInstitutionClick={ onInstitutionClick } />
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
            // TODO: Check whether career is favorited or targetted.
        } = this.props;

        getCareerDetails(careerId);
        getCareerEducationPaths(careerId);
        getCareerPointOfContact(careerId);
        getCareerAdvertisements(careerId);
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
            )
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
                },
            } = this.props;

            setTargetCareer(id);
            openDialog({
                title: "You have a new target career!",
                width: '400px',
                actions: [
                    <RaisedButton
                        style={{ marginLeft: '8px' }}
                        label="Okay"
                        primary={ true }
                        onClick={ closeDialog }
                    />,
                ],
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
            targetCareerId,
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
                    checked={ id === targetCareerId }
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
            educationPaths,
            onInstitutionClick,

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
                { renderEducationPaths(educationPaths, onInstitutionClick) }
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