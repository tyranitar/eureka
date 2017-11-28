import _ from 'lodash';

import { getPublicUrl } from '../utils/common';
import loremIpsum from './lorem-ipsum';

export default {
    careers: [{
        imageUrl: getPublicUrl('/images/career3.jpg'),
        href: '/career/0',
        title: 'Suggested Career',
        type: 'Suggested Career',
        content: _.sample(loremIpsum),
    }, {
        imageUrl: getPublicUrl('/images/career1.jpg'),
        href: '/career/1',
        title: 'Suggested Career',
        type: 'Suggested Career',
        content: _.sample(loremIpsum),
    }, {
        imageUrl: getPublicUrl('/images/career2.jpg'),
        href: '/career/2',
        title: 'Suggested Career',
        type: 'Suggested Career',
        content: _.sample(loremIpsum),
    }],

    articles: [],

    advertisements: [],
};