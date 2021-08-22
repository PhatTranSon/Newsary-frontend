/* Dictionary mutation */
export const REQUEST_DICTIONARY = "REQUEST_DICTIONARY";
export const REQUEST_DICTIONARY_SUCCESSFULLY = "REQUEST_DICTIONARY_SUCCESSFULL";
export const REQUEST_DICTIONARY_LOADING = "REQUEST_DICTIONARY_LOADING";
export const REQUEST_DICTIONARY_ERROR = "REQUEST_DICTIONARY_ERROR";

export function requestDictionary() {
    return {
        type: REQUEST_DICTIONARY
    };
}

export function requestDictionaryError() {
    return {
        type: REQUEST_DICTIONARY_ERROR
    };
}

export function requestDictionaryLoading() {
    return {
        type: REQUEST_DICTIONARY_LOADING
    };
}

export function requestDictionarySuccessful(word) {
    return {
        type: REQUEST_DICTIONARY_SUCCESSFULLY,
        word
    };
}