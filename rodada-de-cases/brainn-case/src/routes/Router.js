import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DiadesortePage from "../pages/DiadesortePage/DiadesortePage";
import HomePage from "../pages/HomePage/HomePage";
import LotoFacilPage from "../pages/LotoFacilPage/LotoFacilPage";
import LotomaniaPage from "../pages/LotomaniaPage/LotomaniaPage";
import QuinaPage from "../pages/QuinaPage/QuinaPage";
import TimemaniaPage from "../pages/TimemaniaPage/TimemaniaPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/quina" element={<QuinaPage />} />
                <Route exact path="/lotofacil" element={<LotoFacilPage />} />
                <Route exact path="/lotomania" element={<LotomaniaPage />} />
                <Route exact path="/timemania" element={<TimemaniaPage />} />
                <Route exact path="/diadesorte" element={<DiadesortePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;