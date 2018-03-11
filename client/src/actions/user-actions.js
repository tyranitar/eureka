import { asyncSendMessageToUser } from '../api/user-api';
import { openSnackbar } from './snackbar-actions';

export const sendMessageToUser = (user, message) => async (dispatch, getState) => {
    await asyncSendMessageToUser(user, message);
    dispatch(openSnackbar({
        message: "Your message has been sent!",
    }));
};