import React, { Component } from 'react';
import Form from './Form';
import FormPhoto from '../img/BA-Hats.jpg';

export class Rsvp extends Component {
  render() {
    return (
      <div>
        <section className='formContainer'>
          <img src={FormPhoto} alt='' />
          <div>
            <h2>Confirma tu asistencia</h2>
            <p>Ayúdanos a encontrarte en nuestra lista de invitados. </p>
            <p>No utilices signos de puntuación al registarte.</p>
            <Form />
          </div>
        </section>
        <section className='footer'>
          <p> Diseño web: Nayely Rodarte | Fotografía: Jonathan Guajardo</p>{' '}
          <p>© Todos los derechos reservados. </p>
        </section>
      </div>
    );
  }
}

export default Rsvp;