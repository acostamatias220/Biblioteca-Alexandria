import React from 'react';
import CarruselTarjeta from '../CarruselTarjeta';
import promociones from '../Promociones';

const Main = () => {
  return (
    <main className="main">
      <div className="tarjetadiv">
        {promociones.map((promo) => (
          <CarruselTarjeta
            key={promo.id}
            titulo={promo.titulo}
            descripcion={promo.descripcion}
            imagenes={promo.imagenes}
            libro={promo}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;