import React from "react";
import styled from "styled-components";
import StyleButton from "../common/StyleButton";
import CommentItem from "../community/CommentItem";


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


const PostView = (props) => {
    return (
        <>
            <PostViewContainer>
                <PostViewBox>
                    <div className="top-wrapper">
                        <div className="writer">작성자: {props.user} </div>
                        <div className="date">작성일: {props.date}</div>
                        <div className="view">조회수: {props.view}</div>
                    </div>
                    <br /><br /><br />
                    <div className="content-wrapper">
                        <div className="title">
                            {props.title}
                        </div>
                        <br /><br />
                        <div className="content">
                            실내 마스크, 대중교통 마스크도 다 해제됐는데
                            이런 최근 시국에 면접이 잡혔다면 마스크를 착용하실건가요??
                            저는 아직은 사회통념상 쓰는게 좋은 선택일거라고 생각했는데, 최근 박람회 두어곳 방문해보니 면접관도 면접자도 안쓰고 있는 사람이 30%는 되는것같아 깜짝놀랐습니다.
                            지원자 입장에서는 마스크를 쓰는게 단순 감염예방 차원을 넘어서서 심신안정 측면에서도 더 좋은데요,
                            그럼에도 마스크를 벗는 지원자들이 꽤 있다는 점에서 마스크를 벗는것도 하나의 어필이 되는건가 의문이 들더라구요.
                            만약 본인이 면접관이라고 가정을 한다면 마스크를 쓴 지원자 vs 마스크를 벗은 지원자 어느쪽에 표를 주시겠나요??
                        </div>
                    </div>
                </PostViewBox>
                <br />
                <CommentBox>
                    <input type="text" className="comment-input" placeholder="댓글쓰기..." />
                    <div className="btn-div">
                        <StyleButton width="150px" size="18px">입력</StyleButton>
                        <br />
                    </div>
                </CommentBox>
                <br />
                <CommentItem
                    writer="으라차차"
                    comment="안녕하세요, 글을 너무 잘쓰셔서 좋아요 누르고 갑니다.! 화이팅"
                />
            </PostViewContainer>
        </>
    )
}

export default PostView;