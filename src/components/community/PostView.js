import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyleButton from "../common/StyleButton";
import CommentItem from "../community/CommentItem";
import { getCookie } from "../../lib/cookie";
import { readPostItem } from "../../lib/api/community";
import { addComment } from "../../lib/api/community";
import { useParams } from "react-router-dom";


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

// 게시글 상세 뷰
const PostView = (props) => {

    const { id, name, date, views, content, title, comments } = props;

    const [comment, setComment] = useState('');


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
        window.location.replace(`/community/item/${id}`);
    }

    return (
        <>
            <PostViewContainer>
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
                        writer={item.name}
                        comment={item.content}
                    />
                ))}
            </PostViewContainer>
        </>
    )
}

export default PostView;