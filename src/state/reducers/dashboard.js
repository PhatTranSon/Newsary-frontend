import { defaultState } from "../default";

import {
    REQUEST_COLLECTIONS_SUCCESS,
    REQUEST_COLLECTIONS_ERROR,
    REQUEST_COLLECTIONS_LOADING,
    REQUEST_COLLECTION_CREATE_ERROR,
    REQUEST_COLLECTION_CREATE_LOADING,
    REQUEST_COLLECTION_CREATE_SUCCESS,
    REQUEST_COLLECTION_DELETE_ERROR,
    REQUEST_COLLECTION_DELETE_LOADING,
    REQUEST_COLLECTION_DELETE_SUCCESS,
    REQUEST_COLLECTION_CONTENT_SUCCESS,
    REQUEST_COLLECTION_ADD_WORD_SUCCESS
} from "../mutations/collections";

function appendWordsToCollection(collections, id, words) {
    return collections.map(collection => {
        if (collection._id === id) {
            return {
                ...collection,
                words
            }
        } else {
            return collection;
        }
    });
}

function appendWordToCollection(collections, id, word) {
    return collections.map(collection => {
        if (collection._id === id) {
            return {
                ...collection,
                words: [...collection.words, word]
            };
        } else {
            return collection;
        }
    });
}

export function dashboardReducer(dashboard = defaultState.dashboard, action) {
    let newState;

    switch(action.type) {
        case REQUEST_COLLECTION_ADD_WORD_SUCCESS:
            newState = {
                ...dashboard,
                wordCollections: {
                    ...dashboard.wordCollections,
                    content: appendWordToCollection(
                        dashboard.wordCollections.content, 
                        action.id,
                        action.word
                    )
                },
            };
            break;
        case REQUEST_COLLECTION_CONTENT_SUCCESS:
            newState = {
                ...dashboard,
                wordCollections: {
                    ...dashboard.wordCollections,
                    content: appendWordsToCollection(
                        dashboard.wordCollections.content, 
                        action.id,
                        action.words
                    )
                },
            };
            break;
        case REQUEST_COLLECTION_DELETE_ERROR:
            newState = {
                ...dashboard,
                deleteCollection: {
                    ...dashboard.deleteCollection,
                    error: true
                }
            };
            break;
        case REQUEST_COLLECTION_DELETE_LOADING:
            newState = {
                ...dashboard,
                deleteCollection: {
                    ...dashboard.deleteCollection,
                    loading: action.loading
                }
            };
            break;
        case REQUEST_COLLECTION_DELETE_SUCCESS:
            newState = {
                ...dashboard,
                wordCollections: {
                    ...dashboard.wordCollections,
                    content: dashboard.wordCollections.content.filter(item => item._id !== action.collection._id)
                },
                deleteCollection: {
                    ...dashboard.deleteCollection,
                    success: true
                }
            };
            break;
        case REQUEST_COLLECTION_CREATE_ERROR:
            newState = {
                ...dashboard,
                createCollection: {
                    ...dashboard.createCollection,
                    error: true
                }
            };
            break;
        case REQUEST_COLLECTION_CREATE_LOADING:
            newState = {
                ...dashboard,
                createCollection: {
                    ...dashboard.createCollection,
                    loading: action.loading
                }
            };
            break;
        case REQUEST_COLLECTION_CREATE_SUCCESS:
            newState = {
                ...dashboard,
                wordCollections: {
                    ...dashboard.wordCollections,
                    content: [...dashboard.wordCollections.content, action.collection]
                },
                createCollection: {
                    ...dashboard.createCollection,
                    success: true
                }
            };
            break;
        case REQUEST_COLLECTIONS_SUCCESS:
            newState = {
                ...dashboard,
                wordCollections: {
                    ...dashboard.wordCollections,
                    content: action.collections
                }
            };
            break;
        case REQUEST_COLLECTIONS_ERROR:
            newState = {
                ...dashboard,
                wordCollections: {
                   ...dashboard.wordCollections,
                    error: true
                }
            };
            break;
        case REQUEST_COLLECTIONS_LOADING:
            newState = {
                ...dashboard,
                wordCollections: {
                    ...dashboard.wordCollections,
                    loading: action.loading
                }
            };
            break;
        default:
            newState = dashboard;
            break;
    }

    return newState;
}