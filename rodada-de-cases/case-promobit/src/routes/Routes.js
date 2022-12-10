import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

const Router = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route exact path="/detalhes" element={<MovieDetailsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;