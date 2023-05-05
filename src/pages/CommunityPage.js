import React from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import styled from "styled-components";
import BoardBox from "../components/community/BoardBox";
import Footer from "../components/common/Footer";
import { useState } from "react";
import PostForm from "../components/community/PostForm";
import PostView from "../components/community/PostView";

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
        margin-bottom: 80px;
    }
    .board-center{
        display: flex;
        justify-content : center;
        align-items: center;
    }
`

const CommunityPage = () => {

    const [click, setClick] = useState(false);

    const isClick = (x) => {
        setClick(x)
    }

    return (
        <>
            <TopContainer color="white" image="blue">
                <NavBar />
                <BoardContainer>
                    <div className="board-intro">
                        면접 팁과 후기를 자유롭게 공유해봐요
                    </div>
                    <div className="board-center">
                        {/* <PostView /> */}
                        {click ?
                            <PostForm isClick={isClick} />
                            :
                            <BoardBox isClick={isClick} />
                        }
                    </div>

                </BoardContainer>
                <Footer />
            </TopContainer>
        </>
    )
}

export default CommunityPage;