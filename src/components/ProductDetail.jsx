import React from 'react';
import { useParams } from 'react-router-dom';
import promociones from './Promociones';

const ProductDetail = () => {
  const { id } = useParams(); // 👈 Obtenemos el ID desde la URL
  const producto = promociones.find(p => p.id === parseInt(id)); // Convertimos id a número

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{producto.titulo}</h2>
      <img
        src={producto.imagenes[0]}
        alt={producto.titulo}
        style={{ width: '300px', margin: '1rem 0' }}
      />
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default ProductDetail;