import loremIpsum from './lorem-ipsum';
import _ from 'lodash';

import { getPublicUrl } from '../utils/common';

export default [{
    name: 'University of Waterloo',
    imageUrl: getPublicUrl('/images/institutions/uw.jpg'),
}, {
    name: 'McGill University',
    imageUrl: getPublicUrl('/images/institutions/mcgill.jpg'),
}, {
    name: 'University of Toronto',
    imageUrl: getPublicUrl('/images/institutions/uoft.jpg'),
}, {
    name: 'University of British Columbia',
    imageUrl: getPublicUrl('/images/institutions/ubc.jpg'),
}, {
    name: 'Harvard University',
    imageUrl: getPublicUrl('/images/institutions/harvard.jpg'),
}, {
    name: 'Stanford University',
    imageUrl: getPublicUrl('/images/institutions/stanford.jpg'),
}, {
    name: 'Carnegie Mellon University',
    imageUrl: getPublicUrl('/images/institutions/cmu.jpg'),
}, {
    name: 'California Institute of Technology',
    imageUrl: getPublicUrl('/images/institutions/caltech.jpg'),
}, {
    name: 'Massachusetts Institute of Technology',
    imageUrl: getPublicUrl('/images/institutions/mit.jpg'),
}].map((university) => (Object.assign({}, university, {
    description: _.sample(loremIpsum),
})));