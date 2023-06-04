// import client from "./client";
import axios from "axios";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

export const login = ({ type, accessToken }) =>
    axios.post(`${PROXY}/api/v1/auth/login`, { type, accessToken })

export const logout = async ({ accessToken, refreshToken }) => {
    return await axios.post(`${PROXY}/api/v1/auth/refresh`, { accessToken, refreshToken })
}