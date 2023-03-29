import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Link to='/' >Home</Link>
            <Link to='/community'>Community</Link>
            <Link to='/mypage'>MyPage</Link>
            <Link to='/login'>Login</Link>
            <Link to='/service'>PredictionService</Link>
        </>
    )
}

export default NavBar;