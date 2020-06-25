import React from 'react';
import Styled from 'styled-components';
import Flower from '../img/hojas3.png';

//TODO
// Fix main container alignment :$!

const ItineraryContainer = Styled.div`
  display: grid;
  height: 50vh;
 _ background: url(${Flower});
  _background-position: left bottom;
  _background-repeat: no-repeat;
  background-size: 40%;
  grid-template-columns: repeat(3, 30vw);
  grid-template-rows: 1fr;
  align-items: center;
  align-self: center;
  padding: 1em;
  

  div {
    border-right: solid 1px lightgray;
  }

  div:last-of-type {
    border: none;
  }

  @media (max-width: 768px) {
  height: fit-content;
  grid-template-columns: 1fr;
  grid-template-rows: repeat (3, 1fr);
  }
`;

function Itinerary() {
  return (
    <ItineraryContainer>
      <div>
        <h3> Ceremonia </h3> <p> Templo de la Sagrada Familia </p>
        <p>Av.Venustiano Carranza #1810</p>
        <p> Col. Centro</p>
        <p>Chihuahua, Chih.</p> <p> 00: 00 hrs </p>
        <button>
          <a href='https://goo.gl/maps/gyEpWxBD3KmfQzZs5'> Ir al mapa </a>
        </button>
      </div>

      <div>
        <h3> Recepción </h3>
        <p> Salón de Eventos Los Encinos </p>
        <p> Calle 38 #6601-B</p>
        <p>Col. Tabalaopa</p>
        <p>Chihuahua, Chih. </p> <p> 00: 00 hrs </p>
        <button>
          <a href='https://goo.gl/maps/U7Zzdo4LRmcELCay8'>Ir a al mapa </a>
        </button>{' '}
      </div>
      <div>
        <h3> Vestimenta </h3>
        <p> FORMAL RIGUROSA </p>
        <p> Traje o vestido largo </p>
      </div>
    </ItineraryContainer>
  );
}

export default Itinerary;
