import React from "react";
import { useCart } from "./context/CartContext"; // ✅ Asegurate de que la ruta esté bien

function Botones({ libro }) {
  const { addToCart } = useCart();

  const agregarCarrito = () => {
    addToCart(libro); // ✅ Ahora sí agregás un libro único
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