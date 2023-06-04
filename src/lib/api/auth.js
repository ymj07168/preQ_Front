// import client from "./client";
import axios from "axios";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

export const login = ({ type, accessToken }) =>
    axios.post(`${PROXY}/api/v1/auth/login`, { type, accessToken })

export const logout = async ({ accessToken, refreshToken }) => {
    return await axios.post(`${PROXY}/api/v1/auth/logout`, { accessToken, refreshToken })
}

// 마이페이지 정보 조회
export const getMyInfo = async (config) => {
    return await axios.get(`${PROXY}/api/v1/member`, config);
}

// 마이페이지 정보 수정
export const editMyInfo = async (name, email, config) => {
    return await axios.patch(`${PROXY}/api/v1/member`, { name, email }, config);
}