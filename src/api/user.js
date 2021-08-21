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