export const asyncGetFavorites = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve({ careers: [] });
    }, 0));
};