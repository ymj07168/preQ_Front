import React from "react";
import styled from "styled-components";
import wrtieBtnImg from "../../asset/writebtnImg.png";


const WriteBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 130px;
    height: 44px;
    background: #0D2D84;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`

const WriteButton = (props) => {
    const { text, onClick } = props;
    return (
        <>
            <WriteBtn onClick={onClick}>
                <img src={wrtieBtnImg} alt="작성하기버튼" />
                <div className="write-btn-text">{text}</div>
            </WriteBtn>
        </>
    )
}

export default WriteButton;