/* Article mutation */
export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const REQUEST_ARTICLES_SUCCESSFUL = "REQUEST_ARTICLES_SUCCESSFUL";
export const REQUEST_ARTICLES_LOADING = "REQUEST_ARTICLES_LOADING";
export const REQUEST_ARTICLES_ERROR = "REQUEST_ARTICLES_ERROR";

export function requestArticles() {
    return {
        type: REQUEST_ARTICLES
    };
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