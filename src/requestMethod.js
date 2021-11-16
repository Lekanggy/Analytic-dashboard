import axios from 'axios'


const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: "http://localhost:5500/api/"
});

export const userRequest = axios.create({
    baseURL: "http://localhost:5500/api/",
    headers: { token: `Bearer ${TOKEN}` }
});
