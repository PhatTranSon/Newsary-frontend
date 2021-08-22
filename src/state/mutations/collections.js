
/* Word collection mutation */
export const REQUEST_COLLECTIONS = "REQUEST_COLLECTIONS";
export const REQUEST_COLLECTIONS_SUCCESS = "REQUEST_COLLECTIONS_SUCCESS";
export const REQUEST_COLLECTIONS_LOADING = "REQUEST_COLLECTIONS_LOADING";
export const REQUEST_COLLECTIONS_ERROR = "REQUEST_COLLECTIONS_ERROR";

/* Collection creation mutation */
export const REQUEST_COLLECTION_CREATE = "REQUEST_COLLECTION_CREATE";
export const REQUEST_COLLECTION_CREATE_SUCCESS = "REQUEST_COLLECTION_CREATE_SUCCESSS";
export const REQUEST_COLLECTION_CREATE_ERROR = "REQUEST_COLLECTION_CREATE_ERROR";
export const REQUEST_COLLECTION_CREATE_LOADING = "REQUEST_COLLECTION_CREATE_LOADING";

/* Collection deletetion mutation */
export const REQUEST_COLLECTION_DELETE = "REQUEST_COLLECTION_DELETE";
export const REQUEST_COLLECTION_DELETE_SUCCESS = "REQUEST_COLLECTION_DELETE_SUCCESS";
export const REQUEST_COLLECTION_DELETE_ERROR = "REQUEST_COLLECTION_DELETE_ERROR";
export const REQUEST_COLLECTION_DELETE_LOADING = "REQUEST_COLLECTION_DELETE_LOADING";

/* Collection fetch word mutation */
export const REQUEST_COLLECTION_CONTENT = "REQUEST_COLLECTION_CONTENT";
export const REQUEST_COLLECTION_CONTENT_SUCCESS = "REQUEST_COLLECTION_CONTENT_SUCCESS";
export const REQUEST_COLLECTION_CONTENT_LOADING = "REQUEST_COLLECTION_CONTENT_LOADING";
export const REQUEST_COLLECTION_CONTENT_ERROR = "REQUEST_COLLECTION_CONTENT_ERROR";

/* Add word to collection */
export const REQUEST_COLLECTION_ADD_WORD = "REQUEST_COLLECTION_ADD_WORD";
export const REQUEST_COLLECTION_ADD_WORD_SUCCESS = "REQUEST_COLLECTION_ADD_WORD_SUCCESS";

/* Update collection */
export const REQUEST_COLLECTION_UPDATE = "REQUEST_COLLECTION_UPDATE";
export const REQUEST_COLLECTION_UPDATE_SUCCESS = "REQUEST_COLLECTION_UPDATE_SUCCESS";

/* Remove word from collection */
export const REQUEST_COLLECTION_REMOVE_WORD = "REQUEST_COLLECTION_REMOVE_WORD";
export const REQUEST_COLLECTION_REMOVE_WORD_SUCCESS = "REQUEST_COLLECTION_REMOVE_WORD_SUCCESS";

export function requestCollectionRemoveWord(collectionId, wordId) {
    return {
        type: REQUEST_COLLECTION_REMOVE_WORD,
        collectionId,
        wordId
    };
}

export function requestCollectionRemoveWordSuccess(collectionId, wordId) {
    return {
        type: REQUEST_COLLECTION_REMOVE_WORD_SUCCESS,
        collectionId,
        wordId
    };
}

export function requestCollectionUpdate(id, name) {
    return {
        type: REQUEST_COLLECTION_UPDATE,
        id,
        name
    };
}

export function requestCollectionUpdateSuccess(id, name) {
    return {
        type: REQUEST_COLLECTION_UPDATE_SUCCESS,
        id,
        name
    };
}

export function requestCollectionAdd(id, word) {
    return {
        type: REQUEST_COLLECTION_ADD_WORD,
        id,
        word
    };
}

export function requestCollectionAddWordSuccess(id, word) {
    return {
        type: REQUEST_COLLECTION_ADD_WORD_SUCCESS,
        id,
        word
    };
}

export function requestCollectionContent(id) {
    return {
        type: REQUEST_COLLECTION_CONTENT,
        id
    };
}

export function requestCollectionContentError(id) {
    return {
        type: REQUEST_COLLECTIONS_ERROR,
        id
    }
}

export function requestCollectionContentLoading(id, loading) {
    return {
        type: REQUEST_COLLECTION_CONTENT_LOADING,
        id,
        loading
    };
}

export function requestCollectionContentSuccess(id, words) {
    return {
        type: REQUEST_COLLECTION_CONTENT_SUCCESS,
        id,
        words
    }
}

export function requestCollectionDelete(collection) {
    return {
        type: REQUEST_COLLECTION_DELETE,
        collection
    };
}

export function requestCollectionDeleteError() {
    return {
        type: REQUEST_COLLECTION_DELETE_ERROR
    };
}

export function requestCollectionDeleteLoading(loading) {
    return {
        type: REQUEST_COLLECTION_DELETE_LOADING,
        loading
    };
}

export function requestCollectionDeleteSuccess(collection) {
    return {
        type: REQUEST_COLLECTION_DELETE_SUCCESS,
        collection
    };
}

export function requestCollectionCreate(collection) {
    return {
        type: REQUEST_COLLECTION_CREATE,
        collection
    };
}

export function requestCollectionCreateError() {
    return {
        type: REQUEST_COLLECTION_CREATE_ERROR
    };
}

export function requestCollectionCreateLoading(loading) {
    return {
        type: REQUEST_COLLECTION_CREATE_LOADING,
        loading
    };
}

export function requestCollectionCreateSuccess(collection) {
    return {
        type: REQUEST_COLLECTION_CREATE_SUCCESS,
        collection
    };
}

export function requestCollections() {
    return {
        type: REQUEST_COLLECTIONS
    };
}

export function requestCollectionsSuccess(collections) {
    return {
        type: REQUEST_COLLECTIONS_SUCCESS,
        collections
    };
}

export function requestCollectionsLoading(loading) {
    return {
        type: REQUEST_COLLECTIONS_LOADING,
        loading
    };
}

export function requestCollectionsError() {
    return {
        type: REQUEST_COLLECTIONS_ERROR
    };
}