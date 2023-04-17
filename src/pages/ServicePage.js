import React from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import styled from "styled-components";
import QuestionList from "../components/service/QuestionList";
import InputForm from "../components/service/InputForm";
import Footer from "../components/common/Footer"

const ServiceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    gap: 40px;
    .result_box{
        width: 500px;
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
                    <div className="result_box">
                        결과 박스
                    </div>
                </ServiceContainer>
                <Footer />
            </TopContainer >
        </>
    )
}

export default ServicePage;