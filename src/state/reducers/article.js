import { defaultState } from "../default";

import { 
    TOGGLE_WORDLIST_VISIBLE,
    CHANGE_WORDLIST_VISIBLE, 
    HIGHLIGHT_MENU_COORDS, 
    HIGHLIGHT_MENU_VISIBLE, 
    HIGHLIGHT_TEXT_ERROR, 
    HIGHLIGHT_TEXT_SELECTED, 
} from "../mutations/ui";

import {
    REQUEST_DICTIONARY_ERROR, 
    REQUEST_DICTIONARY_LOADING, 
    REQUEST_DICTIONARY_SUCCESSFULLY
} from "../mutations/dictionary";

export function articleReducer(articlePage = defaultState.articlePage, action) {
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