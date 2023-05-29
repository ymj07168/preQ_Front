import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "../common/InputBox";
import StyleButton from "../common/StyleButton";
import { addPostItem } from "../../lib/api/community";
import { getCookie } from "../../lib/cookie";


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


const PostForm = ({ isClick }) => {

    // const onClick = () => {
    //     // 게시글 전체 조회 뷰 이동
    //     isClick(false)
    // }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onAddPostItem = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await addPostItem(title, content, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

    }

    //value = {props.title}
    //value = {props.content}

    return (
        <>
            <PostFormContainer>
                <PostFormBox>
                    <div className="title-text">
                        제목
                    </div>
                    <InputBox width="700px" height="60px" onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <div className="title-text">
                        본문
                    </div>
                    <InputBox width="700px" height="500px" onChange={(e) => setContent(e.target.value)} />
                    <div className="btn-box">
                        <StyleButton width="140px" height="50px" size="20px" onClick={() => isClick(false)}>취소</StyleButton>
                        <StyleButton width="140px" height="50px" size="20px" onClick={onAddPostItem}>등록</StyleButton>
                    </div>
                </PostFormBox>
            </PostFormContainer>
        </>
    )
}

export default PostForm;