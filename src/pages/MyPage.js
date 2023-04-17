import React, { useState } from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import profileImg from "../asset/profile.png";
import Footer from "../components/common/Footer";
import "../style/mypage.css";
import EditProfileForm from "../components/mypage/EditProfileForm";


const MyPage = () => {
    const [isClick, setClick] = useState(false);
    const [ButtonText, changeButtonText] = useState("Edit");

    const onClick = () => {
        // 프로필 조회
        if (isClick === false) {
            setClick(true);
            changeButtonText("Save");
        }
        // 프로필 수정
        if (isClick === true) {
            setClick(false);
            changeButtonText("Edit");
        }
    }

    return (
        <>
            <TopContainer color="white" image="blue">
                <NavBar />
                <div className="profile-block">
                    <img src={profileImg} width="220px" alt="프로필이미지" />
                    {isClick ? <EditProfileForm />
                        : <><div className="profile-name">
                            이효원
                        </div>
                            <div className="profile-email">
                                preQ@naver.com
                            </div></>}
                    <button className="profile-edit-btn" onClick={onClick}>{ButtonText}</button>
                </div>
                <Footer />
            </TopContainer >
        </>
    )
}

export default MyPage;