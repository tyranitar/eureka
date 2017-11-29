export const openDialog = ({
    title,
    width,
    actions,
    children,
}) => {
    return {
        type: 'OPEN_DIALOG',
        title,
        width,
        actions,
        children,
    };
};

export const closeDialog = () => {
    return {
        type: 'CLOSE_DIALOG',
    };
};