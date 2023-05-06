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
// import { OAuth2Client } from "google-auth-library";
import axios from "axios";
import qs from 'qs';

const { Kakao } = window;

const LoginPage = () => {

    // const code = new URL(window.location.href).searchParams.get("code");
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse)
            const getToken = async () => {
                const payload = qs.stringify({
                    code: codeResponse.code,
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
                    redirect_uri: "http://localhost:3000",
                    grant_type: "authorization_code",
                });
                const res = axios.post("https://oauth2.googleapis.com/token", payload);
                console.log(res);
                // const token = res.data.access_token
                // console.log(token);
            }
            return getToken();

            // const oAuth2Client = new OAuth2Client(clientId, clientSecret, "postmessage");
            // const { tokens } = oAuth2Client.getToken(codeResponse.code)
            // login('google', codeResponse.code)
            //     .then((res) => {
            //         console.log(res)
            //         setCookie('is_login', `${codeResponse.code}`)
            //         window.location.replace('/');
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
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