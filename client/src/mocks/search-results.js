import autoCompleteResults from './auto-complete-results';
import loremIpsum from './lorem-ipsum';

export default autoCompleteResults.map((title) => ({
    title,
    description: loremIpsum,
}));