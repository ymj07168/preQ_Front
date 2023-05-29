// import client from "./client";
import axios from "axios";

export const login = ({ type, accessToken }) =>
    axios.post('/api/v1/auth/login', { type, accessToken })

export const logout = async ({ accessToken, refreshToken }) => {
    return await axios.post(`/api/v1/auth/refresh`, { accessToken, refreshToken })
}