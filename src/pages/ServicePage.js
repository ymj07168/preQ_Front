import React from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import styled from "styled-components";
import QuestionList from "../components/service/QuestionList";
import InputForm from "../components/service/InputForm";

const ServiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
    gap: 20px;
`

const ServicePage = () => {
    return (
        <>
            <TopContainer>
                <NavBar />
                <ServiceContainer>
                    <QuestionList />
                    <InputForm />
                    <div className="result_box">
                        결과 박스
                    </div>
                </ServiceContainer>
            </TopContainer >
        </>
    )
}

export default ServicePage;