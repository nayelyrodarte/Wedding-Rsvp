import React from 'react';
import Styled from 'styled-components';

const ItinerGrid = Styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);

@media screen and (min-width: 1024px) and (max-height: 1310px) {
  grid-template-columns: repeat(3, 1fr)
}


`;

function Itinerary() {
  return (
    <ItinerGrid>
      <div
        style={{
          padding: '1em'
        }}
      >
        <h2> Horarios y ubicaciones </h2> <h3> Ceremonia </h3>{' '}
        <p> Templo de la Sagrada Familia </p>{' '}
        <p>
          Av.Venustiano Carranza 1810, Bolívar, Zona Centro, Chihuahua, Chih.{' '}
        </p>{' '}
        <p> 00: 00 hrs </p>{' '}
        <button>
          {' '}
          <a href='https://goo.gl/maps/gyEpWxBD3KmfQzZs5'> Ir al mapa </a>
        </button>{' '}
        <h3> Recepción </h3> <p> Salón de Eventos Los Encinos </p>{' '}
        <p> Calle 38 6601 B, Tabalaopa, Chihuahua, Chih. </p>{' '}
        <p> 00: 00 hrs </p>{' '}
        <button>
          <a href='https://goo.gl/maps/U7Zzdo4LRmcELCay8'>Ir a al mapa </a>
        </button>{' '}
        <h3> Vestimenta </h3> <p> FORMAL / RIGUROSA </p>{' '}
        <p> Traje o vestido largo </p>{' '}
      </div>
    </ItinerGrid>
  );
}

export default Itinerary;
