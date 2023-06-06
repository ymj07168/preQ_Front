import React from "react";
import styled from "styled-components";
import AnswerItem from "./AnswerItem";

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .answer-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #000000;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

const AnswerList = (props) => {
    return (
        <ListBox>
            <div className="answer-text">
                지원자님의 답변에 대한 예상 면접 질문입니다.
            </div>
            {props?.answer.map((item) =>
                <>
                    {
                        item.question ? <AnswerItem text={item.question} /> : <AnswerItem text={item} />
                    }

                </>

            )}
            {/* {props?.answer.map((item, index) =>
                <div className="keyword">{index + 1}. {item}</div>
            )} */}
        </ListBox>
    )
}

export default AnswerList;