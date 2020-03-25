import React from 'react';
import Counter from './Counter';
import Styled from 'styled-components';
import HeaderPic from '../img/BA-Bus.jpg';

const SubCounter = Styled.h3`
  font-family: 'EB Garamond';
  font-size: 1.5em;
  padding: 0;
  line-height: 1.2em
`;

const Header = Styled.div`
background: url(${HeaderPic}) center / 220% no-repeat;
background-size: cover;
height: 100vh;

div {
  
  display: flex;

  @media (min-width: 800px) {

 
  align-items: center;


}


h1 {
  line-height: .8em;
  text-shadow: 1px 2px 1px gray;   
}

}
`;

function Main() {
  return (
    <Header>
      <div>
        <h1 style={{ paddingTop: '1em' }}>
          Brenda <div>&</div> Aarón
        </h1>
      </div>
      <SubCounter>23 de mayo de 2020</SubCounter>
      <SubCounter>
        Faltan <Counter /> días
      </SubCounter>
    </Header>
  );
}

export default Main;
