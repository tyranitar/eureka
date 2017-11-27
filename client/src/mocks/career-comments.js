import _ from 'lodash';

import { getPublicUrl } from '../utils/common';
import loremIpsum from './lorem-ipsum';

export default [{
    user: {
        name: 'John Doe',
        imageUrl: getPublicUrl('/images/john.jpg'),
    },

    createdAt: new Date(),
    content: _.sample(loremIpsum),
}, {
    user: {
        name: 'Jane Doe',
        imageUrl: getPublicUrl('/images/jane.jpg'),
    },

    createdAt: new Date(),
    content: _.sample(loremIpsum),
}].map((comment, idx) => (
    Object.assign({}, comment, {
        id: idx,
    })
));