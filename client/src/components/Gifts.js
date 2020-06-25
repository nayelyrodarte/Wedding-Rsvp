import React, { useState } from 'react';
import Styled from 'styled-components';
import backgroundImg from '../img/hojas3.png';
import Modal from './Modal';

const Gifts = () => {
  return (
    <div>
      <GiftsContainer>
        <Modal />
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
        <button
          onClick={(e) =>
            (e.target.parentNode.childNodes[0].style.display = 'block')
          }
        >
          Datos bancarios
        </button>
      </GiftsContainer>
    </div>
  );
};

const GiftsContainer = Styled.section`
background-image: url(${backgroundImg});
background-repeat: no-repeat;
background-size: 40%;
background-position: center right;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 40%);
height: 40vh;
align-self: center;
justify-items: center;

h2 {
  grid-column-start: 1;
  grid-column-end: 4;
}
button {
  width: 50%;
  height: 2em;
}


@media (max-width: 660px) {
  background-position: center;
  background-size: cover;
min-height: 45vh;
position: relative;
justify-items: center;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
margin-left: 1.5em;

  h2 {
    transform: rotate(-90deg);
    position: absolute;
    left: -20%;
    top: 35%;
    padding-bottom: 1em;
    }
    
  button {
      width: 50%;
      text-align: center;
    }
  }
}

`;

export default Gifts;
