import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { toast } from 'react-toastify';

const RutaProtegida = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Si no está autenticado, mostramos el popup y redirigimos
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Necesita iniciar sesión para ir al carrito");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RutaProtegida;
