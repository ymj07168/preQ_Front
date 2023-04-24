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

const WriteButton = () => {
    return (
        <>
            <WriteBtn>
                <img src={wrtieBtnImg} alt="작성하기버튼" />
                <div className="write-btn-text">작성버튼</div>
            </WriteBtn>
        </>
    )
}

export default WriteButton;