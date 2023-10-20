import React from "react";
import Login from "../components/AuthForm";
import { Routes, Route } from "react-router-dom";
import Registration from "../components/RegistrationForm"
import HomePage from "../pages/homePage";
import PageNotFound from "../pages/pageNotFound"
import UserDashboard from "../components/user/UserDashboard";

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Registration/>}/>
            <Route path="/userdashboard" element={<UserDashboard/>}/>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default AppRoute;

