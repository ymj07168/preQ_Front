import React from "react";
import NavBar from "../components/common/NavBar";
import LoginButton from "../components/common/LoginButton";
import GoogleIcon from '../asset/google-icon.png';
import KaKaoIcon from '../asset/kakao-icon.png';
import Footer from "../components/common/Footer";
import "../style/loginpage.css"
import TopContainer from "../components/common/TopContainer";


const LoginPage = () => {
    return (
        <>
            <TopContainer color="white" image="blue">
                <NavBar />
                <div className="login-container">
                    <div className="login-text">
                        Sign In
                    </div>
                    <div className="login-btns">
                        <LoginButton
                            src={GoogleIcon}
                            text="Google 계정으로 시작"
                            btncolor="#FFFFFF"
                        />
                        <LoginButton
                            src={KaKaoIcon}
                            text="카카오 계정으로 시작"
                            btncolor="#FFE617"
                        />
                    </div>
                    <br />
                    <div className="login-subtext">
                        ✽ 계정이 없으면 회원가입이 진행됩니다
                    </div>
                </div>
                <Footer />
            </TopContainer>
        </>
    )
}

export default LoginPage;