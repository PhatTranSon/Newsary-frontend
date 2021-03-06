import axios from "axios";

const USER_URL = "https://guarded-journey-20674.herokuapp.com";

export function getUserInfo(token) {
    return axios.get(`${USER_URL}/user`, {
        params: {
            "secret_token": token
        }
    }).then(response => response.data);
}

export function getUserCollections(token) {
    return axios.get(`${USER_URL}/collection`, {
        params: {
            "secret_token": token
        }
    }).then(response => response.data);
}

export function createWordCollection(name, token) {
    return axios.post(`${USER_URL}/collection`, {
        name: name,
        type: "word"
    }, {
        params: {
            "secret_token": token
        }
    }).then(response => response.data);
}

export function deleteWordCollection(id, token) {
    return axios.delete(`${USER_URL}/collection/${id}`, {
        params: {
            "secret_token": token
        }
    }).then(response => response.data);
}

export function getWordsFromCollection(id, token) {
    return axios.get(`${USER_URL}/collection/${id}/word`, {
        params: {
            "secret_token": token
        }
    }).then(response => response.data);
}

export function addWordToCollection(id, word, token) {
    return axios.post(`${USER_URL}/collection/${id}/word`, {
        value: word
    }, {
        params: {
            "secret_token": token
        }
    }).then(response => response.data);
}

export function updateCollection(id, name, token) {
    return axios.put(`${USER_URL}/collection/${id}`, {
        name
    }, {
        params: {
            "secret_token": token
        }
    }).then(response => response.data);
}

export function deleteWordFromCollection(collectionId, wordId, token) {
    return axios.delete(`${USER_URL}/collection/${collectionId}/word/${wordId}`, {
        params: {
            "secret_token": token
        }
    }).then(response => response.data);
}