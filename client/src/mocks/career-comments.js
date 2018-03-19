import _ from 'lodash';

import loremIpsum from './lorem-ipsum';
import users from './users';

export const getCareerComments = () => (_.sampleSize(users, _.random(2, 3)).map((user, idx) => ({
    user,
    content: _.sample(loremIpsum),
    createdAt: new Date(),
    id: idx,
})));