import _ from 'lodash';
import { getPublicUrl } from '../utils/common';

export default [{
    name: 'Ross Geller',
    yearsInField: _.random(0, 5),
    imageUrl: getPublicUrl('/images/users/ross_geller.jpg'),
}, {
    name: 'Rachel Green',
    yearsInField: _.random(0, 5),
    imageUrl: getPublicUrl('/images/users/rachel_green.jpg'),
}, {
    name: 'Monica Geller',
    yearsInField: _.random(0, 5),
    imageUrl: getPublicUrl('/images/users/monica_geller.jpg'),
}, {
    name: 'Chandler Bing',
    yearsInField: _.random(0, 5),
    imageUrl: getPublicUrl('/images/users/chandler_bing.jpg'),
}, {
    name: 'Phoebe Buffay',
    yearsInField: _.random(0, 5),
    imageUrl: getPublicUrl('/images/users/phoebe_buffay.jpg'),
}, {
    name: 'Joey Tribbiani',
    yearsInField: _.random(0, 5),
    imageUrl: getPublicUrl('/images/users/joey_tribbiani.jpg'),
}];