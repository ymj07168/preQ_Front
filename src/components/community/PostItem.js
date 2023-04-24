import React from "react";
import styled from "styled-components";

const PostItemBox = styled.div`
    // box-sizing: border-box;
    display: flex;
    width: 840px;
    height: 100px;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #FFFFFF;
    box-shadow: 0px 8px 24px #EBEBEB;
    border-radius: 12px;
    padding: 15px 30px;
    gap: 40px;
    .user{
        height: 40px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #636363;
    }
    .title{
        height: 40px;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #200E32;
    }
    .date{
        height: 20px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;   
        color: #636363;
    }
    .view{
        margin-top: 20px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #200E32;
    }

`

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
`

const PostItem = (props) => {
    return (
        <>
            <PostItemBox>
                <LeftWrapper>
                    <div className="user">{props.user}</div>
                    <div className="title">{props.title}</div>
                    <div className="date">{props.date}</div>
                </LeftWrapper>
                <div className="view">조회수: {props.view}</div>
            </PostItemBox>

        </>
    )
}

export default PostItem;