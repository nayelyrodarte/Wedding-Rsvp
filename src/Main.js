import React from 'react';
import Counter from './Counter';
import Styled from 'styled-components';

const SubCounter = Styled.h3`
  font-family: 'EB Garamond';
  font-size: 1.5em;
`;

function Main() {
  return (
    <div>
      <h1> Brenda & Aarón </h1>
      <SubCounter>23 de mayo de 2020</SubCounter>
      <SubCounter>
        Faltan <Counter /> días
      </SubCounter>
    </div>
  );
}

export default Main;
