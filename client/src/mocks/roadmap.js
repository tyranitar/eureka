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

    todos: [{
        title: "Calculus 11",
        completed: false,
    }, {
        title: "Linear Algebra 11",
        completed: false,
    }, {
        title: "Physics 11",
        completed: false,
    }, {
        title: "Chemistry 11",
        completed: false,
    }, {
        title: "English 11",
        completed: false,
    }],
}, {
    title: 'Grade 12',
    completed: false,
    description: `You are nearing the end of your high school career. It is now time to think about the courses you have taken, and start considering postsecondary education.`,

    todos: [{
        title: "Calculus 12",
        completed: false,
    }, {
        title: "Linear Algebra 12",
        completed: false,
    }, {
        title: "Physics 12",
        completed: false,
    }, {
        title: "Chemistry 12",
        completed: false,
    }, {
        title: "English 12",
        completed: false,
    }],
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