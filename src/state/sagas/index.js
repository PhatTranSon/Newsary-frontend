import {
    takeEvery,
    put,
    select,
    call
} from "redux-saga/effects";
import { getNews } from "../../api/news";
import { getWordDefinition } from "../../api/word";
import { changeMessageContent, changeMessageVisibility, requestArticlesError, requestArticlesLoading, requestArticlesSuccessful, requestDictionaryError, requestDictionaryLoading, requestDictionarySuccessful, REQUEST_ARTICLES, REQUEST_DICTIONARY } from "../mutations";


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
        yield put(changeMessageVisibility(true));
        yield put(changeMessageContent("Error fetching items"));
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
        yield put(changeMessageVisibility(true));
        yield put(changeMessageContent("Word does not exist in dictionary"));
        yield put(requestDictionaryError());
    }
}

export function* sagas() {
    yield takeEvery(REQUEST_ARTICLES, fetchArticles);
    yield takeEvery(REQUEST_DICTIONARY, fetchWord);
}