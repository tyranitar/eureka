import _ from 'lodash';

import { getCharts } from '../mocks/career-details';
import careers from '../mocks/search-results';
import educationPaths from '../mocks/career-education-paths';

export const asyncGetReport = (reportId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const career = careers[reportId];
        const charts = getCharts(career);
        const studentName = 'Veronica';
        charts[3].data.datasets[0].label = `${ studentName }'s Projected Skill Levels`;
        resolve({
            studentName,
            careerTitle: career.title,
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
            educationPlans: _.sampleSize(educationPaths, 3).map((educationPath) => {
                const institution = _.sample(educationPath.institutions);
                return {
                    title: educationPath.title,
                    institution,
                    expectedCosts: {
                        'Total Tuition': _.random(20, 80) * 1000, // NOTE: This data should be available in university websites.
                        'Total Living Costs': _.random(1, 3) * 1000 * 12 * 4, // NOTE: This data might be harder to obtain.
                    },
                    expectedBenefits: {
                        'Scholarships': _.random(1, 10) * 1000,
                        'Bursaries': _.random(1, 5) * 1000,
                        'Total Co-op Earnings': _.random(50, 200) * 1000,
                    },
                    // NOTE: Need loans if net negative.
                    expectedSalary: _.random(60, 120) * 1000, // NOTE: May have to use industry average if institution-graduate-specific data is unavailable.
                    courses: institution.courses.map((course) => ({
                        name: course,
                        status: _.sample([
                            `Achieved ${ _.random(90, 99) }%`,
                            _.sample([
                                "Grade 11",
                                "Grade 12",
                                "Summer School",
                            ]),
                        ]),
                    })),
                };
            }),
        });
    }, 0));
};