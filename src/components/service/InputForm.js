import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "../common/InputBox";
import StyleButton from "../common/StyleButton";


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

const InputForm = ({ isClick }) => {

    const [click, setClick] = useState(false)

    const onClick = () => {
        // 결과 조회
        if (click === false) {
            setClick(true);
        }
        // 입력 전 페이지
        if (click === true) {
            setClick(false);
        }
    }

    isClick(click)

    return (
        <>
            <InputWrapper>
                <InputTitle>Enter Question</InputTitle>
                <InputBox width="600px" height='50px' />
                <br /><br />
                <InputTitle>Enter Answer</InputTitle>
                <InputBox width="600px" height="640px" />
                {/* <InputAnswer /> */}
                <br />
                <div className="submit-button">
                    <StyleButton width="195px" height="53px" size="22px" onClick={onClick}>Generate</StyleButton>
                </div>
            </InputWrapper>
        </>
    )
}

export default InputForm;