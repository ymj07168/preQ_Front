import React from "react";
import NavBar from "../components/common/NavBar";
import styled from 'styled-components';
import background from "../asset/background.png";
import SubSection from "../components/home/SubSection";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/common/Footer";

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
`

const HomePage = () => {
    return (
        <>
            <HomeBlock>
                <NavBar />
                <HeroSection />
                <SubSection />
                <Footer />
            </HomeBlock>

        </>
    )
}

export default HomePage;