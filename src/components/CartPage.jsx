import React from 'react';
import { useCart } from './context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handlePagar = () => {
    alert('Redirigiendo al proceso de pago...');
    navigate('/pago');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>Tu carrito de compras</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>El carrito está vacío.</p>
      ) : (
        <div className="cart-list">
          {cart.map((libro, index) => (
            <div key={index} className="tarjeta">
              <h3>{libro.titulo}</h3>
              <div className="imagen-container">
                <img
                  src={libro.img}
                  alt={libro.titulo}
                  className="tarjeta-img activa"
                />
              </div>
              <p>{libro.descripcion}</p>
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </div>
          ))}
          <button
            onClick={handlePagar}
            style={{
              marginTop: '2rem',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              backgroundColor: 'green',
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Ir a pagar
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;