import { asyncGetReport } from '../api/report-api';

export const getReport = (reportId) => {
    return async (dispatch, getState) => {
        const report = await asyncGetReport(reportId);
        dispatch(setReport(report));
    };
};

export const setReport = (report) => {
    return {
        type: 'SET_REPORT',
        report,
    };
};