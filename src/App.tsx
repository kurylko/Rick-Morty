import './App.css'
import Layout from "./components/Layout";
import AppRoutes from "./components/Router";

function App() {

    return (
        <div className="App">
            <AppRoutes/>
            <Layout/>
        </div>
    )
}

export default App
