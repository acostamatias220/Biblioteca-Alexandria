import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Botones from './Botones';

const CarruselTarjeta = ({ titulo, descripcion, imagenes, libro }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let interval;
    if (hover) {
      interval = setInterval(() => {
        setIndiceActual((prev) => (prev + 1) % imagenes.length);
      }, 2000);
    } else {
      setIndiceActual(0);
    }
    return () => clearInterval(interval);
  }, [hover, imagenes.length]);

  return (
    <div
      className="tarjeta"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 className="tarjeta-titulo">{titulo}</h2>
      <div className="imagen-container">
        {imagenes.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagen ${index}`}
            className={`tarjeta-img ${index === indiceActual ? 'activa' : ''}`}
          />
        ))}
      </div>
      <p>{descripcion}</p>

      <Botones
        libro={{
          id: libro.id,
          titulo,
          descripcion,
          img: imagenes[indiceActual],
        }}
      />

      <Link to={`/product/${libro.id}`}>
        <button style={{ marginTop: '2px' }}>Ver detalles</button>
      </Link>
    </div>
  );
};

export default CarruselTarjeta;