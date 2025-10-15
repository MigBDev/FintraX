import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import "./styles/Responsive.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la landing page */}
        <Route path="/" element={<Home />} />

        {/* Ruta para el login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Ruta para el registro */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
