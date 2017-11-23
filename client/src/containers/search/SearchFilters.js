import React from 'react';
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
} from 'material-ui';

import {
    updateSearchQuery,
    updateSearchQueryOutlook,
    updateSearchQueryEducation,
} from '../../actions/search-actions';

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
    };
};

const SearchFilters = ({
    query: {
        searchString,
        sortBy,
        descending,
        minSalary,
        outlook,
        education,
    },

    muiTheme: {
        palette: {
            primary1Color,
            alternateTextColor,
        },
    },

    updateQuery,
    updateQueryCurry,
    updateQueryOutlookCurry,
    updateQueryEducationCurry,
}) => (
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
                Salary
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

            <div className="search-filters-section-title">
                Outlook
            </div>
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Good Outlook" checked={ outlook['Good Outlook'] } onCheck={ updateQueryOutlookCurry('Good Outlook', !outlook['Good Outlook']) } />
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Okay Outlook" checked={ outlook['Okay Outlook'] } onCheck={ updateQueryOutlookCurry('Okay Outlook', !outlook['Okay Outlook']) } />
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Poor Outlook" checked={ outlook['Poor Outlook'] } onCheck={ updateQueryOutlookCurry('Poor Outlook', !outlook['Poor Outlook']) } />

            <div className="search-filters-section-title">
                Required Education
            </div>
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Bachelor's" checked={ education['Bachelor\'s'] } onCheck={ updateQueryEducationCurry('Bachelor\'s', !education['Bachelor\'s']) } />
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Master's" checked={ education['Master\'s'] } onCheck={ updateQueryEducationCurry('Master\'s', !education['Master\'s']) } />
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="PhD" checked={ education['PhD'] } onCheck={ updateQueryEducationCurry('PhD', !education['PhD']) } />
        </div>
    </div>
);

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilters));