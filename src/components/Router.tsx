import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Characters from "../pages/Characters";
import Locations from "../pages/Locations";

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/locations" element={<Locations/>}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;