import React from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import profileImg from "../asset/profile.png";
import styled from "styled-components";
import Footer from "../components/common/Footer";

const MyPageBlock = styled.div`
    .profile-block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 700px;
        gap: 35px;
    }
    .profile-name{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 18px;
        color: #200E32;        
    }
    .profile-email{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 18px;
        color: #8E8E8E;
    }
    .profile-edit-btn{
        width: 400px;
        height: 50px;
        background: #0D2D84;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #FFFFFF;
        margin-top: 70px;
    }

`

const MyPage = () => {
    return (
        <>
            <TopContainer>
                <NavBar />
                <MyPageBlock>
                    <div className="profile-block">
                        <img src={profileImg} width="220px" alt="프로필이미지" />
                        <div className="profile-name">
                            황서경
                        </div>
                        <div className="profile-email">
                            preQ@naver.com
                        </div>
                        <button className="profile-edit-btn">Edit</button>
                    </div>
                </MyPageBlock>
                <Footer />
            </TopContainer >
        </>
    )
}

export default MyPage;