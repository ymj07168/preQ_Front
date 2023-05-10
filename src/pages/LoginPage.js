import React from "react";
import NavBar from "../components/common/NavBar";
import LoginButton from "../components/common/LoginButton";
import GoogleIcon from '../asset/google-icon.png';
import KaKaoIcon from '../asset/kakao-icon.png';
import Footer from "../components/common/Footer";
import "../style/loginpage.css"
import TopContainer from "../components/common/TopContainer";
import { useGoogleLogin } from "@react-oauth/google";
import { login } from "../lib/api/auth";
import { setCookie } from "../lib/cookie";
import axios from "axios";

const { Kakao } = window;

const LoginPage = () => {

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse)
            const getToken = async () => {
                const payload = {
                    code: codeResponse.code,
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
                    redirect_uri: "http://localhost:3000",
                    grant_type: "authorization_code",
                };
                axios.post("https://oauth2.googleapis.com/token", payload)
                    .then((res) => {
                        console.log("access_token", res.data.access_token)
                        login('google', res.data.access_token)
                            .then((res) => {
                                console.log(res)
                                setCookie('is_login', `${res.data.access_token}`)
                                window.location.replace('/');
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            return getToken();
        },
        flow: 'auth-code',
    })

    const handleKakaoLogin = () => {
        console.log('클릭')
        Kakao.Auth.login({
            success: auth => {
                console.log('Login', auth)
                login('kakao', auth.access_token)
                    .then((res) => {
                        console.log(res)
                        setCookie('is_login', `${res.data.accessToken}`)
                        window.location.replace('/');
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            fail: error => {
                alert(JSON.stringify(error))
            }
        })
    }

    return (
        <>
            <TopContainer color="white" image="blue">
                <NavBar />
                <div className="login-container">
                    <div className="login-text">
                        Sign In
                    </div>
                    <div className="login-btns">
                        <div onClick={handleGoogleLogin}>
                            <LoginButton
                                src={GoogleIcon}
                                text="Google 계정으로 시작"
                                btncolor="#FFFFFF"
                            />
                        </div>
                        <div onClick={handleKakaoLogin}>
                            <LoginButton
                                src={KaKaoIcon}
                                text="카카오 계정으로 시작"
                                btncolor="#FFE617"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="login-subtext">
                        ✽ 계정이 없으면 회원가입이 진행됩니다
                    </div>
                </div>
                <Footer />
            </TopContainer >
        </>
    )
}

export default LoginPage;