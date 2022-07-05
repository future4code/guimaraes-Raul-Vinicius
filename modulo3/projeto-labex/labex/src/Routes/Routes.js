import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripsListPage from "../pages/TripsListPage/TripsListPage";
import TripDetailPage from "../pages/TripDetailPage/TripDetailPage";
import ApplicationPage from "../pages/ApplicationPage/ApplicationPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/viagens" element={<TripsListPage />} />
                <Route path="/viagens/detalhes" element={<TripDetailPage />} />
                <Route path="/viagens/criar-viagem" element={<CreateTripPage />} />
                <Route path="/inscricao" element={<ApplicationPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
    </BrowserRouter>
    )   
}

export default Router