export const defaultState = {
    authentication: {
        register: {
            username: "",
            fullname: "",
            email: "",
            password: "",
            city: "",
            country: "",
            loading: false,
            redirect: false,
        },
        login: {
            email: "",
            password: "",
            loading: false,
            loggedIn: false,
            token: null
        }
    },
    dashboard: {
        wordCollections: {
            loading: false,
            error: false,
            content: []
        },
        createCollection: {
            success: false,
            loading: false,
            error: false
        },
        deleteCollection: {
            loading: false,
            error: false
        }
    },
    quiz: {
        hasStarted: false,
        hasEnded: false,
        numberOfQuestions: 0,
        currentQuestion: 0,
        questions: []
    },
    user: {
        username: "",
        fullname: "",
        email: "",
        city: "",
        country: "",
        loading: false,
        error: false
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