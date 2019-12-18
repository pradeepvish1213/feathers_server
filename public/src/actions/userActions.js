import { userConstants, CoreHelper } from '../constants';
import { alertActions } from './alertActions';
import { history, webService } from '../utils';

export const userActions = {
    login,
    logout,
    register,
};

function login(form_data) {
    return (dispatch) => {
        let apiEndpoint = 'authentication';
        dispatch(alertActions.is_loading(true));
        webService.post(apiEndpoint, form_data).then((response) => {
            let Result = CoreHelper.getApiMessage(response);
            if (Result.code === 200) {
                CoreHelper.setSeetionLocalStorageData(response.data);
                dispatch(success(response.data.user));
                dispatch(alertActions.success('Login successful'));
                history.push('/home');
            } else {
                dispatch(failure(Result.message));
                dispatch(alertActions.error(Result.message));
            }
            dispatch(alertActions.is_loading(false));
        });
    };
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(form_data) {
    return (dispatch) => {
        let apiEndpoint = 'logout';
        webService.post(apiEndpoint, form_data).then((response) => {
            if (response.data.status === 200) {
                localStorage.clear();
                history.push('/');
            } else {
                dispatch(failure(response.data.message));
                dispatch(alertActions.error(response.data.message));
            }
        });
        return { type: userConstants.LOGOUT };
    }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(form_data) {
    return (dispatch) => {
        let apiEndpoint = 'users';
        dispatch(alertActions.is_loading(true));
        webService.post(apiEndpoint, form_data).then((response) => {
            let Result = CoreHelper.getApiMessage(response);
            if (Result.code === 200) {
                dispatch(success(Result.message));
                dispatch(alertActions.success('Register successful'));
                history.push('/login');
            } else {
                dispatch(failure(Result.message));
                dispatch(alertActions.error(Result.message));
            }
            dispatch(alertActions.is_loading(false));
        });
    };

    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}