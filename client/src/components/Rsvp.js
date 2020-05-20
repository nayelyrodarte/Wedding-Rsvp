import React, { Component } from 'react';
import Styled from 'styled-components';
import Form from './Form';
import FormPhoto from '../img/BA-Hats.jpg';
import Footer from './Footer';

const RSVP = Styled.div`
background-color: #CFD3D6;
display: grid;
grid-template-columns: repeat(2, 1fr);

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  
@media screen and (max-width: 768px)  {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr)
  } 
`;

export class Rsvp extends Component {
  render() {
    return (
      <div>
        <RSVP>
          <img src={FormPhoto} alt='' />
          <div>
            <h2>Confirma tu asistencia</h2>
            <p>Ayúdanos a encontrarte en nuestra lista de invitados. </p>
            <p>No utilices signos de puntuación al registarte.</p>
            <Form />
          </div>
        </RSVP>
        <Footer />
      </div>
    );
  }
}

export default Rsvp;
