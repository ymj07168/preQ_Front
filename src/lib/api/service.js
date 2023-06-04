import axios from "axios";
import { getCookie } from "../cookie";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

let config = {
    headers: {
        'Authorization': `Bearer ${getCookie('is_login')}`,
        'withCredentials': true,
    }
}

export const saveCoverLetter = async (question, answer) => {
    console.log({ question, answer })
    console.log(getCookie('is_login'))
    return await axios.post(`${PROXY}/api/v1/preq`, { question: question, answer: answer }, config)
}

export const getCoverLetter = async (config) => {
    return await axios.get(`${PROXY}/api/v1/preq/list`, config)
}

export const getPreQ = async (cletterId, config) => {
    return await axios.get(`${PROXY}/api/v1/preq/${cletterId}`, config)
}