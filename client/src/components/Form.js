import React from 'react';
import Styled from 'styled-components';
import { animateScroll as Scroll } from 'react-scroll';

const RSVP = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CFD3D6;

  input {
    width: 30%;
    text-align: center;
  }

  .top {
    background: none;w2
    color: black;
    text-decoration-line: underline;
  }
`;

class Form extends React.Component {
  constructor() {
    super();
    this.state = '';
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value.toUpperCase() });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getGuests({
      name: this.state.name,
      lastName: this.state.lastName
    });
  };

  scrollToTop = () => {
    Scroll.scrollToTop();
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

        <button onClick={this.scrollToTop} className='top'>
          {' '}
          <i className='fa fa-angle-double-up' aria-hidden='true'></i> Volver al
          inicio{' '}
        </button>
      </RSVP>
    );
  }
}

export default Form;
