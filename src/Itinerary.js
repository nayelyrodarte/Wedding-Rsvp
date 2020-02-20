import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1.4em;
`;

class Itinerary extends Component {
  render() {
    return (
      <div>
        <Title> Horarios y ubicaciones </Title>
        <h3>Ceremonia</h3>
        <p>Iglesia</p>
        <p>00:00 hrs</p>
        <button>Ir a Google Maps</button>
        <h3>Recepción</h3>
      </div>
    );
  }
}

export default Itinerary;
