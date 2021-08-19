export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const REQUEST_ARTICLES_SUCCESSFUL = "REQUEST_ARTICLES_SUCCESSFUL";
export const REQUEST_ARTICLES_LOADING = "REQUEST_ARTICLES_LOADING";
export const REQUEST_ARTICLES_ERROR = "REQUEST_ARTICLES_ERROR";
export const HIGHLIGHT_TEXT_SELECTED = "HIGHLIGHT_TEXT_SELECTED";
export const HIGHLIGHT_TEXT_ERROR = "HIGHLIGHT_TEXT_ERROR";
export const HIGHLIGHT_MENU_VISIBLE = "HIGHLIGHT_MENU_VISIBLE";
export const HIGHLIGHT_MENU_COORDS = "HIGHLIGHT_MENU_COORDS";
export const WORDLIST_VISIBLE = "WORDLIST_VISIBLE";

export function requestArticles() {
    return {
        type: REQUEST_ARTICLES
    }
}

export function requestArticlesSuccessful(articles) {
    return {
        type: REQUEST_ARTICLES_SUCCESSFUL,
        articles
    };
}

export function requestArticlesLoading() {
    return {
        type: REQUEST_ARTICLES_LOADING
    };
}

export function requestArticlesError() {
    return {
        type: REQUEST_ARTICLES_ERROR
    };
}

export function textHighlight(text) {
    return {
        type: HIGHLIGHT_TEXT_SELECTED,
        text
    };
}

export function textHighlightError() {
    return {
        type: HIGHLIGHT_TEXT_ERROR,
        content: "Selected text should be a word"
    };
}

export function changeHighlightMenuVisibility(visible) {
    return {
        type: HIGHLIGHT_MENU_VISIBLE,
        visible
    };
}

export function changeHighlightMenuCoords(coords) {
    return {
        type: HIGHLIGHT_MENU_COORDS,
        x: coords.x,
        y: coords.y
    };
}

export function toggleWordListVisibility() {
    return {
        type: WORDLIST_VISIBLE
    };
}