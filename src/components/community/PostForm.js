import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "../common/InputBox";
import StyleButton from "../common/StyleButton";
import { addPostItem } from "../../lib/api/community";
import { getCookie } from "../../lib/cookie";
import { useNavigate } from "react-router-dom";
import { editPostItem } from "../../lib/api/community";


const PostFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
`
const PostFormBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
    gap: 10px;
    background: #FFFFFF;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    .title-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 35px;
        line-height: 68px;
        color: #200E32;
    }
    .btn-box{
        display: flex;
        width: 700px;
        margin-top: 50px;
        justify-content: right;
        gap: 20px;
    }
`

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

const PostForm = (props) => {


    const navigator = useNavigate();

    const { isEdit, id, preTitle, preContent } = props;

    const [title, setTitle] = useState(isEdit ? preTitle : '');
    const [content, setContent] = useState(isEdit ? preContent : '');


    // 게시글 생성
    const onAddPostItem = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await addPostItem(title, content, config)
            .then((res) => {
                console.log(res);
                const new_id = res.data.data.id;
                navigator(`/community/item/${new_id}`);
            })
            .catch((err) => console.log(err));
    }

    // 게시글 수정
    const onEditPostItem = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await editPostItem(id, title, content, config)
            .then((res) => {
                console.log(res);
                navigator(`${PROXY}/community/item/${id}`);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>
            <PostFormContainer>
                <PostFormBox>
                    <div className="title-text">
                        제목
                    </div>
                    <InputBox width="700px" height="60px" onChange={(e) => setTitle(e.target.value)} value={title} />
                    <br />
                    <div className="title-text">
                        본문
                    </div>
                    <InputBox width="700px" height="500px" onChange={(e) => setContent(e.target.value)} value={content} />
                    <div className="btn-box">
                        <StyleButton width="140px" height="50px" size="20px" onClick={isEdit ? () => navigator(`${PROXY}/community/item/${id}`) : () => navigator(`${PROXY}/community`)}>취소</StyleButton>
                        <StyleButton width="140px" height="50px" size="20px" onClick={isEdit ? onEditPostItem : onAddPostItem}>등록</StyleButton>
                    </div>
                </PostFormBox>
            </PostFormContainer>
        </>
    )
}

export default PostForm;