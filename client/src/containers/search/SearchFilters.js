import React from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FilterList from 'material-ui/svg-icons/content/filter-list';

import {
    SelectField,
    MenuItem,
    Slider,
    Checkbox,
} from 'material-ui';

import './SearchFilters.css';

const mapStateToProps = (state) => {
    return {
        //
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //
    };
};

const SearchFilters = ({
    muiTheme: {
        palette: {
            primary1Color,
            alternateTextColor,
        },
    },
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
                value={0}>
                <MenuItem value={0} primaryText="Title" />
                <MenuItem value={1} primaryText="Salary" />
                <MenuItem value={2} primaryText="Outlook" />
                <MenuItem value={3} primaryText="Education" />
            </SelectField>

            <div className="search-filters-section-title">
                Salary
            </div>
            <Slider
                sliderStyle={{
                    marginTop: '8px',
                    marginBottom: '8px',
                }}

                defaultValue={ 0.5 }
            />
            <div className="search-filters-slider-label">
                <span>{ 'At least ' }</span>
                <span style={{ color: primary1Color }}>{ '$50,000' }</span>
            </div>

            <div className="search-filters-section-title">
                Outlook
            </div>
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Good Outlook" />
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Okay Outlook" />
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Poor Outlook" />

            <div className="search-filters-section-title">
                Education
            </div>
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Bachelor's" />
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="Master's" />
            <Checkbox iconStyle={{ fill: primary1Color }} className="search-filters-checkbox" label="PhD" />
        </div>
    </div>
);

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilters));