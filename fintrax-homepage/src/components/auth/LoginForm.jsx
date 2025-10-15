import React, { useState } from 'react';
import Input from '../common/input';
import Button from '../common/button';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Aquí iría la lógica real de autenticación
      console.log('Login attempt:', formData);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí redirigirías al usuario al dashboard
      alert('¡Login exitoso!');
      
    } catch (error) {
      console.error('Error en login:', error);
      setErrors({ general: 'Error al iniciar sesión. Inténtalo de nuevo.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAccount = () => {
    // Aquí iría la navegación a la página de registro
    console.log('Ir a crear cuenta');
    alert('Redirigiendo a crear cuenta...');
  };

  const handleForgotPassword = () => {
    // Aquí iría la navegación a recuperar contraseña
    console.log('Recuperar contraseña');
    alert('Redirigiendo a recuperar contraseña...');
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      {errors.general && (
        <div className="error-message general-error">
          {errors.general}
        </div>
      )}
      
      <div className="form-group">
        <Input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />
      </div>

      <div className="form-group">
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
        />
      </div>

      <div className="form-actions">
        <Button
          type="submit"
          variant="primary"
          loading={isLoading}
          fullWidth
        >
          Iniciar Sesión
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={handleCreateAccount}
          fullWidth
        >
          Crear Cuenta
        </Button>
      </div>

      <div className="form-footer">
        <button 
          type="button"
          className="forgot-password-link"
          onClick={handleForgotPassword}
        >
          ¿Olvidaste tu Contraseña?
        </button>
      </div>
    </form>
  );
};

export default LoginForm;