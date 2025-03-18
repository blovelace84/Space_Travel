import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpaceTravelPage from "../pages/SpaceTravelPage";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<SpaceTravelPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;