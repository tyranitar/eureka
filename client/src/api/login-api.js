export const asyncLogin = ({
    email,
    password,
}) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 1000));
};

export const asyncLogout = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 1000));
};