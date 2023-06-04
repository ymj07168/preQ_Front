import React, { useState, useEffect } from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import profileImg from "../asset/profile.png";
import Footer from "../components/common/Footer";
import "../style/mypage.css";
import EditProfileForm from "../components/mypage/EditProfileForm";
import { getMyInfo } from "../lib/api/auth";
import { getCookie } from "../lib/cookie";


const MyPage = () => {

    const [isEdit, setEdit] = useState(false);
    const [isClick, setClick] = useState(false);
    const [ButtonText, changeButtonText] = useState("Edit");

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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

    const getMemberInfo = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        const json = await getMyInfo(config);
        console.log(json);
        setName(json.data.data.name);
        setEmail(json.data.data.email);
    }

    useEffect(() => {
        getMemberInfo();
    }, []);

    return (
        <>
            <TopContainer color="white" image="blue">
                <NavBar />
                <div className="profile-block">
                    <img src={profileImg} width="220px" alt="프로필이미지" />
                    {isEdit ? <EditProfileForm name={name} email={email} />
                        : <><div className="profile-name">
                            {name}
                        </div>
                            <div className="profile-email">
                                {email}
                            </div>
                            <button className="profile-edit-btn" onClick={() => setEdit(true)}>Edit</button></>}
                </div>
                <Footer />
            </TopContainer >
        </>
    )
}

export default MyPage;