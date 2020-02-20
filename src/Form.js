import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: inherit;
  color: white;
  background: black;
  font-family: inherit;
  margin: 1em;
  padding: 0.25em 2em;
  border: none;
  border-radius: 12px;
  outline: none;
}
`;

const RSVP = styled.form`
  display: grid;
  align-items: center;
  background-color: transparent;
  padding: 0.5em 0.2em;
  border-radius: 5px;
  font-size: 1.2em;
`;

const Input = styled.input`
  font-size: 1.1em;
  font-family: inherit;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  padding: 0.25em 1em;
  margin: 1em;
  outline: none;
`;

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      guests: ''
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

  render() {
    return (
      <RSVP>
        <h3>Confirma tu asistencia</h3>
        {'Ayúdanos a encontrarte en nuestra lista de invitados.'}
        {' No utilices números o signos de puntuación al registarte.'}

        <Input
          type='text'
          name='name'
          placeholder='Primer nombre'
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <Input
          type='text'
          name='lastName'
          placeholder='Primer apellido'
          value={this.state.lastName}
          onChange={this.changeHandler}
        />
        <Button onClick={this.onSubmit}>Enviar</Button>
      </RSVP>
    );
  }
}

export default Form;
