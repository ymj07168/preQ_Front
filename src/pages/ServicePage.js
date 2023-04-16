import React from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import styled from "styled-components";
import QuestionItem from "../components/service/QuestionItem";

const ServiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
    gap: 20px;
    .question_list{
        display: flex;
        flex-direction: column;
    }
    .question-list-title{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #000000;   
        margin-bottom: 10px;
    }
    .input-box{
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
    }
    .input-title{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 48px; 
        color: #000000;
    }
    .question-input{
        box-sizing: border-box;
        width: 500px;
        height: 70px;
        left: 255px;
        top: 124px;
        background: #F9F8F8;
        box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
    }
    .answer-input{
        box-sizing: border-box;
        width: 500px;
        height: 400px;
        left: 255px;
        top: 124px;
        background: #F9F8F8;
        box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
    }
    .submit-btn{
        width: 195px;
        height: 53px;
        background: #0D2D84;
        border-radius: 10px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px; 
        text-align: center;
        color: #FFFFFF;
    }
`

const ServicePage = () => {
    return (
        <>
            <TopContainer>
                <NavBar />
                <ServiceContainer>
                    <div className="question_list">
                        <div className="question-list-title">
                            Question List
                        </div>
                        <QuestionItem title="untitled" />
                    </div>
                    <div className="input-box">
                        <div className="input-title">
                            Enter Question
                        </div>
                        <div className="question-input">
                            질문 입력창
                        </div>
                        <div className="input-title">
                            Enter Answer
                        </div>
                        <div className="answer-input">
                            답변 입력창
                        </div>
                        <button className="submit-btn">Generate</button>
                    </div>
                    <div className="result_box">
                        결과 박스
                    </div>
                </ServiceContainer>
            </TopContainer>
        </>
    )
}

export default ServicePage;