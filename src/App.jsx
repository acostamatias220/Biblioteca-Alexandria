import { useState } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './components/context/AuthContext';
import RutaProtegida from './components/RutaProtegida';
import LoginPage from './components/LoginPage';
import ProductDetail from './components/ProductDetail';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={
            <RutaProtegida>
              <CartPage />
            </RutaProtegida>
          } />
          <Route path="/product/:id" element={<ProductDetail />} /> {/*Ruta dinámica */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" autoClose={3000} />
      </CartProvider>
    </AuthProvider>
  );
}



export default App;


