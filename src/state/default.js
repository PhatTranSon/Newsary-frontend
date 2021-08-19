export const defaultState = {
    homePage: {
        loading: true,
        error: null,
        allArticles: [],
        currentId: 0
    },
    articlePage: {
        articleId: 0,
        highlight: {
            text: null,
            error: null
        },
        menu: {
            visible: false,
            x: 0,
            y: 0
        },
        wordList: {
            visible: false,
            loading: false,
            words: []
        }
    }
};