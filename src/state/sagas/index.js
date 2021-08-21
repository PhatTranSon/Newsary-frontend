import {
    takeEvery,
    put,
    select,
    call
} from "redux-saga/effects";
import { login, signup } from "../../api/auth";
import { getNews } from "../../api/news";
import { getWordDefinition } from "../../api/word";
import { 
    changeLoggedInStatus,
    changeLoginLoading, 
    changeMessageContent, 
    changeMessageVisibility,
    changeRedirectStatus, 
    changeSignupLoading, 
    changeToken, 
    requestArticlesError, 
    requestArticlesLoading, 
    requestArticlesSuccessful, 
    requestDictionaryError, 
    requestDictionaryLoading, 
    requestDictionarySuccessful, 
    REQUEST_ARTICLES, 
    REQUEST_DICTIONARY, 
    REQUEST_LOGIN, 
    REQUEST_LOGOUT, 
    REQUEST_SIGNUP 
} from "../mutations";


function* fetchArticles() {
    //Get the state and current id
    const state = yield select();
    const { currentId } = state.homePage;

    //Set loading
    yield put(requestArticlesLoading());

    //Request articles
    try {
        const articles = yield call(getNews, 10, currentId);
        yield put(requestArticlesSuccessful(articles));
    } catch (error) {
        yield showMessage("Error fetching articles");
        yield put(requestArticlesError());
    }
}

function* fetchWord() {
    //Get the word
    const state = yield select();
    const word = state.articlePage.highlight.text;

    //Stop if word is not set yet
    if (!word || word.length === 0) {
        //TODO: Error handling
        return;
    }

    //Set loading to true
    yield put(requestDictionaryLoading());
    
    //Search word meaning in the api
    try {
        const wordDefinition = yield call(getWordDefinition, word);
        yield put(requestDictionarySuccessful(wordDefinition));
    } catch (error) {
        //TODO: Error handling
        yield showMessage("Word not in dictionary");
        yield put(requestDictionaryError());
    }
}

function* fetchSignup({ user }) {
    //Change loading to true
    yield put(changeSignupLoading(true));

    //Make sign up request
    try {
        const _ = yield call(signup, user);
        yield put(changeRedirectStatus(true));
        yield showMessage("Registration complete. Please login using created account");
    } catch (error) {
        if (error.response) {
            //Get the error message
            const { errors } = error.response.data;
            yield showMessage(errors[0].msg || errors);
        } else {
            yield showMessage("Invalid field or account created");
        }
    } finally {
        yield put(changeSignupLoading(false));
    }
}

function* fetchLogin() {
    //Get user from state
    const state = yield select();
    const user = {
        email: state.authentication.login.email,
        password: state.authentication.login.password
    };

    //Change loading to true
    yield put(changeLoginLoading(true));

    //Make log in request
    try {
        //Get login details
        const { token } = yield call(login, user);
        yield put(changeToken(token));
        yield put(changeLoggedInStatus(true));
    } catch (error) {
        yield showMessage("Invalid credentials");
    } finally {
        yield put(changeLoginLoading(false));
    }
}

function* fetchLogout() {
    yield put(changeLoggedInStatus(false));
    yield put(changeToken(null));
}

function* showMessage(message) {
    yield put(changeMessageVisibility(true));
    yield put(changeMessageContent(message));
}

export function* sagas() {
    yield takeEvery(REQUEST_ARTICLES, fetchArticles);
    yield takeEvery(REQUEST_DICTIONARY, fetchWord);
    yield takeEvery(REQUEST_SIGNUP, fetchSignup);
    yield takeEvery(REQUEST_LOGIN, fetchLogin);
    yield takeEvery(REQUEST_LOGOUT, fetchLogout);
}