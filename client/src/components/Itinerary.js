import React from 'react';

function Itinerary() {
  return (
    <section className='itinerary-component'>
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
        <br />
      </div>
    </section>
  );
}

export default Itinerary;
