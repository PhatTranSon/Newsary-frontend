import {
    takeEvery,
    put,
    select,
    call
} from "redux-saga/effects";
import { login, signup } from "../../api/auth";
import { getNews } from "../../api/news";
import { getUserInfo, getUserCollections, createWordCollection } from "../../api/user";
import { getWordDefinition } from "../../api/word";
import { 
    requestCollectionCreateLoading,
    requestCollectionCreateError,
    requestCollectionCreateSuccess,
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
    requestCollections, 
    requestCollectionsError, 
    requestCollectionsLoading, 
    requestCollectionsSuccess, 
    requestDictionaryError, 
    requestDictionaryLoading, 
    requestDictionarySuccessful, 
    requestUserInfo, 
    requestUserInfoError, 
    requestUserInfoLoading, 
    requestUserInfoSuccess, 
    REQUEST_ARTICLES, 
    REQUEST_COLLECTIONS, 
    REQUEST_COLLECTION_CREATE, 
    REQUEST_DICTIONARY, 
    REQUEST_LOGIN, 
    REQUEST_LOGOUT, 
    REQUEST_SIGNUP, 
    REQUEST_USER_INFO
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

        //Request user info
        yield put(requestUserInfo());
        yield put(requestCollections());
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

function* fetchUserInfo() {
    //Get the token
    const state = yield select();
    const { token } = state.authentication.login;

    //Set loading
    yield put(requestUserInfoLoading(true));

    //Fetch user
    try {
        const { userFound } = yield call(getUserInfo, token);
        yield put(requestUserInfoSuccess(userFound));
    } catch (error) {
        yield put(requestUserInfoError());
    } finally {
        yield put(requestUserInfoLoading(false));
    }
}

function* fetchCollections() {
    //Get the token
    const state = yield select();
    const { token } = state.authentication.login;

    //Set loading
    yield put(requestCollectionsLoading(true));

    //Fetch collections
    try {
        const { word_collections } = yield call(getUserCollections, token);
        yield put(requestCollectionsSuccess(word_collections));
    } catch (error) {
        yield put(requestCollectionsError());
    } finally {
        yield put(requestCollectionsLoading(false));
    }
}

function* fetchCollectionCreate({ collection }) {
    //Get the token
    const state = yield select();
    const { token } = state.authentication.login;
    const { name } = collection;

    //Set loading
    yield put(requestCollectionCreateLoading(true));

    //Create collection
    try {
        //Get collection id and append to collection list
        const { collectionid } = yield call(createWordCollection, name, token);
        yield put(requestCollectionCreateSuccess({
            name,
            _id: collectionid
        }));
    } catch (error) {
        yield showMessage("Error encountered. Try again");
        yield put(requestCollectionCreateError());
    } finally {
        yield put(requestCollectionCreateLoading(false));
    }
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
    yield takeEvery(REQUEST_USER_INFO, fetchUserInfo);
    yield takeEvery(REQUEST_COLLECTIONS, fetchCollections);
    yield takeEvery(REQUEST_COLLECTION_CREATE, fetchCollectionCreate);
}