import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./components/Router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppRoutes>
            <App/>
        </AppRoutes>
    </React.StrictMode>
)
