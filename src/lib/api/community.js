import axios from "axios";

// 게시판 글 작성
export const addPostItem = async (title, content, config) => {
    console.log({ title, content })
    return await axios.post('/api/v1/board', { title: title, content: content }, config)
}

// 게시판 글 수정
export const editPostItem = async (id, title, content, config) => {
    return await axios.patch(`/api/v1/board/${id}`, { title: title, content: content }, config)
}

// 게시판 글 삭제
export const deletePostItem = async (id, config) => {
    return await axios.delete(`/api/v1/board/${id}`, config)
}

// 게시판 글 상세 조회
export const readPostItem = async (id, config) => {
    return await axios.get(`/api/v1/board/${id}`, config)
}

// 게시판 전체 조회
export const readAllPost = async (filter, config) => {
    return await axios.get(`/api/v1/board/list?filter=${filter}`, config)
}

// 게시판 글 검색
export const searchPost = async (keyword, config) => {
    return await axios.get(`/api/v1/board/search?keyword=${keyword}`, config)
}

// 댓글 작성
export const addComment = async (boardId, comment, config) => {
    return await axios.post(`/api/v1/comment/${boardId}`, { content: comment }, config)
}

// 댓글 삭제
export const deleteComment = async (commentId, config) => {
    return await axios.delete(`/api/v1/comment/${commentId}`, config)
}