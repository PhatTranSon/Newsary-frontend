import {
    takeEvery,
    put,
    select,
    call,
    all,
    fork,
    delay
} from "redux-saga/effects";
import { login, signup } from "../../api/auth";
import { getNews } from "../../api/news";
import { getUserInfo, getUserCollections, createWordCollection, deleteWordCollection, getWordsFromCollection, addWordToCollection, updateCollection, deleteWordFromCollection } from "../../api/user";
import { getAllWordsDefinitions, getWordDefinition } from "../../api/word";
import { 
    requestCollectionCreateLoading,
    requestCollectionCreateError,
    requestCollectionCreateSuccess,
    requestCollections, 
    requestCollectionsSuccess,
    requestCollectionsError, 
    requestCollectionsLoading,
    requestCollectionDeleteError,
    requestCollectionDeleteLoading,
    requestCollectionDeleteSuccess,
    REQUEST_COLLECTIONS, 
    REQUEST_COLLECTION_CREATE, 
    REQUEST_COLLECTION_DELETE,
    requestCollectionContentLoading,
    requestCollectionContentSuccess,
    requestCollectionAddWordSuccess,
    REQUEST_COLLECTION_ADD_WORD,
    requestCollectionUpdateSuccess,
    REQUEST_COLLECTION_UPDATE,
    requestCollectionRemoveWordSuccess,
    REQUEST_COLLECTION_REMOVE_WORD
} from "../mutations/collections";

import {
    changeLoggedInStatus,
    changeLoginLoading, 
    changeRedirectStatus, 
    changeSignupLoading, 
    changeToken,
    REQUEST_LOGIN, 
    REQUEST_LOGOUT, 
    REQUEST_SIGNUP, 
} from "../mutations/auth";


import {
    APP_STARTED,
    changeMessageContent, 
    changeMessageVisibility,
} from "../mutations/ui"

import {
    requestArticlesError, 
    requestArticlesLoading, 
    requestArticlesSuccessful,  
    REQUEST_ARTICLES,
} from "../mutations/articles";

import {
    requestDictionaryError, 
    requestDictionaryLoading, 
    requestDictionarySuccessful,
    REQUEST_DICTIONARY, 
} from "../mutations/dictionary";

import {
    requestUserInfo, 
    requestUserInfoError, 
    requestUserInfoLoading, 
    requestUserInfoSuccess, 
    REQUEST_USER_INFO,
} from "../mutations/user";
import { 
    START_QUIZ, 
    setNextQuestion, 
    setQuizEnded, 
    setRemainingSeconds 
} from "../mutations/quiz";


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
        yield call(signup, user);
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
        yield fetchAllCollectionContent(word_collections);
    } catch (error) {
        yield put(requestCollectionsError());
    } finally {
        yield put(requestCollectionsLoading(false));
    }
}

function* fetchAllCollectionContent(collections) {
    //Get ids
    const ids = collections.map(collection => collection._id);
    //Yield all
    yield all(ids.map(id => fork(fetchCollectionContent, id)));
}

function* fetchCollectionContent(id) {
    //Get the token
    const state = yield select();
    const { token } = state.authentication.login;

    //Set loading
    yield put(requestCollectionContentLoading(id, true));

    //Fetch collection words and 
    const { allWords } = yield call(getWordsFromCollection, id, token);
    const wordsWithDefinition = yield call(getAllWordsDefinitions, allWords);
    yield put(requestCollectionContentSuccess(id, wordsWithDefinition));
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

function* fetchCollectionDelete({ collection }) {
    //Get the token
    const state = yield select();
    const { token } = state.authentication.login;
    const { _id } = collection;

    //Delete collection
    yield put(requestCollectionDeleteLoading(true));
    yield showMessage("Deleting");

    try {
        yield call(deleteWordCollection, _id, token);
        yield showMessage("Collection deleted");
        yield put(requestCollectionDeleteSuccess(collection));
    } catch(error) {
        yield showMessage("Error encountered. Try again");
        yield put(requestCollectionDeleteError());
    } finally {
        yield put(requestCollectionDeleteLoading(false));
    }
}

function* fetchCollectionAdd({ id, word }) {
    //Get token
    const state = yield select();
    const { token } = state.authentication.login;

    //Show message
    yield showMessage("Adding word collection");

    //Call add word
    try {
        const { _id } = yield call(addWordToCollection, id, word.word, token);
        yield put(requestCollectionAddWordSuccess(id, { ...word, _id }));
        yield showMessage("Word added to collection");
    } catch(error) {
        yield showMessage("Error encountered, Try again");
    }
}

function* fetchCollectionUpdate({ id, name }) {
    //Get token
    const state = yield select();
    const { token } = state.authentication.login;

    //Show message
    yield showMessage("Updating word collection");

    try {
        yield call(updateCollection, id, name, token);
        yield put(requestCollectionUpdateSuccess(id, name));
        yield showMessage("Collection updated");
    } catch(error) {
        yield showMessage("Error encountered. Try again");
    }
}

function* fetchCollectionRemoveWord({ collectionId, wordId }) {
    //Get token
    const state = yield select();
    const { token } = state.authentication.login;

    //Show message
    yield showMessage("Deleting word");

    try {
        yield call(deleteWordFromCollection, collectionId, wordId, token);
        yield put(requestCollectionRemoveWordSuccess(collectionId, wordId));
        yield showMessage("Word deleted");
    } catch(error) {
        yield showMessage("Error encountered. Try again");
    }
}

function* startQuiz() {
    let breakOut = false;

    while (!breakOut) {
        //Get the remaining seconds
        const state = yield select();
        const { seconds, currentQuestion, numberOfQuestions, hasEnded } = state.quiz;

        //Check if game ended early
        if (hasEnded) {
            break;
        }

        //Set seconds
        if (seconds === 0) {
            //Game ended as the last timer is over
            if (currentQuestion === numberOfQuestions - 1) {
                yield put(setQuizEnded(true));
                return;
            } else {
                yield put(setNextQuestion());
            }
        } else {
            yield put(setRemainingSeconds(seconds - 1));
        }

        //Delay for one second
        yield delay(1000);
    } 
}

function* startQuizConcurrently() {
    yield fork(startQuiz);
}

function* showMessage(message) {
    yield put(changeMessageVisibility(true));
    yield put(changeMessageContent(message));
}

export function* sagas() {
    yield takeEvery(APP_STARTED, fetchArticles);
    yield takeEvery(REQUEST_ARTICLES, fetchArticles);
    yield takeEvery(REQUEST_DICTIONARY, fetchWord);
    yield takeEvery(REQUEST_SIGNUP, fetchSignup);
    yield takeEvery(REQUEST_LOGIN, fetchLogin);
    yield takeEvery(REQUEST_LOGOUT, fetchLogout);
    yield takeEvery(REQUEST_USER_INFO, fetchUserInfo);
    yield takeEvery(REQUEST_COLLECTIONS, fetchCollections);
    yield takeEvery(REQUEST_COLLECTION_CREATE, fetchCollectionCreate);
    yield takeEvery(REQUEST_COLLECTION_DELETE, fetchCollectionDelete);
    yield takeEvery(REQUEST_COLLECTION_ADD_WORD, fetchCollectionAdd);
    yield takeEvery(REQUEST_COLLECTION_UPDATE, fetchCollectionUpdate);
    yield takeEvery(REQUEST_COLLECTION_REMOVE_WORD, fetchCollectionRemoveWord);
    yield takeEvery(START_QUIZ, startQuizConcurrently);
}