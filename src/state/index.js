import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "./default";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas";
import { REQUEST_ARTICLES_ERROR, REQUEST_ARTICLES_LOADING, REQUEST_ARTICLES_SUCCESSFUL } from "./mutations";

//Create saga middleware
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

//Create redux store
export const store = createStore(
    combineReducers({
        homePage: function(homePage = defaultState.homePage, action) {
            switch(action.type) {
                case REQUEST_ARTICLES_SUCCESSFUL:
                    homePage = {
                        ...homePage,
                        allArticles: [...homePage.allArticles, ...action.articles],
                        loading: false,
                        error: null,
                        currentId: homePage.currentId + 10
                    }
                    break;
                case REQUEST_ARTICLES_LOADING:
                    homePage = {
                        ...homePage,
                        loading: true,
                        error: null
                    }
                    break;
                case REQUEST_ARTICLES_ERROR:
                    homePage = {
                        ...homePage,
                        error: "Error fetching data"
                    }
                    break;
            }
            return homePage;
        },
        articlePage: function(articlePage = defaultState.articlePage, action) {
            return articlePage;
        }
    }),
    applyMiddleware(
        loggerMiddleware,
        sagaMiddleware
    )
);

//Run saga middleare
sagaMiddleware.run(sagas);