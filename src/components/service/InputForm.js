import React from "react";
import styled from "styled-components";


const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
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

const InputBox = styled.input`
    box-sizing: border-box;
    width: 500px;
    height: ${props => props.kind === 'Q' ? '50px' : '600px'};
    left: 255px;
    top: 124px;
    background: #F9F8F8;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border: none;
`

const SubmitBtn = styled.button`
    width: 195px;
    height: 53px;
    background: #0D2D84;
    border-radius: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px; 
    text-align: center;
    color: #FFFFFF;
`

const InputForm = () => {
    return (
        <>
            <InputWrapper>
                <InputTitle>Enter Question</InputTitle>
                <InputBox kind="Q" />
                <br />
                <InputTitle>Enter Answer</InputTitle>
                <InputBox kind="A" />
                <br />
                <SubmitBtn>Generate</SubmitBtn>
            </InputWrapper>
        </>
    )
}

export default InputForm;