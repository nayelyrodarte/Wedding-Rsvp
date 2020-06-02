import React from 'react';

function Itinerary() {
  return (
    <div>
      {/*Itinerary section*/}
      <h2> Horarios y ubicaciones </h2>
      <section className='itinerary'>
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
          <p> Traje / vestido largo </p>
        </div>
      </section>
      {/*Instagram section*/}
      <div className='img_box'>
        <div>Etiqueta tus fotos con nuestro hashtag #BRENDA&AARON2020</div>
      </div>
      {/*Gifts section*/}
      <section>
        <h2> ¿Quieres hacernos un regalo? </h2>
        <h3>Mesas de regalo</h3>
        <button>
          <a href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/50345156'>
            Liverpool
          </a>
        </button>
        <button>
          <a href='https://www.amazon.com.mx/wedding/brenda-arias-aaron-rivera-chihuahua-october-2020/registry/2TZBNHT0S37PF'>
            Amazon
          </a>
        </button>
        <section>
          <h3>Datos bancarios</h3>
          <div className='bank'>
            <div>
              <p>Brenda Judith Arias Quintana</p>
              <p>Banorte</p>
              <p>No. de tarjeta 4915 6664 7204 6550</p>
            </div>
            <div>
              <p>Marcos Aaron Rivera Olivas</p>
              <p>BBVA</p>
              <p> No. de tarjeta 4152 3133 8061 3849</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Itinerary;
