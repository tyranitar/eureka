import { getPublicUrl } from '../utils/common';

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
            "Outlook",
            "Education",
        ],
    }, {
        type: 'checkbox',
        text: "How would you describe yourself?",

        options: [
            "Creative and artistic",
            "Clever problem solver",
            "Excellent communicator",
        ],
    },
];