import React from 'react';
import Styled from 'styled-components';
import backgroundImg from '../img/hojas3.png';

const GiftsContainer = Styled.section`
background-image: url(${backgroundImg});
background-repeat: no-repeat;
background-size: 40%;
background-position: center right;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2,1fr);
height: 40vh;

h2 {
  grid-column-start: 1;
  grid-column-end: 4;
}
button {
  width: 50%;
  height: 2em;
}


@media (max-width: 660px) {
  background-position: top;
  background-size: cover;
min-height: 45vh;
position: relative;
justify-items: center;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
margin-top: 1em;
margin-left: 1em;

  h2 {
    transform: rotate(-90deg);
    position: absolute;
    left: -2em;
    top: 3.5em;
    }
    
  button {
      width: 50%;
    }
  }
}

`;

function Gifts() {
  return (
    <div>
      <GiftsContainer>
        <h2> Mesa de regalos </h2>
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
        <button>Datos bancarios</button>
      </GiftsContainer>
    </div>
  );
}

export default Gifts;
