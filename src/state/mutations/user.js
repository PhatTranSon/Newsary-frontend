/* User mutation */
export const REQUEST_USER_INFO = "REQUEST_USER_INFO";
export const REQUEST_USER_INFO_SUCCESS = "REQUEST_USER_INFO_SUCCESS";
export const REQUEST_USER_INFO_LOADING = "REQUEST_USER_INFO_LOADING";
export const REQUEST_USER_INFO_ERROR = "REQUEST_USER_INFO_ERROR";

export function requestUserInfo() {
    return {
        type: REQUEST_USER_INFO
    };
}

export function requestUserInfoSuccess(user) {
    return {
        type: REQUEST_USER_INFO_SUCCESS,
        user
    };
}

export function requestUserInfoLoading(loading) {
    return {
        type: REQUEST_USER_INFO_LOADING,
        loading
    };
}

export function requestUserInfoError() {
    return {
        type: REQUEST_USER_INFO_ERROR
    };
}