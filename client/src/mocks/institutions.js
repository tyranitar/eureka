import loremIpsum from './lorem-ipsum';
import _ from 'lodash';

import { getPublicUrl } from '../utils/common';

export default [{
    name: 'British Columbia Institute of Technology',
    imageUrl: getPublicUrl('/images/institutions/bcit.jpg'),
}, {
    name: 'George Brown College',
    imageUrl: getPublicUrl('/images/institutions/gbrown.jpg'),
}, {
    name: 'Centennial College',
    imageUrl: getPublicUrl('/images/institutions/centennial.jpg'),
}, {
    name: 'Conestoga College',
    imageUrl: getPublicUrl('/images/institutions/conestoga.jpg'),
}, {
    name: 'Confederation College',
    imageUrl: getPublicUrl('/images/institutions/confederation.jpg'),
}, {
    name: 'Sheridan College',
    imageUrl: getPublicUrl('/images/institutions/sheridan.jpg'),
}].map((institution) => (Object.assign({}, institution, {
    description: _.sample(loremIpsum),
})));