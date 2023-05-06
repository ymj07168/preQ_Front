import axios from 'axios';

const client = axios.create({
    baseURL: "https://api.preq.site",
    headers: {
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': "http://localhost:3000",
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials': 'include',
        'withCredentials': true,
    },
});

export default client;