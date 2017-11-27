import _ from 'lodash';

import universities from './universities';
import institutions from './institutions';

export default [{
    type: 'University Degree',
    title: 'University Degree A',

    institutions: _.sampleSize(universities, 3),
}, {
    type: 'Apprenticeship',
    title: 'Apprenticeship A',

    institutions: _.sampleSize(institutions, 3),
}, {
    type: 'University Degree',
    title: 'University Degree B',

    institutions: _.sampleSize(universities, 3),
}, {
    type: 'Apprenticeship',
    title: 'Apprenticeship B',

    institutions: _.sampleSize(institutions, 3),
}];