import React from "react";
import styled from "styled-components";
import mainImg from "../../asset/mainImg.png";

const HeaderBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top : 50px;
    margin-left: 100px;
    margin-right: 100px;
    .mainblock{
        margin: 20px;
    }
    img{
        margin: 20px;
    }
`

const Header = () => {
    return (
        <HeaderBlock>
            <div className="mainblock">
                <h1 className="title">프리큐와 함께<br />면접 준비 시작하세요!</h1>
                <p className="discription">
                    프리큐는 자기소개서를 기반으로 한 예상 면접 질문, <br /> 면접 후기와 팁을 제공하여 지원자들이 충분히 면접에 <br />대비할 수 있도록 도움을 제공하는 서비스입니다.
                </p>
                <button>프리큐 지금 체험해보기</button>
            </div>
            <img src={mainImg} alt="사진을 불러올 수 없음" />
        </HeaderBlock>
    );
};

export default Header;