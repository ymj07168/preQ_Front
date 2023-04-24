import React from "react";
import styled from "styled-components";
import searchImg from "../../asset/searchImg.png";


const SearchWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 343px;
    height: 46px;
    background: #FFFFFF;
    border: 1px solid #0D2D84;
    border-radius: 100px;
    .input-box{
        margin-left: 20px;
        width: 270px;
        font-size: 20px;
        border: none;
        outline: none;
        line-height: 20px;
    }
    .search-btn{
        margin-right: 20px;
        border: none;
        background-color: transparent;
    }
`

const SearchBox = () => {
    return (
        <>
            <SearchWrapper>
                <input type="text" className="input-box" />
                <button className="search-btn"><img src={searchImg} alt="검색버튼이미지" /></button>
            </SearchWrapper>
        </>
    )
}

export default SearchBox;