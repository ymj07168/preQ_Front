// import { Route, Navigate } from 'react-router-dom';
import isLogin from "./isLogin";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//         // Show the component only when the user is logged in
//         // Otherwise, redirect the user to /login page
//         <Route
//             {...rest}
//             render={(props) => (isLogin() ? <Component {...props} /> : <Navigate to='/' />)}
//         />
//     );
// };

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = isLogin(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;