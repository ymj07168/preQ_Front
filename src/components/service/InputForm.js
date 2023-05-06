import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputBox from "../common/InputBox";
import StyleButton from "../common/StyleButton";
import dummy from "../../db/data.json";
import { saveCoverLetter } from "../../lib/api/service";


const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    .submit-button{
        display:flex;
        width: 600px;
        justify-content: flex-end;
        align-items: flex-end;
    }
`

const InputTitle = styled.div`
    display: flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 48px; 
    color: #000000;
`

const InputForm = ({ isClick, formId, qlist }) => {

    const [click, setClick] = useState(false)
    const [data, setData] = useState(qlist[formId - 1])
    const [title, setTitle] = useState(qlist[formId - 1].title)
    const [content, setContent] = useState(qlist[formId - 1].content)

    const onClick = () => {
        setClick(!click)
        isClick(click)
        console.log(title, content)
        saveCoverLetter(title, content)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const HandleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const HandleContentChange = (e) => {
        setContent(e.target.value);
    }


    useEffect(() => {
        setData(qlist[formId - 1])
        setTitle(qlist[formId - 1].title)
        setContent(qlist[formId - 1].content)
    }, [formId, data, click, setTitle, setContent])



    return (
        <>
            <InputWrapper>
                <InputTitle>Enter Question</InputTitle>
                <InputBox onChange={HandleTitleChange} width="600px" height='50px' value={formId !== "" ? title : ""} />
                <br /><br />
                <InputTitle>Enter Answer</InputTitle>
                <InputBox onChange={HandleContentChange} width="600px" height="640px" value={formId !== "" ? content : ""} />
                <br />
                <div className="submit-button">
                    <StyleButton width="195px" height="53px" size="22px" onClick={onClick}>Generate</StyleButton>
                </div>
            </InputWrapper>
        </>
    )
}

export default InputForm;