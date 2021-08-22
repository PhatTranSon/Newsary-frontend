import { defaultState } from "../default";

import {
    CHANGE_SIGNUP_LOADING,
    CHANGE_REDIRECT_STATUS,
    CHANGE_SIGNUP_FULLNAME,
    CHANGE_SIGNUP_USERNAME,
    CHANGE_SIGNUP_EMAIL,
    CHANGE_SIGNUP_PASSWORD,
    CHANGE_SIGNUP_CITY,
    CHANGE_SIGNUP_COUNTRY,
    CLEAR_SIGNUP_FORM,
    CHANGE_LOGIN_EMAIL,
    CHANGE_LOGIN_PASSWORD,
    CHANGE_LOGIN_LOADING,
    CHANGE_LOGIN_STATUS,
    CHANGE_TOKEN
} from "../mutations/auth";

export function authReducer(authentication = defaultState.authentication, action) {
    let newState;

    switch (action.type) {
        case CHANGE_LOGIN_LOADING:
            newState = {
                ...authentication,
                login: {
                    ...authentication.login,
                    loading: action.loading
                }
            };
            break;
        case CHANGE_LOGIN_STATUS:
            newState = {
                ...authentication,
                login: {
                    ...authentication.login,
                    loggedIn: action.loggedIn
                }
            };
            break;
        case CHANGE_TOKEN:
            newState = {
                ...authentication,
                login: {
                    ...authentication.login,
                    token: action.token
                }
            };
            break;
        case CHANGE_LOGIN_EMAIL:
            newState = {
                ...authentication,
                login: {
                    ...authentication.login,
                    email: action.email
                }
            };
            break;
        case CHANGE_LOGIN_PASSWORD:
            newState = {
                ...authentication,
                login: {
                    ...authentication.login,
                    password: action.password
                }
            };
            break;
        case CLEAR_SIGNUP_FORM:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    fullname: "",
                    username: "",
                    email: "",
                    password: "",
                    city: "",
                    country: ""
                }
            };
            break;
        case CHANGE_SIGNUP_FULLNAME:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    fullname: action.fullname
                }
            };
            break;
        case CHANGE_SIGNUP_USERNAME:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    username: action.username
                }
            };
            break;
        case CHANGE_SIGNUP_EMAIL:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    email: action.email
                }
            };
            break;
        case CHANGE_SIGNUP_PASSWORD:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    password: action.password
                }
            };
            break;
        case CHANGE_SIGNUP_CITY:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    city: action.city
                }
            };
            break;
        case CHANGE_SIGNUP_COUNTRY:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    country: action.country
                }
            };
            break;
        case CHANGE_SIGNUP_LOADING:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    loading: action.loading
                }
            };
            break;
        case CHANGE_REDIRECT_STATUS:
            newState = {
                ...authentication,
                register: {
                    ...authentication.register,
                    redirect: action.redirect
                }
            };
            break;
        default:
            newState = authentication;
            break;
    }

    return newState;
}