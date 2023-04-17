import React from "react";
import NavBar from "../components/common/NavBar";
import SubSection from "../components/home/SubSection";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/common/Footer";
import TopContainer from "../components/common/TopContainer";


const HomePage = () => {
    return (
        <>
            <TopContainer color="white" image="blue">
                <NavBar />
                <HeroSection />
                <SubSection />
                <Footer />
            </TopContainer >
        </>
    )
}

export default HomePage;