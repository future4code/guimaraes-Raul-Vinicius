import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import QuinaPage from "../pages/QuinaPage/QuinaPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/quina" element={<QuinaPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;