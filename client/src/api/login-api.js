export const asyncLogin = ({
    email,
    password,
}) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};

export const asyncLogout = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};

export const asyncSignup = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};