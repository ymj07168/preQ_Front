import React from "react";
import styled from "styled-components";
import AnswerItem from "./AnswerItem";
import dummy from "../../db/data.json";

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .answer-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #000000;
    }
`

const AnswerList = (props) => {
    return (
        <ListBox>
            <div className="answer-text">
                지원자님의 답변에 대한 예상 면접 질문입니다.
            </div>
            {props.answer.map(item => (
                <AnswerItem text={item.question} />
            ))}
        </ListBox>
    )
}

export default AnswerList;