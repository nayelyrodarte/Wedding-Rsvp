import React from 'react';
import Styled from 'styled-components';
import BoxPhoto from '../img/BA-Front.jpg';

const GiftsContainer = Styled.div`
width: 90%;
display: grid; 
grid-template-columns: repeat(3, 1fr);
padding: 1em;

button {
  width: 80%;
}

section {
  border: 0.5em solid white;
  background-color: gray;
}

img {
  height:95%;
  width: 100%;
  object-fit: cover;
  margin: auto;
}

`;

function Gifts() {
  return (
    <GiftsContainer>
      <section>
        <h3> Mesa de regalos </h3>
        <br></br>
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
      </section>
      <img src={BoxPhoto}></img>
      <section>
        <h3>Datos bancarios</h3>
        <div>
          <p>Brenda Judith </p>
          <p>Arias Quintana</p>
          <p>BANORTE</p>
          <p>Tarjeta No. </p>
          <p>4915 6664 7204 6550</p>
        </div>
        <br></br>
        <div>
          <p>Marcos Aaron Rivera Olivas</p>
          <p>BBVA</p>
          <p> Tarjeta No. 4152 3133 8061 3849</p>
        </div>
      </section>
    </GiftsContainer>
  );
}

export default Gifts;
