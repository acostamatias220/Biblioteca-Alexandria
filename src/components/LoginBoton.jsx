import React from 'react';
import { useAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginBoton = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      logout(); // Cierra sesión
    } else {
      navigate('/login'); // Redirige al formulario de login
    }
  };

  return (
    <button onClick={handleClick} style={{ background: 'none', color: 'white', border: 'none' }}>
      {isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}
    </button>
  );
};

export default LoginBoton;
