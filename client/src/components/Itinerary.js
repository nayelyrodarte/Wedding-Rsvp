import React from 'react';
import Styled from 'styled-components';

const ItinerGrid = Styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);

@media screen and (min-width: 1000px)  {
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "cerem recep vest";
  grid-column-gap: 2em;


  .recep {
  border-right: 1px solid lightgray;
}

.cerem {
  border-right: 1px solid lightgray
}

.vest {
  h3 {
    margin-bottom: 1em;
  }
}
}


`;

function Itinerary() {
  return (
    <div>
      <h2> Horarios y ubicaciones </h2>
      <ItinerGrid>
        <div className='cerem'>
          <h3> Ceremonia </h3> <p> Templo de la Sagrada Familia </p>{' '}
          <p>Av.Venustiano Carranza #1810, Col. Centro</p>
          <p>Chihuahua, Chih.</p> <p> 00: 00 hrs </p>{' '}
          <button>
            {' '}
            <a href='https://goo.gl/maps/gyEpWxBD3KmfQzZs5'> Ir al mapa </a>
          </button>{' '}
        </div>

        <div className='recep'>
          <h3> Recepción </h3> <p> Salón de Eventos Los Encinos </p>{' '}
          <p> Calle 38 #6601-B, Col. Tabalaopa </p>
          <p>Chihuahua, Chih. </p> <p> 00: 00 hrs </p>{' '}
          <button>
            <a href='https://goo.gl/maps/U7Zzdo4LRmcELCay8'>Ir a al mapa </a>
          </button>{' '}
        </div>

        <div className='vest'>
          <h3> Vestimenta </h3> <p> FORMAL RIGUROSA </p>{' '}
          <p> Traje / vestido largo </p>{' '}
        </div>
      </ItinerGrid>
    </div>
  );
}

export default Itinerary;
