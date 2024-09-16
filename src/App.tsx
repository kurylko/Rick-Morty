import './index.css'
import Layout from "./components/Layout";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import React from "react";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <div className="flex flex-col items-center justify-center w-screen h-full">
            <Layout/>
            <Routes>
                <Route path="/" element={<Characters/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/locations" element={<Locations/>}/>
                <Route path="/characters/:residents" element={<Characters/>}
                />
            </Routes>
        </div>
    )
}

export default App
