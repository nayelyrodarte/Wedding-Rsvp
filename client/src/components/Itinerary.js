import React from 'react';
import Styled from 'styled-components';
import InstaPic from '../img/B&A-21-2.jpg';

const ItinerGrid = Styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-auto-rows: 35h;
grid-gap: 2em;

.img_box {
  background: url(${InstaPic}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 40vh;

  p {
    display: inline-block;
    margin-top: 10em;
  }
}

@media screen and (min-width: 1000px)  {
  grid-template-columns: repeat(3, 30vw);
  grid-template-rows: repeat(2, 30vh);

  .img_box {
    grid-column: 1/5;
    height: 50vh;
  }

}
`;

function Itinerary() {
  return (
    <div>
      <h2> Horarios y ubicaciones </h2>
      <ItinerGrid>
        <div>
          <h3> Ceremonia </h3> <p> Templo de la Sagrada Familia </p>{' '}
          <p>Av.Venustiano Carranza #1810, Col. Centro</p>
          <p>Chihuahua, Chih.</p> <p> 00: 00 hrs </p>{' '}
          <button>
            {' '}
            <a href='https://goo.gl/maps/gyEpWxBD3KmfQzZs5'> Ir al mapa </a>
          </button>{' '}
        </div>

        <div>
          <h3> Recepción </h3> <p> Salón de Eventos Los Encinos </p>{' '}
          <p> Calle 38 #6601-B, Col. Tabalaopa </p>
          <p>Chihuahua, Chih. </p> <p> 00: 00 hrs </p>{' '}
          <button>
            <a href='https://goo.gl/maps/U7Zzdo4LRmcELCay8'>Ir a al mapa </a>
          </button>{' '}
        </div>

        <div>
          <h3> Vestimenta </h3> <p> FORMAL RIGUROSA </p>{' '}
          <p> Traje / vestido largo </p>{' '}
        </div>
        <div className='img_box'>
          <p>Etiqueta tus fotos con nuestro hashtag</p>
        </div>
      </ItinerGrid>
    </div>
  );
}

export default Itinerary;
