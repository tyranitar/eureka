import { getCharts } from '../mocks/career-details';
import careers from '../mocks/search-results';

export const asyncGetReport = (reportId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const charts = getCharts(careers[reportId]);
        resolve({
            title: 'Veronica\'s Career Plan',
            careerTitle: careers[reportId].title,
            createdAt: new Date(),
            charts: [{
                title: 'Expected Salary',
                chart: charts[0],
            }, {
                title: 'Required Education',
                chart: charts[2],
            }, {
                title: 'Personal Alignment',
                chart: charts[3],
            }],
            insights: [],
            educationPlans: [],
        });
    }, 0));
};