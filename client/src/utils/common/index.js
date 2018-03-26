export const getPublicUrl = (path) => {
    return process.env.PUBLIC_URL + path;
};

// TODO: Support decimal.
export const formatMoney = (num) => {
    return `$${ num.toFixed().replace(/(\d)(?=(\d{3})+$)/g, '$1,') }`;
};