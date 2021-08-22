import { defaultState } from "../default";

import {
    REQUEST_USER_INFO_SUCCESS,
    REQUEST_USER_INFO_ERROR,
    REQUEST_USER_INFO_LOADING,
} from "../mutations/user";

export function userReducer(user = defaultState.user, action) {
    let newState;

    switch(action.type) {
        case REQUEST_USER_INFO_SUCCESS:
            newState = {
                ...user,
                username: action.user.username,
                fullname: action.user.fullname,
                email: action.user.email,
                city: action.user.city,
                country: action.user.country
            };
            break;
        case REQUEST_USER_INFO_ERROR:
            newState = {
                ...user,
                loading: false,
                error: true
            };
            break;
        case REQUEST_USER_INFO_LOADING:
            newState = {
                ...user,
                loading: action.loading
            };
            break;
        default:
            newState = user;
            break;
    }

    return newState;
}