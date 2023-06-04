import React, { useState } from "react";
import styled from "styled-components";
import StyleButton from "../common/StyleButton";
import CommentItem from "../community/CommentItem";
import { getCookie } from "../../lib/cookie";

import { addComment, deleteComment } from "../../lib/api/community";
import { useNavigate } from "react-router-dom";
import WriteButton from "./WriteButton";
import { Modal } from "../common/Modal";


const PostViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
`
const PostViewBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 120px;
    gap: 10px;
    background: #FFFFFF;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    .top-wrapper{
        display: flex;
        flex-direction: row;
        padding: 5px 15px;

        background: #F9F8F8;
        border: 1px solid #CECECE;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 38px;
        color: #717171;
        .writer{
            flex: auto;
        }
        .date{
            flex: auto;
        }
        .view{
            flex: auto;
        }
    }
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 45px;
        line-height: 68px;
        color: #200E32;
    }
    .content{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #000000;
        margin-bottom: 100px;
    }
    .edit-delete-btn-div{
        display: flex;
        justify-content: flex-end;
        gap: 5px;
    }
`

const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    .comment-input{
        height: 70px;
        padding: 5px 10px;
        border: 1px solid rgba(45, 57, 76, 0.1);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #9D9D9D;
    }
    .btn-div{
        display: flex;
        padding-bottom: 10px;
        padding-right: 10px;
        justify-content: flex-end;
        background: #F5F6F7;
        border: 1px solid rgba(45, 57, 76, 0.1);
    }
`
const PROXY = window.location.hostname === 'localhost' ? '' : '/home';

const PostView = (props) => {

    const { id, name, date, views, content, title, comments } = props;

    const navigator = useNavigate();

    const [comment, setComment] = useState('');

    const [isHover, setHover] = useState('');

    // 게시글 삭제 창 보여주기
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        // isOpen의 상태를 변경하는 메소드를 구현
        // !false -> !true -> !false
        setIsOpen(!isOpen)
    };

    // 댓글 작성
    const onHandleComment = (e) => {
        setComment(e.target.value);
    }
    // 댓글 추가
    const onAddComment = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await addComment(id, comment, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        setComment('');
        // window.location.replace(`${PROXY}/community/item/${id}`);
        window.location.reload();
    }

    // 댓글 삭제
    const onDeleteComment = async (commentId) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await deleteComment(commentId, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        // window.location.replace(`${PROXY}/community/item/${id}`);
        window.location.reload();
    }



    // 게시글 수정 페이지 이동
    const showEditForm = () => {
        navigator(`/community/edit/item/${id}`, {
            state: {
                id: id,
                title: title,
                content: content
            }
        })
    }




    return (
        <>
            <PostViewContainer>
                <WriteButton text="목록으로" onClick={() => navigator(`/community`)} />
                <br />
                <PostViewBox>
                    <div className="top-wrapper">
                        <div className="writer">작성자: {name} </div>
                        <div className="date">작성일: {date}</div>
                        <div className="view">조회수: {views}</div>
                    </div>
                    <br /><br /><br />
                    <div className="content-wrapper">
                        <div className="title">
                            {title}
                        </div>
                        <br /><br />
                        <div className="content">
                            {content}
                        </div>
                    </div>
                    <div className="edit-delete-btn-div">
                        {getCookie('is_who') === name
                            ?
                            <><StyleButton className="edit-btn" width="100px" size="18px" onClick={showEditForm}>수정</StyleButton>
                                <StyleButton className="edit-btn" width="100px" size="18px" onClick={() => openModalHandler()}>삭제</StyleButton></>
                            :
                            <></>}
                    </div>
                </PostViewBox>
                <br />
                <CommentBox>
                    <input type="text" className="comment-input" placeholder="댓글쓰기..." value={comment} onChange={onHandleComment} />
                    <div className="btn-div">
                        <StyleButton width="150px" size="18px" onClick={onAddComment}>입력</StyleButton>
                        <br />
                    </div>
                </CommentBox>
                <br />
                {comments?.map((item) => (
                    <CommentItem
                        key={item.id}
                        id={item.id}
                        writer={item.name}
                        comment={item.content}
                        onMouseEnter={() => { setHover(item.id); console.log(isHover) }}
                        isHover={isHover === item.id}
                        onClick={() => onDeleteComment(item.id)}
                    />
                ))}
            </PostViewContainer >
            {
                isOpen ?
                    <Modal openModalHandler={openModalHandler} item_id={id} />
                    : null
            }
        </>
    )
}

export default PostView;