import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "./default";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas";
import { 
    TOGGLE_WORDLIST_VISIBLE,
    CHANGE_WORDLIST_VISIBLE, 
    HIGHLIGHT_MENU_COORDS, 
    HIGHLIGHT_MENU_VISIBLE, 
    HIGHLIGHT_TEXT_ERROR, 
    HIGHLIGHT_TEXT_SELECTED, 
    REQUEST_ARTICLES_ERROR, 
    REQUEST_ARTICLES_LOADING, 
    REQUEST_ARTICLES_SUCCESSFUL,
    REQUEST_DICTIONARY_ERROR, 
    REQUEST_DICTIONARY_LOADING, 
    REQUEST_DICTIONARY_SUCCESSFULLY,
    CHANGE_MESSAGE_CONTENT,
    CHANGE_MESSAGE_VISIBILITY,
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
} from "./mutations";

//Create saga middleware
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

//Create redux store
export const store = createStore(
    combineReducers({
        authentication: function(authentication = defaultState.authentication, action) {
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
        },
        message: function(message = defaultState.message, action) {
            let newState;
            switch(action.type) {
                case CHANGE_MESSAGE_CONTENT:
                    newState = {
                        ...message,
                        content: action.content
                    }
                    break;
                case CHANGE_MESSAGE_VISIBILITY:
                    newState = {
                        ...message,
                        visible: action.visible
                    };
                    break;
                default:
                    newState = message;
            }
            return newState;
        },
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
                case TOGGLE_WORDLIST_VISIBLE:
                    newState = {
                        ...articlePage,
                        wordList: {
                            ...articlePage.wordList,
                            visible: !articlePage.wordList.visible
                        }
                    };
                    break;
                case CHANGE_WORDLIST_VISIBLE:
                    newState = {
                        ...articlePage,
                        wordList: {
                            ...articlePage.wordList,
                            visible: action.visible
                        }
                    };
                    break;
                case REQUEST_DICTIONARY_SUCCESSFULLY:
                    newState = {
                        ...articlePage,
                        wordList: {
                            ...articlePage.wordList,
                            words: [...articlePage.wordList.words, action.word],
                            loading: false
                        }
                    }
                    break;
                case REQUEST_DICTIONARY_ERROR:
                    newState = {
                        ...articlePage,
                        wordList: {
                            ...articlePage.wordList,
                            error: action.content,
                            loading: false
                        }
                    }
                    break;
                case REQUEST_DICTIONARY_LOADING:
                    newState = {
                        ...articlePage,
                        wordList: {
                            ...articlePage.wordList,
                            loading: true
                        }
                    }
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