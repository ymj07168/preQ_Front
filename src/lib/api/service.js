import axios from "axios";

export const saveCoverLetter = async (question, answer) => {
    console.log({ question, answer })
    return await axios.post('/preq', { question: question, answer: answer })
}