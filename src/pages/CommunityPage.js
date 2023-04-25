import React from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import styled from "styled-components";
import BoardBox from "../components/community/BoardBox";
import Footer from "../components/common/Footer";

const BoardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    .board-intro{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 1000;
        font-size: 24px;
        line-height: 45px;
        margin-left: 170px;
        color: #0D2D84;
        margin-bottom: 100px;
    }
`


const CommunityPage = () => {
    return (
        <>
            <TopContainer color="white" image="blue">
                <NavBar />
                <BoardContainer>
                    <div className="board-intro">
                        면접 팁과 후기를 자유롭게 공유해봐요
                    </div>
                    <BoardBox />

                    <div className="board-footer">
                        <div className="pagination">
                            페이지링크
                        </div>
                    </div>
                </BoardContainer>
                <Footer />
            </TopContainer>
        </>
    )
}

export default CommunityPage;