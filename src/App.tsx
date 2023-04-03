import './App.css'
import Layout from "./components/Layout";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import React from "react";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Layout/>
            <Routes>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/locations" element={<Locations/>}/>
            </Routes>
        </div>
    )
}

export default App
