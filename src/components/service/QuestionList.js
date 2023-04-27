import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import styled from "styled-components";
import plusImg from "../../asset/plus.png";
import dummy from "../../db/data.json";

const ListBox = styled.div`
    display: flex;
    align-items: flex-center;
    flex-direction: column;
    .question-list-title{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
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

const QuestionList = ({ onHandleForm }) => {

    const [qlist, setQList] = useState(dummy.question)
    const onPlusQuestion = () => {
        setQList([...qlist, { id: null, title: null, content: null }])
    }
    console.log(qlist)


    useEffect(() => {
    }, [qlist])

    return (
        <>
            <ListBox>
                <div className="question-list-title">
                    Question List
                </div>
                {qlist.map(item => (
                    <div onClick={() => { onHandleForm(item.id) }}>
                        <QuestionItem
                            key={item.id}
                            title={item.title}
                        />
                    </div>
                ))}
                {/* {plusNum !== [] ?
                    plusNum.map(() => (
                        <div onClick={() => { onHandleForm(null) }}>
                            < QuestionItem
                                key=""
                                title="" />
                        </div>))
                    :
                    null
                } */}
                <br />
                <button className="plus-button" onClick={onPlusQuestion}>
                    <img src={plusImg} alt="질문추가버튼" />
                </button>
            </ListBox >
        </>
    )
}

export default QuestionList;