import loremIpsum from './lorem-ipsum';
import _ from 'lodash';

import { getPublicUrl } from '../utils/common';

export default [{
    name: 'British Columbia Institute of Technology',
    location: 'Burnaby, BC',
    imageUrl: getPublicUrl('/images/institutions/bcit.jpg'),
}, {
    name: 'George Brown College',
    location: 'Toronto, ON',
    imageUrl: getPublicUrl('/images/institutions/gbrown.jpg'),
}, {
    name: 'Centennial College',
    location: 'Toronto, ON',
    imageUrl: getPublicUrl('/images/institutions/centennial.jpg'),
}, {
    name: 'Conestoga College',
    location: 'Kitchener, ON',
    imageUrl: getPublicUrl('/images/institutions/conestoga.jpg'),
}, {
    name: 'Confederation College',
    location: 'Thunder Bay, ON',
    imageUrl: getPublicUrl('/images/institutions/confederation.jpg'),
}, {
    name: 'Sheridan College',
    location: 'Oakville, ON',
    imageUrl: getPublicUrl('/images/institutions/sheridan.jpg'),
}].map((institution) => (Object.assign({}, institution, {
    description: _.sample(loremIpsum),
    admissionAverage: _.random(90, 99),
})));