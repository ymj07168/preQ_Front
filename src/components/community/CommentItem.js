import React from "react";
import styled from "styled-components";

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    padding: 20px 20px;
    height: 70px;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #0D2D84;
    box-shadow: 0px 8px 24px #EBEBEB;
    border-radius: 12px;
    margin-bottom: 10px;
    .writer{
        // display: flex;
        // align-items: center;
        // height: 25px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
    }
    .comment{
        display: flex;
        align-items: center;
        height: 50px;
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        color: #000000;     
    }
`

const CommentItem = ({ writer, comment }) => {

    return (
        <ItemBox>
            <div className="writer">{writer}</div>
            <div className="comment">{comment}</div>
        </ItemBox>
    )
}

export default CommentItem;