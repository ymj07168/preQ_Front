import axios from "axios";

export const addPostItem = async (title, content) => {
    console.log({ title, content })
    return await axios.post('/board', { title: title, content: content })
}
