import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';

import {
    SelectField,
    MenuItem,
    Slider,
    Checkbox,
    Chip,
    FlatButton,
    RaisedButton,
} from 'material-ui';

import {
    updateSearchQuery,
    updateSearchQueryOutlook,
    updateSearchQueryEducation,
    setSubjectFilters,
    removeSubjectFilter,
} from '../../actions/search-actions';

import { openDialog, closeDialog } from '../../actions/dialog-actions';
import { getSearchFilters } from '../../actions/search-actions';

import './SearchFilters.css';

const mapStateToProps = (state) => {
    const { query } = state.search;

    return {
        query,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuery: (field, value) => {
            dispatch(updateSearchQuery(field, value));
        },

        updateQueryCurry: (field, value) => {
            return () => {
                dispatch(updateSearchQuery(field, value));
            };
        },

        updateQueryOutlookCurry: (field, value) => {
            return () => {
                dispatch(updateSearchQueryOutlook(field, value));
            };
        },

        updateQueryEducationCurry: (field, value) => {
            return () => {
                dispatch(updateSearchQueryEducation(field, value));
            };
        },

        openDialog: (props) => {
            dispatch(openDialog(props));
        },

        closeDialog: () => {
            dispatch(closeDialog());
        },

        getSearchFilters: () => {
            dispatch(getSearchFilters());
        },

        setSubjectFilters: (subjects) => {
            dispatch(setSubjectFilters(subjects));
        },

        removeSubjectFilter: (subject) => {
            dispatch(removeSubjectFilter(subject));
        },
    };
};

class SearchFilters extends Component {
    constructor(props) {
        super(props);

        this.subjects = {};
    }

    componentDidMount() {
        this.props.getSearchFilters();
    }

    checkSubject = (subject) => {
        this.subjects[subject] = !this.subjects[subject];
    }

    renderSubjectCheckboxes() {
        const {
            muiTheme: {
                palette: {
                    primary1Color,
                },
            },
        } = this.props;

        return Object.keys(this.subjects).map((subject, idx) => {
            return <Checkbox
                key={ idx }
                iconStyle={{ fill: primary1Color }}
                className="search-filters-checkbox"
                label={ subject }
                defaultChecked={ this.subjects[subject] }
                onCheck={ this.checkSubject.bind(this, subject) }
            />;
        });
    }

    onAddSubjectClick = () => {
        const {
            query: {
                subjects,
            },
            openDialog,
            closeDialog,
        } = this.props;

        this.subjects = Object.assign({}, subjects);

        openDialog({
            title: "Add related subject",
            width: '300px',
            actions: [
                <FlatButton
                    label="Cancel"
                    primary={ true }
                    onClick={ closeDialog }
                />,

                <RaisedButton
                    style={{ marginLeft: '8px' }}
                    label="ADD"
                    primary={ true }
                    onClick={ this.onAddSubject }
                />,
            ],
            children: this.renderSubjectCheckboxes(),
        });
    }

    onAddSubject = () => {
        this.props.setSubjectFilters(this.subjects);
        this.props.closeDialog();
    }

    removeSubjectFilter = (subject) => {
        this.props.removeSubjectFilter(subject);
    }

    renderSubjectChips = () => {
        const {
            query: {
                subjects,
            },
        } = this.props;

        return Object.keys(subjects).filter((subject) => subjects[subject]).map((subject, idx) => {
            return (
                <div
                    key={idx}
                    className="search-filters-subject-chip">
                    <Chip onRequestDelete={ this.removeSubjectFilter.bind(this, subject) }>
                        { subject }
                    </Chip>
                </div>
            );
        });
    }

    render() {
        const {
            query: {
                // searchString,
                sortBy,
                descending,
                minSalary,
                // outlook,
                education,
            },

            muiTheme: {
                palette: {
                    primary1Color,
                    // alternateTextColor,
                },
            },

            updateQuery,
            updateQueryCurry,
            // updateQueryOutlookCurry,
            updateQueryEducationCurry,
        } = this.props;

        return (
            <div className="search-filters">
                <div className="search-filters-header">
                    <FilterList color={ primary1Color } />
                    <span className="search-filters-title">
                        Search Filters
                    </span>
                </div>
                <div className="search-filters-body">
                    <div className="search-filters-section-title">
                        Sort by
                    </div>
                    <SelectField
                        fullWidth={ true }
                        labelStyle={{
                            color: primary1Color,
                        }}
                        selectedMenuItemStyle={{
                            color: primary1Color,
                        }}
                        value={sortBy}
                        onChange={ (evt, idx, val) => { updateQuery('sortBy', val); } }>
                        <MenuItem value={'title'} primaryText="Title" />
                        <MenuItem value={'salary'} primaryText="Salary" />
                        <MenuItem value={'outlook'} primaryText="Outlook" />
                        <MenuItem value={'education'} primaryText="Education" />
                    </SelectField>
                    <Checkbox
                        checked={ descending }
                        iconStyle={{ fill: primary1Color }}
                        checkedIcon={ <ArrowDownward /> }
                        uncheckedIcon={ <ArrowUpward /> }
                        label={ descending ? 'Descending' : 'Ascending' }
                        onCheck={ updateQueryCurry('descending', !descending) }
                    />

                    <div className="search-filters-section-title">
                        Expected Salary
                    </div>
                    <Slider
                        sliderStyle={{
                            marginTop: '8px',
                            marginBottom: '8px',
                        }}
                        min={ 0 }
                        step={ 5000 }
                        max={ 150000 }
                        value={ minSalary }
                        onChange={ (evt, val) => { updateQuery('minSalary', val); } }
                    />
                    <div className="search-filters-slider-label">
                        <span>{ 'At least ' }</span>
                        <span style={{ color: primary1Color }}>{ `$${minSalary.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}` }</span>
                    </div>

                    {
                    // <div className="search-filters-section-title">
                    //     Employment Outlook
                    // </div>
                    // <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Good Outlook" checked={ outlook['Good Outlook'] } onCheck={ updateQueryOutlookCurry('Good Outlook', !outlook['Good Outlook']) } />
                    // <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Okay Outlook" checked={ outlook['Okay Outlook'] } onCheck={ updateQueryOutlookCurry('Okay Outlook', !outlook['Okay Outlook']) } />
                    // <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Poor Outlook" checked={ outlook['Poor Outlook'] } onCheck={ updateQueryOutlookCurry('Poor Outlook', !outlook['Poor Outlook']) } />
                    }

                    <div className="search-filters-section-title">
                        Required Education
                    </div>
                    <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Bachelor's" checked={ education['Bachelor\'s'] } onCheck={ updateQueryEducationCurry('Bachelor\'s', !education['Bachelor\'s']) } />
                    <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Master's" checked={ education['Master\'s'] } onCheck={ updateQueryEducationCurry('Master\'s', !education['Master\'s']) } />
                    <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="PhD" checked={ education['PhD'] } onCheck={ updateQueryEducationCurry('PhD', !education['PhD']) } />

                    <div className="search-filters-section-title">
                        Related Subjects
                    </div>
                    { this.renderSubjectChips() }
                    <div className="search-filters-section-action" style={{ color: primary1Color }} onClick={ this.onAddSubjectClick }>
                        Add subject +
                    </div>
                </div>
            </div>
        );
    }
}

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilters));