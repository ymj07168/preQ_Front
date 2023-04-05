import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PublicRoute from "./lib/router/PublicRoute";
// import PrivateRoute from "./lib/router/PrivateRoute";


import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";

import NavBar from "./components/common/NavBar";

const Router = () => {
    return (
        <BrowserRouter>
            {/* <NavBar /> */}
            <Routes>
                <Route element={<HomePage />} path='/' exact />
                <Route element={<CommunityPage />} path='/community' />
                <Route element={<MyPage />} path='/mypage' />
                <Route element={<LoginPage />} path='/login' />
                <Route element={<ServicePage />} path='/service' />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;