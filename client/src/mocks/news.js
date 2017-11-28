import _ from 'lodash';

import { getPublicUrl } from '../utils/common';
import loremIpsum from './lorem-ipsum';
import advertisements from './advertisements';

export default {
    articles: [{
        imageUrl: getPublicUrl('/images/articles/entrepreneurship.jpg'),
        href: 'http://stvp.stanford.edu/blog/entrepreneurship-education-essential',
        title: 'Entrepreneurship',
        subtitle: "Sometimes, you just gotta run your own business... and thinking early helps.",
    }, {
        imageUrl: getPublicUrl('/images/articles/institute_of_tech.jpg'),
        href: 'http://www.goodchoicesgoodlife.org/choices-for-young-people/articles-168402/',
        title: 'Is University for You?',
        subtitle: "Did you know that you have other options such as apprenticeships and bootcamps?",
    }, {
        imageUrl: getPublicUrl('/images/articles/jack_conte.jpg'),
        href: 'https://www.youtube.com/watch?v=RlQ3C_VanaU',
        title: 'The Story of Patreon',
        subtitle: "Founder Jack Conte talks about how to make money as an artist in the modern age.",
    }],

    careers: [{
        imageUrl: getPublicUrl('/images/careers/software_developer.jpg'),
        href: '/career/186',
        title: 'Software Developer',
        subtitle: `${ _.sample(loremIpsum).slice(0, 64) }...`,
    }, {
        imageUrl: getPublicUrl('/images/careers/web_designer.jpg'),
        href: '/career/216',
        title: 'Website Designer',
        subtitle: `${ _.sample(loremIpsum).slice(0, 64) }...`,
    }, {
        imageUrl: getPublicUrl('/images/careers/real_estate_agent.jpg'),
        href: '/career/173',
        title: 'Real Estate Agent',
        subtitle: `${ _.sample(loremIpsum).slice(0, 64) }...`,
    }],

    advertisements,
};