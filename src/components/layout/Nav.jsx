import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import LoginBoton from '../LoginBoton'; // 👈 Ajustá la ruta si está en otra carpeta

const Nav = () => {
  const { cart } = useCart();

  return (
    <nav className='nav'>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/">Libros virtuales</Link></li>
        <li><Link to="/">Categorías</Link></li>
        <li>
          <Link to="/cart">🛒 Carrito ({cart.length})</Link>
        </li>
        <li>
          <LoginBoton />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
