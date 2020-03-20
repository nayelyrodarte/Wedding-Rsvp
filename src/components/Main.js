import React from 'react';
import Counter from './Counter';
import Styled from 'styled-components';
import HeaderPic from '../img/aaron-2-2.jpg';

const Header = Styled.div`
background: url(${HeaderPic}) 75% no-repeat;
height: 100vh;
`;

const SubCounter = Styled.h3`
  font-family: 'EB Garamond';
  font-size: 1.5em;
  padding: 0;
  line-height: 1.2em
`;

function Main() {
  return (
    <Header>
      <h1 style={{ paddingTop: '2em' }}> Brenda</h1>
      <h1>&</h1>
      <h1 style={{ paddingBottom: '.5em' }}>Aarón</h1>
      <SubCounter>23 de mayo de 2020</SubCounter>
      <SubCounter>
        Faltan <Counter /> días
      </SubCounter>
    </Header>
  );
}

export default Main;
