import React from 'react';

import Questions from '../../containers/questionnaire/Questions';
import { getPublicUrl } from '../../utils/common';

const Questionnaire = () => (
    <div>
        <Questions />
        <div className="background" style={{
            backgroundImage: `url('${ getPublicUrl('/images/background.jpg') }')`,
        }}></div>
    </div>
);

export default Questionnaire;