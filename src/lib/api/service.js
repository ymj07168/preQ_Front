import axios from "axios";
import { getCookie } from "../cookie";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

let config = {
    headers: {
        'Authorization': `Bearer ${getCookie('is_login')}`,
        'withCredentials': true,
    }
}

// 질문 저장
export const saveCoverLetter = async (question, answer, preqList, keywords, abilities, config) => {
    console.log({ question, answer, preqList, keywords, abilities })
    return await axios.post(`${PROXY}/api/v1/preq`, { question: question, answer: answer, preqList: preqList, keywords: keywords, abilities: abilities }, config)
}


// 질문 리스트 조회
export const getCoverLetter = async (config) => {
    return await axios.get(`${PROXY}/api/v1/preq/list`, config)
}

// 질문 상세 조회
export const getPreQItem = async (cletterId, config) => {
    return await axios.get(`${PROXY}/api/v1/preq/${cletterId}`, config)
}

// 예상 면접 질문 및 핵심 역량 조회 (답변 조회)
export const getPreQ = async (question, answer, config) => {
    return await axios.post(`${PROXY}/api/v1/preq/result`, { question: question, answer: answer }, config)
}


