export const defaultState = {
    error: {
        visible: false,
        content: null
    },
    homePage: {
        loading: true,
        allArticles: [],
        currentId: 0
    },
    articlePage: {
        articleId: 0,
        highlight: {
            text: null
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