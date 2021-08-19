import {
    takeEvery,
    put,
    select,
    call
} from "redux-saga/effects";
import { getNews } from "../../api/news";
import { requestArticlesError, requestArticlesLoading, requestArticlesSuccessful, REQUEST_ARTICLES } from "../mutations";


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
        yield put(requestArticlesError());
    }
}

export function* sagas() {
    yield takeEvery(REQUEST_ARTICLES, fetchArticles);
}