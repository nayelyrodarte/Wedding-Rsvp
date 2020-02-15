import React from 'react';
import styled from 'styled-components';

const Header = styled.h1``;

class Main extends React.Component {
  counter = () => {
    const wedDay = new Date('2020,05,24 20:00:00');
    let dateNow = Date.now();

    let daysRemaining = Math.round((wedDay - dateNow) / (1000 * 60 * 60 * 24));

    console.log(daysRemaining);
  };

  render() {
    return (
      <div>
        <Header> ¡Nos casamos! </Header>
        <h3> Brenda & Aarón </h3>
        <h4> 23 de mayo de 2020 </h4>
        <h4> Faltan ${this.count} días</h4>
      </div>
    );
  }
}

export default Main;
