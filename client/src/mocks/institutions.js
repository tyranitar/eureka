import loremIpsum from './lorem-ipsum';
import _ from 'lodash';

import { getPublicUrl } from '../utils/common';

export default [{
    name: 'British Columbia Institute of Technology',
    imageUrl: getPublicUrl('/images/bcit.jpg'),
}, {
    name: 'George Brown College',
    imageUrl: getPublicUrl('/images/gbrown.jpg'),
}, {
    name: 'Centennial College',
    imageUrl: getPublicUrl('/images/centennial.jpg'),
}, {
    name: 'Conestoga College',
    imageUrl: getPublicUrl('/images/conestoga.jpg'),
}, {
    name: 'Confederation College',
    imageUrl: getPublicUrl('/images/confederation.jpg'),
}, {
    name: 'Sheridan College',
    imageUrl: getPublicUrl('/images/sheridan.jpg'),
}].map((institution) => (Object.assign({}, institution, {
    description: _.sample(loremIpsum),
})));