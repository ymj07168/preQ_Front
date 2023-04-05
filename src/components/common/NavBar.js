import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../asset/logo.png';

const TopBlock = styled.div`
    padding-top: 30px;
    background: #DBE9F1;
`

const NavBlock = styled.div`
    height : 4rem;
    display: fixed;
    z-index : 1000;
    top : 30px;
    // margin-top : 30px;
    margin-left: 100px;
    margin-right: 100px;
    align-items : center;
    background : #ffffff;
    border-radius: 30px;
    .logo {
        margin-left: 30px;
        height: 60px;
    }
`

const Menu = styled.div`
    margin-left: auto;
    margin-right: 30px;
`

const LinkTo = styled(Link)`
    text-decoration: none;
    color: #252525;
    font-size: 15px;
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
            <TopBlock>
                <NavBlock>
                    <img className='logo' src={logo} alt='사진을 불러올 수 없음' />
                    <Menu>
                        <LinkTo to='/' >Home</LinkTo>
                        <LinkTo to='/community'>커뮤니티</LinkTo>
                        <LinkTo to='/mypage'>마이페이지</LinkTo>
                        <LinkTo to='/login'>로그인</LinkTo>
                        <LinkTo to='/service'>질문예측서비스</LinkTo>
                    </Menu >
                </NavBlock>
            </TopBlock>
        </>

    )
}

export default NavBar;