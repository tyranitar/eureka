const steps = [{
    title: 'Grade 10',
    completed: false,
    description: `At this point, you are trying to decide which career to pursue, and which academic path to take in order to achieve that career.`,

    todos: [{
        title: "Mathematics 10",
        completed: false,
    }, {
        title: "Science 10",
        completed: false,
    }, {
        title: "English 10",
        completed: false,
    }],
}, {
    title: 'Grade 11',
    completed: false,
    description: `Now that you have taken some courses, it is time to reflect on whether you want to continue on your initial academic path.
        You may want to adjust your academic path as you see fit.`,

    todos: [],
}, {
    title: 'Grade 12',
    completed: false,
    description: `You are nearing the end of your high school career. It is now time to think about the courses you have taken, and start considering postsecondary education.`,

    todos: [],
}];

let activeStep = 0;

steps.some((step, idx) => {
    if (!step.completed) {
        activeStep = idx;
        return true;
    }

    return false;
});

export default {
    steps,
    activeStep,
};