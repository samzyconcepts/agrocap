import { Routes, Route } from "react-router";

// Pages
import Landingpage from "./pages/index/Landingpage";
import Login from "./pages/registration/Login/Login";
import Signup from "./pages/registration/Register/Signup";

// CSS
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
        </Routes>
    );
}

export default App;
