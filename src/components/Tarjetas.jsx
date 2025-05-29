import React from "react";
import Boton from "./Botones.jsx";
import '../App.css'

function Tarjeta({ titulo, img, descripcion, botonTexto, botonColor }) {
  const libro = { titulo, img, descripcion };

  return (
    <div className="tarjeta">
  <h2>{titulo}</h2>
  <div className="imagen-container">
    <img src={img} alt={titulo} className={`tarjeta-img ${activo ? 'activa' : ''}`} />
  </div>
  <p>{descripcion}</p>
  <Boton texto={botonTexto} color={botonColor} libro={libro} />
</div>
    
  );
}

export default Tarjeta;


