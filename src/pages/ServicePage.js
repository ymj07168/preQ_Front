import React from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import styled from "styled-components";
import QuestionList from "../components/service/QuestionList";
import InputForm from "../components/service/InputForm";
import Footer from "../components/common/Footer"
import exImg from "../asset/example.png";

const ServiceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    gap: 40px;
    .result-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
    }
    .pre-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        color: rgba(37, 37, 37, 0.67);
    }
`

const ServicePage = () => {
    return (
        <>
            <TopContainer color="blue" image="white">
                <NavBar />
                <ServiceContainer>
                    <QuestionList />
                    <InputForm />
                    <div className="result-box">
                        <img src={exImg} alt="준비이미지" width="450px" />
                        <div className="pre-text">
                            지원서 문항과 답변을 넣고 <br />
                            예상 면접 질문을 생성해보세요!
                        </div>
                    </div>
                </ServiceContainer>
                <Footer />
            </TopContainer >
        </>
    )
}

export default ServicePage;