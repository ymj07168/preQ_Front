import React from "react";
import styled from "styled-components";

const ItemBox = styled.div`
    box-sizing: border-box;
    width: 553px;
    height: 133.1px;
    background: #FFFFFF;
    border: 3px solid #F9F8F8;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.2);
    border-radius: 50px;

    padding: 30px;
    margin: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
`

const AnswerItem = (props) => {
    return (
        <ItemBox>
            {props.text}
        </ItemBox>
    )
}

export default AnswerItem;