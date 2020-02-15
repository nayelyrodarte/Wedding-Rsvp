import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

const Header = styled.h2`
  font-family: 'Parisienne';
  font-size: 2.5em;
  font-weight: regular;
`;

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1> ¡Nos casamos! </h1>
        <Header> Brenda & Aarón </Header>
        <h1> 23 de mayo de 2020 </h1>
        <Counter />
      </div>
    );
  }
}

export default Main;
