import React from 'react';
import Navbar from '../components/Navbar.jsx';   // 🔹 Importar Navbar
import LoginForm from '../components/auth/LoginForm';
import BrandSection from '../components/auth/BrandSection';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <>
      {/* 🔹 Navbar arriba */}
      <Navbar />

      <div className="login-container">
        <div className="login-box">{/* 🔹 Caja principal */}
          <BrandSection />
          <div className="form-section">
            <div className="form-wrapper">
              <div className="welcome-header">
                <h1>Bienvenido</h1>
                <p>Inicia sesión en tu cuenta para continuar</p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
