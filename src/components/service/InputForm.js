import React from "react";
import styled from "styled-components";


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

const InputBox = styled.input`
    box-sizing: border-box;
    width: 600px;
    height: ${props => props.kind === 'Q' ? '50px' : '650px'};
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
    font-size: 22px;
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
                <br /><br />
                <InputTitle>Enter Answer</InputTitle>
                <InputBox kind="A" />
                <br />
                <div className="submit-button">
                    <SubmitBtn>Generate</SubmitBtn>
                </div>
            </InputWrapper>
        </>
    )
}

export default InputForm;