import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas";

import { dashboardReducer } from "./reducers/dashboard";
import { userReducer } from "./reducers/user";
import { authReducer } from "./reducers/auth";
import { messageReducer } from "./reducers/message";
import { homeReducer } from "./reducers/home";
import { articleReducer } from "./reducers/article";
import { quizReducer } from "./reducers/quiz";

//Create saga middleware
const sagaMiddleware = createSagaMiddleware();
//Create redux store
export const store = createStore(
    combineReducers({
        dashboard: dashboardReducer,
        quiz: quizReducer,
        user: userReducer,
        authentication: authReducer,
        message: messageReducer,
        homePage: homeReducer,
        articlePage: articleReducer,
    }),
    applyMiddleware(
        //loggerMiddleware,
        sagaMiddleware
    )
);

//Run saga middleare
sagaMiddleware.run(sagas);