import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "./default";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas";
import { HIGHLIGHT_MENU_COORDS, HIGHLIGHT_MENU_VISIBLE, HIGHLIGHT_TEXT_ERROR, HIGHLIGHT_TEXT_SELECTED, REQUEST_ARTICLES_ERROR, REQUEST_ARTICLES_LOADING, REQUEST_ARTICLES_SUCCESSFUL } from "./mutations";

//Create saga middleware
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

//Create redux store
export const store = createStore(
    combineReducers({
        homePage: function(homePage = defaultState.homePage, action) {
            let newState;
            switch(action.type) {
                case REQUEST_ARTICLES_SUCCESSFUL:
                    newState = {
                        ...homePage,
                        allArticles: [...homePage.allArticles, ...action.articles],
                        loading: false,
                        error: null,
                        currentId: homePage.currentId + 10
                    }
                    break;
                case REQUEST_ARTICLES_LOADING:
                    newState = {
                        ...homePage,
                        loading: true,
                        error: null
                    }
                    break;
                case REQUEST_ARTICLES_ERROR:
                    newState = {
                        ...homePage,
                        error: "Error fetching data"
                    }
                    break;
                default:
                    newState = homePage;
            }
            return newState;
        },
        articlePage: function(articlePage = defaultState.articlePage, action) {
            let newState;
            switch(action.type) {
                case HIGHLIGHT_TEXT_SELECTED:
                    newState = {
                        ...articlePage,
                        highlight: {
                            text: action.text,
                            error: null
                        }
                    };
                    break;
                case HIGHLIGHT_TEXT_ERROR:
                    newState = {
                        ...articlePage,
                        highlight: {
                            text: null,
                            error: action.content
                        }
                    };
                    break;
                case HIGHLIGHT_MENU_VISIBLE:
                    newState = {
                        ...articlePage,
                        menu: {
                            visible: action.visible,
                            x: articlePage.menu.x,
                            y: articlePage.menu.y
                        }
                    };
                    break;
                case HIGHLIGHT_MENU_COORDS:
                    newState = {
                        ...articlePage,
                        menu: {
                            visible: articlePage.menu.visible,
                            x: action.x,
                            y: action.y,
                        }
                    };
                    break;
                default:
                    newState = articlePage;
            }
            return newState;
        }
    }),
    applyMiddleware(
        loggerMiddleware,
        sagaMiddleware
    )
);

//Run saga middleare
sagaMiddleware.run(sagas);