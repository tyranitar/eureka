import _ from 'lodash';

import universities from './universities';
import institutions from './institutions';

export default _.sampleSize([{
    type: 'University Degree',
    title: 'Systems Design Engineering',

    institutions: _.sampleSize(universities, 3),
}, {
    type: 'University Degree',
    title: 'Computer Science',

    institutions: _.sampleSize(universities, 3),
}, {
    type: 'University Degree',
    title: 'Data Science',

    institutions: _.sampleSize(universities, 3),
}, {
    type: 'University Degree',
    title: 'Software Engineering',

    institutions: _.sampleSize(universities, 3),
}, {
    type: 'Apprenticeship',
    title: 'Digital Media',

    institutions: _.sampleSize(institutions, 3),
}, {
    type: 'Apprenticeship',
    title: 'Accounting',

    institutions: _.sampleSize(institutions, 3),
}, {
    type: 'Apprenticeship',
    title: 'Telecommunications',

    institutions: _.sampleSize(institutions, 3),
}, {
    type: 'Apprenticeship',
    title: 'Logistics',

    institutions: _.sampleSize(institutions, 3),
}], 4);