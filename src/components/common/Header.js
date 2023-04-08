import React from "react";
import styled from "styled-components";
import mainImg from "../../asset/mainImg.png";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top : 50px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 150px;
    padding-right: 150px;
    width: 1200px;
    .mainblock{
        display: flex;
        width: 1200px;
    }
    .textblock{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        width: 550px;
    }
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 70px;
        color: #252525;
        min-width: 634px;
    }
    .description{
        margin-top: 30px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 36px;
    }
    .start-button{
        margin-top: 80px;
        width: 300px;
        height: 76px;
        left: 122px;
        top: 679px;
        background: #0D2D84;
        border-radius: 10px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
    }
    img{
        width: 700px;
    }
`


const Header = () => {
    return (
        <HeaderContainer>
            <div className="mainblock">
                <div className="textblock">
                    <div className="title">프리큐와 함께<br />면접 준비 시작하세요!</div>
                    <div className="description">
                        프리큐는 자기소개서를 기반으로 한 예상 면접 질문, <br /> 면접 후기와 팁을 제공하여 지원자들이 충분히 면접에 <br />대비할 수 있도록 도움을 제공하는 서비스입니다.
                    </div>
                    <button class="start-button">프리큐 지금 체험해보기</button>
                </div>
                <img src={mainImg} alt="사진을 불러올 수 없음" />
            </div>
        </HeaderContainer>
    );
};

export default Header;