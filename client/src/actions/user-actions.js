import { asyncSendMessageToUser } from '../api/user-api';
import { openSnackbar } from './snackbar-actions';

export const sendMessageToUser = (user, message) => (dispatch, getState) => {
    asyncSendMessageToUser(user, message).then(() => {
        dispatch(openSnackbar({
            message: "Your message has been sent!",
        }));
    });
};