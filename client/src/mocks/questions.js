import { getPublicUrl } from '../utils/common';
import subjects from './subjects';

export default [
    {
        type: 'intro',
        text: `Hello! You're probably here to start pursuing a career.
            To help you with that, we would like to know a bit more about you first!`,
        options: [
            getPublicUrl('/images/gifs/get_a_job.gif'),
        ],
    }, {
        type: 'radio',
        text: "What grade are you in?",
        options: [
            "Grade 8",
            "Grade 9",
            "Grade 10",
            "Grade 11",
            "Grade 12",
        ],
    }, {
        type: 'radio',
        text: "Are you male or female?",
        options: [
            "Male",
            "Female",
            "Other",
        ],
    }, {
        type: 'radio',
        text: "What is the most important factor in pursuing a career?",
        options: [
            "Salary",
            "Required education",
            "Job satisfaction",
            "Work-life balance",
        ],
    }, {
        type: 'checkbox',
        text: "What are your favorite subjects?",
        options: subjects,
    // }, {
    //     type: 'checkbox',
    //     text: "How would you describe yourself?",
    //     options: [
    //         "Creative and artistic",
    //         "Clever problem solver",
    //         "Excellent communicator",
    //     ],
    },
];