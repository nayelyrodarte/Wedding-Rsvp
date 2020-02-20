import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

const Header = styled.h2`
  font-family: 'Parisienne';
  font-size: 3em;
  font-weight: regular;
`;

const Content = styled.h1`
  font-size: 1.3em;
  font-weight: light;
`;

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header> Brenda & Aarón </Header>
        <Content> 23 de mayo de 2020 </Content>
        <Content>
          Faltan <Counter /> días
        </Content>
      </div>
    );
  }
}

export default Main;
