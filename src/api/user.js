import axios from "axios";

const USER_URL = "http://localhost:8000";

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