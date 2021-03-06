import { defaultState } from "../default";

import {
    REQUEST_ARTICLES_ERROR, 
    REQUEST_ARTICLES_LOADING, 
    REQUEST_ARTICLES_SUCCESSFUL
} from "../mutations/articles";
import { CHANGE_BANNER_VISIBILITY } from "../mutations/ui";

export function homeReducer(homePage = defaultState.homePage, action) {
    let newState;
    switch(action.type) {
        case CHANGE_BANNER_VISIBILITY:
            newState = {
                ...homePage,
                isBannerVisible: action.visible
            }
            break;
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
}