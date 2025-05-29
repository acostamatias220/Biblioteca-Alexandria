import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; // 👈

const Nav = () => {
  const { cart } = useCart();

  return (
    <nav className='nav'>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/">Libros físicos</Link></li>
        <li><Link to="/">Libros virtuales</Link></li>
        <li><Link to="/">Categorías</Link></li>
        <li>
          <Link to="/cart">🛒 Carrito ({cart.length})</Link> {/* 👈 */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;