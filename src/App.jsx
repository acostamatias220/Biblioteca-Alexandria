import { useState } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import { CartProvider } from './components/context/CartContext'; // ✅ Corrige la ruta si es necesario

function App() {
  return (
    <CartProvider>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartPage />} /> {/* ✅ RUTA DEL CARRITO */}
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
