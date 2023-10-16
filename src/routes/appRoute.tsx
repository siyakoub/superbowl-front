import React from "react";
import Login from "../components/AuthForm";
import { Routes, Route } from "react-router-dom";

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AppRoute;

