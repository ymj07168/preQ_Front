import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "../common/InputBox";


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

const SubmitBtn = styled.button`
    width: 195px;
    height: 53px;
    background: #0D2D84;
    border-radius: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px; 
    text-align: center;
    color: #FFFFFF;
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
                    <SubmitBtn onClick={onClick}>Generate</SubmitBtn>
                </div>
            </InputWrapper>
        </>
    )
}

export default InputForm;