import React from "react";
import QuestionItem from "./QuestionItem";
import styled from "styled-components";
import plusImg from "../../asset/plus.png";

const ListBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    .question_list{
        display: flex;
        flex-direction: column;
    }
    .question-list-title{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #000000;   
        margin-bottom: 10px;
    }
    .plus-button{
        border: none;
        background: none;
        // &:hover{
        //     border-radius: 0.3rem;
        //     border: 2px solid black;
        // }        
    }
`

const QuestionList = () => {
    return (
        <>
            <ListBox>
                <div className="question_list">
                    <div className="question-list-title">
                        Question List
                    </div>
                    <QuestionItem title="untitled" />
                </div>
                <br />
                <button className="plus-button">
                    <img src={plusImg} alt="질문추가버튼" />
                </button>
            </ListBox >
        </>
    )
}

export default QuestionList;