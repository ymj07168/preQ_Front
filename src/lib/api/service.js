import axios from "axios";
import { getCookie } from "../cookie";

let config = {
    headers: {
        'Authorization': `Bearer ${getCookie('is_login')}`,
        'withCredentials': true,
    }
}
export const saveCoverLetter = async (question, answer) => {
    console.log({ question, answer })
    console.log(getCookie('is_login'))
    return await axios.post('/api/v1/preq', { question: question, answer: answer }, config)
}