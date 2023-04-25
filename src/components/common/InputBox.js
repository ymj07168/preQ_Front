import styled from "styled-components"

const InputBox = styled.textarea`
    box-sizing: border-box;
    // width: 600px;
    width: ${props => props.width};
    height: ${props => props.height};
    // height: ${props => props.kind === 'Q' ? '50px' : '650px'};
    background: #F9F8F8;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border: none;
    word-break:break-all;
    resize: none;
    padding: 12px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
`

export default InputBox;