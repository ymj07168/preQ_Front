import React from "react";
import NavBar from "../components/common/NavBar";
import background from "../asset/background.png";
import styled from "styled-components";
import LoginButton from "../components/common/LoginButton";
import GoogleIcon from '../asset/google-icon.png';
import KaKaoIcon from '../asset/kakao-icon.png';

const HomeBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 850px;
    background-image: url(${background});
    backgorund-repeat: 'no-repeat';
    background-position: top center;
    background-size: cover;
    .login-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top : 80px;
        margin-right: auto;
        margin-left: auto;
    }
    .login-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 1000;
        font-size: 65px;
        line-height: 98px;
        text-align: center;
        color: #252525;
    }
    .login-btns{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    .login-subtext{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        color: #252525;
        opacity: 0.6;
    }
`

const LoginPage = () => {
    return (
        <>
            <HomeBlock>
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
            </HomeBlock>
        </>
    )
}

export default LoginPage;