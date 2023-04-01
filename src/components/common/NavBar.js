import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavBlock = styled.div`
    height : 4rem;
    display: fixed;
    z-index : 1000;
    margin-top : 30px;
    margin-left: 100px;
    margin-right: 100px;
    align-items : center;
    background : #afafaf;
    border-radius: 30px;
`

const Menu = styled.div`
    margin-left: auto;
    margin-right: 100px;
`

const LinkTo = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
    margin-right : 20px;
    margin-left : 20px;
  &:hover{
    text-decoration: none;
    color: #ffffff;
  }
`



const NavBar = () => {
    return (
        <>
            <NavBlock>
                <Menu>
                    <LinkTo to='/' >Home</LinkTo>
                    <LinkTo to='/community'>커뮤니티</LinkTo>
                    <LinkTo to='/mypage'>마이페이지</LinkTo>
                    <LinkTo to='/login'>로그인</LinkTo>
                    <LinkTo to='/service'>질문예측서비스</LinkTo>
                </Menu>
            </NavBlock>
        </>

    )
}

export default NavBar;