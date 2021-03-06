import axios from "axios";

const AUTH_URL = "https://guarded-journey-20674.herokuapp.com";

export function signup(user) {
    return axios.post(`${AUTH_URL}/signup`, user)
        .then(response => response.data);
}

export function login(user) {
    return axios.post(`${AUTH_URL}/login`, user)
        .then(response => response.data);
}