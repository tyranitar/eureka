import loremIpsum from './lorem-ipsum';
import _ from 'lodash';

import { getPublicUrl } from '../utils/common';
import courses from './courses';

export default [{
    name: 'University of Waterloo',
    location: 'Waterloo, ON',
    imageUrl: getPublicUrl('/images/institutions/uw.jpg'),
}, {
    name: 'McGill University',
    location: 'Montreal, QC',
    imageUrl: getPublicUrl('/images/institutions/mcgill.jpg'),
}, {
    name: 'University of Toronto',
    location: 'Toronto, ON',
    imageUrl: getPublicUrl('/images/institutions/uoft.jpg'),
}, {
    name: 'University of British Columbia',
    location: 'Vancouver, BC',
    imageUrl: getPublicUrl('/images/institutions/ubc.jpg'),
}, {
    name: 'Harvard University',
    location: 'Cambridge, MA',
    imageUrl: getPublicUrl('/images/institutions/harvard.jpg'),
}, {
    name: 'Stanford University',
    location: 'Stanford, CA',
    imageUrl: getPublicUrl('/images/institutions/stanford.jpg'),
}, {
    name: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    imageUrl: getPublicUrl('/images/institutions/cmu.jpg'),
}, {
    name: 'California Institute of Technology',
    location: 'Pasadena, CA',
    imageUrl: getPublicUrl('/images/institutions/caltech.jpg'),
}, {
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    imageUrl: getPublicUrl('/images/institutions/mit.jpg'),
}].map((university) => (Object.assign({}, university, {
    description: _.sample(loremIpsum),
    admissionAverage: _.random(90, 99),
    courses: _.sampleSize(courses, 5),
})));