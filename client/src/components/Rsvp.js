import React, { Component } from 'react';
import Styled from 'styled-components';

const RSVP = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CFD3D6;
`;

export class Rsvp extends Component {
  render() {
    return (
      <RSVP>
        <h2>Confirma tu asistencia</h2>
        <p>
          Ayúdanos a encontrarte en nuestra lista de invitados. No utilices
          signos de puntuación o espacios al registarte.
        </p>
      </RSVP>
    );
  }
}

export default Rsvp;
