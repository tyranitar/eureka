import React from 'react';

import LoginCard from '../../containers/login/LoginCard';

const Login = ({
    location,
}) => (
    <div>
        <LoginCard isLogin={ location.pathname.includes('login') } />
        <div className="background"></div>
    </div>
);

export default Login;