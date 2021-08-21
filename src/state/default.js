export const defaultState = {
    authentication: {
        register: {
            loading: false,
            redirect: false,
        },
        login: {
            loading: false,
            loggedIn: false,
            token: null
        }
    },
    user: {
        wordsCollections: []
    },
    message: {
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