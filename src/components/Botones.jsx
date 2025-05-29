import React from "react";
import { useCart } from "./context/CartContext";

function Botones({ libro }) {
  const { addToCart } = useCart();

  const agregarCarrito = () => {
    addToCart(libro);
  };

  const leerDemo = () => {
    alert('Esta siendo redirigido a la demo online');
  };

  return (
    <div className="botones">
      <button onClick={agregarCarrito}>Agregar al carrito</button>
      <button onClick={leerDemo}>Leer demo online</button>
    </div>
  );
}

export default Botones;