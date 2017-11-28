import React from 'react';

import LoginCard from '../../containers/login/LoginCard';
import { getPublicUrl } from '../../utils/common';

const Login = ({
    location,
}) => (
    <div>
        <LoginCard isLogin={ location.pathname.includes('login') } />
        <div className="background" style={{
            backgroundImage: `url('${ getPublicUrl('/images/background.jpg') }')`,
        }}></div>
    </div>
);

export default Login;