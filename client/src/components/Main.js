import React from 'react';
import Counter from './Counter';
import Styled from 'styled-components';
import MainPhoto from '../img/B&A-21-2.jpg';

const Header = Styled.header`
display: grid;
  align-items: start;
  min-height: 70vh;
  min-width: 100%;
  background-color: #d0d4d7;
  background-image: url(${MainPhoto});
  background-position: center;
  background-size: cover;
  background-color: #a89ca6;
  width: 100%;
}

p {
  font-weight: bold;
  font-size: 1.3em;
  margin: 0;
}

p:first-of-type {
  position: relative;
  align-self: end;
}

@media (max-width: 768px) {
  }
`;

function Main() {
  return (
    <Header>
      <h1>Brenda & Aarón</h1>
      <p>11 de octubre de 2020</p>
      <p>
        Faltan <Counter /> días
      </p>
    </Header>
  );
}

export default Main;
