/* Authentication mutation */
export const REQUEST_SIGNUP = "REQUEST_SIGNUP";
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const CHANGE_REDIRECT_STATUS = "CHANGE_REDIRECR_STATUS";
export const CHANGE_LOGIN_STATUS = "CHANGE_LOGIN_STATUS";
export const CHANGE_TOKEN = "CHANGE_TOKEN";
export const UPDATE_WORD_COLLECTIONS = "UPDATE_WORD_COLLECTIONS";
export const CHANGE_SIGNUP_LOADING = "CHANGE_SIGNUP_LOADING";
export const CHANGE_LOGIN_LOADING = "CHANGE_LOGIN_LOADING";

/* Form mutation for signup*/
export const CHANGE_SIGNUP_FULLNAME = "CHANGE_SIGNUP_FULLNAME";
export const CHANGE_SIGNUP_USERNAME = "CHANGE_SIGNUP_USERNAME";
export const CHANGE_SIGNUP_EMAIL = "CHANGE_SIGNUP_EMAIL";
export const CHANGE_SIGNUP_PASSWORD = "CHANGE_SIGNUP_PASSWORD";
export const CHANGE_SIGNUP_CITY = "CHANGE_SIGNUP_CITY";
export const CHANGE_SIGNUP_COUNTRY = "CHANGE_SIGNUP_COUNTRY";
export const CLEAR_SIGNUP_FORM = "CLEAR_SIGNUP_FORM";

/* Form mutation for login */
export const CHANGE_LOGIN_EMAIL = "CHANGE_LOGIN_EMAIL";
export const CHANGE_LOGIN_PASSWORD = "CHANGE_LOGIN_PASSWORD";

/* Logout mutation */
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";

export function requestLogout() {
    return {
        type: REQUEST_LOGOUT
    };
}

export function changeLoginEmail(email) {
    return {
        type: CHANGE_LOGIN_EMAIL,
        email
    };
}

export function changeLoginPassword(password) {
    return {
        type: CHANGE_LOGIN_PASSWORD,
        password
    };
}

export function clearSignupForm() {
    return {
        type: CLEAR_SIGNUP_FORM
    };
}

export function changeSignupFullname(fullname) {
    return {
        type: CHANGE_SIGNUP_FULLNAME,
        fullname
    };
}

export function changeSignupUsername(username) {
    return {
        type: CHANGE_SIGNUP_USERNAME,
        username
    };
}

export function changeSignupEmail(email) {
    return {
        type: CHANGE_SIGNUP_EMAIL,
        email
    };
}

export function changeSignupPassword(password) {
    return {
        type: CHANGE_SIGNUP_PASSWORD,
        password
    };
}

export function changeSignupCity(city) {
    return {
        type: CHANGE_SIGNUP_CITY,
        city
    };
}

export function changeSignupCountry(country) {
    return {
        type: CHANGE_SIGNUP_COUNTRY,
        country
    };
}

export function changeSignupLoading(loading) {
    return {
        type: CHANGE_SIGNUP_LOADING,
        loading
    };
}

export function changeLoginLoading(loading) {
    return {
        type: CHANGE_LOGIN_LOADING,
        loading
    }
}

export function changeRedirectStatus(redirect) {
    return {
        type: CHANGE_REDIRECT_STATUS,
        redirect
    };
}

export function changeLoggedInStatus(loggedIn) {
    return {
        type: CHANGE_LOGIN_STATUS,
        loggedIn
    };
}

export function changeToken(token) {
    return {
        type: CHANGE_TOKEN,
        token
    };
}

export function requestSignup(user) {
    return {
        type: REQUEST_SIGNUP,
        user
    };
}

export function requestLogin(user) {
    return {
        type: REQUEST_LOGIN,
        user
    };
}