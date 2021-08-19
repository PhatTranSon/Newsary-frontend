export const defaultState = {
    homePage: {
        loading: true,
        error: null,
        allArticles: [],
        currentId: 0
    },
    articlePage: {
        articleId: 0,
        menu: {
            isVisible: false,
            x: 0,
            y: 0
        },
        wordList: {
            isVisible: false,
            words: []
        }
    }
};