
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