import React, { Component } from 'react';
import Styled from 'styled-components';
import Form from './Form';
import FormPhoto from '../img/BA-Hats.jpg';

const RSVP = Styled.div`
background-color: #CFD3D6;
display: grid;
  img {
    max-width: 100%;
    max-height: 100%
  }
  
  @media screen and (min-width: 1000px)  {
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2em;

  }
`;

export class Rsvp extends Component {
  render() {
    return (
      <div>
        <RSVP>
          <div>
            <h2>Confirma tu asistencia</h2>
            <p>Ayúdanos a encontrarte en nuestra lista de invitados. </p>
            <p>No utilices signos de puntuación al registarte.</p>
            <Form />
          </div>

          <img src={FormPhoto} alt='' />
        </RSVP>
      </div>
    );
  }
}

export default Rsvp;
