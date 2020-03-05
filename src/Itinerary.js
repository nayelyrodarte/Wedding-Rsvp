import React, { Component } from 'react';

class Itinerary extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#EDEDEB', padding: '1em' }}>
          <h2> Horarios y ubicaciones </h2>
          <h3> Ceremonia </h3>
          <p> Templo de la Sagrada Familia </p>
          <p>
            Av.Venustiano Carranza 1810, Bolívar, Zona Centro, Chihuahua, Chih.
          </p>
          <p> 00: 00 hrs </p>
          <button href='https://goo.gl/maps/gyEpWxBD3KmfQzZs5'>
            Ir al mapa
          </button>
          <h3> Recepción </h3>
          <p> Salón de Eventos Los Encinos </p>
          <p> Calle 38 6601 B, Tabalaopa, Chihuahua, Chih. </p>
          <p> 00: 00 hrs </p>
          <button href='https://goo.gl/maps/U7Zzdo4LRmcELCay8'>
            Ir a al mapa
          </button>
        </div>
      </div>
    );
  }
}

export default Itinerary;
