import React from "react";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import styled from 'styled-components';
import background from "../asset/background.png";

const HomeBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1050px;
    background-image: url(${background});
    backgorund-repeat: 'no-repeat';
    background-position: top center;
    background-size: cover;
`

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