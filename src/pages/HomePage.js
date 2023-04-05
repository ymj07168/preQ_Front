import React from "react";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import styled from 'styled-components';
import background from "../asset/background.png";

const HomeBlock = styled.div`
    background-image: url(${background});
    backgorund-repeat: 'no-repeat';
    height: 1000px;
    background-position: top center;
    // background-size: cover;
`

// const NavBlock = styled.div`
//     height : 4rem;
//     display: fixed;
//     z-index : 1000;
//     // top : 30px;
//     left: 100px;
//     right: 100px;
//     // margin-top : 30px;
//     // margin-left: 100px;
//     // margin-right: 100px;
//     justify-contents : center;
//     align-items : center;
//     background : #ffffff;
//     border-radius: 30px;
// `

const HomePage = () => {
    return (
        <>
            <HomeBlock>
                <NavBar />
                <Header />
            </HomeBlock>

        </>
    )
}

export default HomePage;