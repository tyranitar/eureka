import careers from '../mocks/search-results';
import _ from 'lodash';

import {
    red500,
    pink400,
    indigo500,
    lightBlue500,
    cyan500,
    amber400,
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';

const outlookMap = {
    'Good Outlook': 5,
    'Okay Outlook': 3,
    'Poor Outlook': 1,
};

const educationMap = {
    'Bachelor\'s': 0,
    'Master\'s': 1,
    'PhD': 2,
};

const skills = [
    'Math',
    'Physics',
    'Chemistry',
    'Biology',
    'Communication',
    'Visual Arts',
    'Statistics',
    'Economics',
    'History',
];

const countries = [
    'United States',
    'Canada',
    'Japan',
    'China',
    'South Korea',
];

const countryColors = [
    lightBlue500,
    red500,
    pink400,
    amber400,
    indigo500,
];

export const asyncGetCareerDetails = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const career = careers[careerId];

        const {
            description,
            salary,
            outlook,
            education,
        } = career;

        const careerDetails = Object.assign({}, career, {
            description: [description, description, description].join('\n\n'),

            charts: [{
                type: 'bar',

                data: {
                    labels: ['10%', '25%', '50%', '75%', '90%'],

                    datasets: [{
                        label: 'Salary by Percentile',
                        backgroundColor: lightBlue500,

                        data: [
                            salary * 0.5,
                            salary * 0.75,
                            salary,
                            salary * 1.25,
                            salary * 1.5
                        ],
                    }],
                },

                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        }],
                    },
                },
            }, {
                type: 'line',

                data: {
                    labels: [6, 5, 4, 3, 2, 1, 0].map((yearsAgo) => {
                        return (new Date()).getFullYear() - yearsAgo;
                    }),

                    datasets: [{
                        label: '# of Hires by Year',
                        borderColor: cyan500,
                        backgroundColor: fade(cyan500, 0.5),

                        data: [
                            ...(Array(6).fill(0)).map(() => {
                                return _.random(100000, 500000);
                            }),

                            outlookMap[outlook] * 100000,
                        ],
                    }],
                },

                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                suggestedMax: 600000,
                            },
                        }],
                    },
                },
            }, {
                type: 'doughnut',

                data: {
                    labels: ['Bachelor\'s', 'Master\'s', 'PhD'],

                    datasets: [{
                        backgroundColor: [pink400, lightBlue500, amber400],

                        data: (() => {
                            const ret = [0, 0, 0];
                            let remainder = 100;
                            let max = 0;
                            let maxIdx = 0;

                            for (let i = 0; i < 3; i++) {
                                if (i < 2) {
                                    ret[i] = _.random(0, remainder);
                                    remainder -= ret[i];
                                } else {
                                    ret[i] = remainder;
                                }

                                if (ret[i] > max) {
                                    max = ret[i];
                                    maxIdx = i;
                                }

                                ret[i] /= 100;
                            }

                            const curIdx = educationMap[education];
                            const temp = ret[curIdx];

                            ret[curIdx] = ret[maxIdx];
                            ret[maxIdx] = temp;

                            return ret;
                        })(),
                    }],
                },
            }, {
                type: 'radar',

                data: {
                    labels: _.sampleSize(skills, 6),

                    datasets: [{
                        label: 'Required Skill Levels',
                        borderColor: pink400,
                        backgroundColor: fade(pink400, 0.5),

                        data: (Array(6).fill(0)).map(() => (_.random(1, 5))),
                    }, {
                        label: 'My Projected Skill Levels',
                        borderColor: lightBlue500,
                        backgroundColor: fade(lightBlue500, 0.5),

                        data: (Array(6).fill(0)).map(() => (_.random(1, 5))),
                    }],
                },

                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                },
            }, {
                type: 'bar',

                data: {
                    labels: ['Female', 'Male'],

                    datasets: [{
                        label: 'Gender Distribution',
                        backgroundColor: [pink400, lightBlue500],

                        data: (() => {
                            const numFemales = _.random(0, 100);
                            const numMales = 100 - numFemales;

                            return [numFemales / 100, numMales / 100];
                        })(),
                    }],
                },

                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        }],
                    },
                },
            }, {
                type: 'bubble',

                data: {
                    datasets: countries.map((country, idx) => ({
                        label: country,
                        borderColor: countryColors[idx],
                        backgroundColor: fade(countryColors[idx], 0.5),

                        data: [{
                            x: _.random(1, 10),
                            y: _.random(50000, 150000),
                            r: _.random(10, 30),
                        }],
                    })),
                },

                options: {
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Avg Salary',
                            },

                            ticks: {
                                beginAtZero: true,
                                suggestedMax: 175000,
                            },
                        }],

                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Job Satisfaction',
                            },

                            ticks: {
                                beginAtZero: true,
                                suggestedMax: 15,
                            },
                        }],
                    },
                },
            }],
        });

        resolve(careerDetails);
    }, 0));
};