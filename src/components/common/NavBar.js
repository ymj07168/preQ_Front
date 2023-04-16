import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../asset/logo.png';

const NavContainer = styled.div`
    padding-top: 40px;
    background: #DBE9F1;
`

const NavBlock = styled.div`
    height : 4.5rem;
    display: fixed;
    z-index : 1000;
    min-width: 800px;
    margin-left: 150px;
    margin-right: 150px;
    align-items : center;
    background : #ffffff;
    border-radius: 40px;
    .logo {
        margin-left: 30px;
        height: 60px;
    }
`

const Menu = styled.div`
    margin-left: auto;
    margin-right: 30px;
    .service-button{
        margin-left: 30px;
        width: 200px;
        height: 45px;
        background: #0D2D84;
        border-radius: 50px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        color: #FFFFFF;
    }
`

const LinkTo = styled(Link)`
    text-decoration: none;
    color: #252525;
    font-size: 15px;
    font-weight: 500;
    margin-right : 20px;
    margin-left : 20px;
  &:hover{
    text-decoration: none;
    color: #0D2D84;
  }
`


const NavBar = () => {
    return (
        <>
            <NavContainer>
                <NavBlock>
                    <img className='logo' src={logo} alt='사진을 불러올 수 없음' />
                    <Menu>
                        <LinkTo to='/'>Home</LinkTo>
                        <LinkTo to='/community'>커뮤니티</LinkTo>
                        <LinkTo to='/mypage'>마이페이지</LinkTo>
                        <LinkTo to='/login'>로그인</LinkTo>
                        <Link to='/service'>
                            <button className='service-button'>질문예측서비스</button></Link>
                    </Menu >
                </NavBlock>
            </NavContainer>
        </>

    )
}

export default NavBar;