import subjects from './subjects';

export default {
    subjects: subjects.reduce((subjectMap, subject) => {
        subjectMap[subject] = false;
        return subjectMap;
    }, {}),
};