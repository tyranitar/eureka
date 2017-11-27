import loremIpsum from './lorem-ipsum';
import _ from 'lodash';

import { getPublicUrl } from '../utils/common';

export default [{
    name: 'University of Waterloo',
    imageUrl: getPublicUrl('/images/uw.jpg'),
}, {
    name: 'McGill University',
    imageUrl: getPublicUrl('/images/mcgill.jpg'),
}, {
    name: 'University of Toronto',
    imageUrl: getPublicUrl('/images/uoft.jpg'),
}, {
    name: 'University of British Columbia',
    imageUrl: getPublicUrl('/images/ubc.jpg'),
}, {
    name: 'Harvard University',
    imageUrl: getPublicUrl('/images/harvard.jpg'),
}, {
    name: 'Stanford University',
    imageUrl: getPublicUrl('/images/stanford.jpg'),
}, {
    name: 'Carnegie Mellon University',
    imageUrl: getPublicUrl('/images/cmu.jpg'),
}, {
    name: 'California Institute of Technology',
    imageUrl: getPublicUrl('/images/caltech.jpg'),
}, {
    name: 'Massachusetts Institute of Technology',
    imageUrl: getPublicUrl('/images/mit.jpg'),
}].map((university) => (Object.assign({}, university, {
    description: _.sample(loremIpsum),
})));