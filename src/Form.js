import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const RSVP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ededeb;

  input {
    width: 30%;
    text-align: center;
  }

  .toTop {
    background: none;
    color: black;
    text-decoration-line: underline;
  }

  .toTop:hover {
    color: gray
`;

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lasName: ''
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value.toUpperCase()
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <RSVP>
        <h2 style={{ marginBottom: '0' }}>Confirma tu asistencia</h2>
        <p>
          Ayúdanos a encontrarte en nuestra lista de invitados. No utilices
          números o signos de puntuación al registarte.
        </p>

        <input
          type='text'
          name='name'
          placeholder='Primer nombre'
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type='text'
          name='lastName'
          placeholder='Apellido paterno'
          value={this.state.lastName}
          onChange={this.changeHandler}
        />

        <button onClick={this.onSubmit}>Enviar</button>

        <button onClick={this.scrollToTop} className='toTop'>
          {' '}
          <i class='fa fa-angle-double-up' aria-hidden='true'></i> Volver al
          inicio{' '}
        </button>
      </RSVP>
    );
  }
}

export default Form;
