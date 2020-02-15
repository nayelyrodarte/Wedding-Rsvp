import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  justify-self: center;
`;

const RSVP = styled.form`
  display: inline-block;
  background-color: lightgray;
  text-align: center;
  padding: 0.5em 0.2em;
  border-radius: 5px;
`;

const Input = styled.input`
  display: grid;
  padding: 0.25em 1em;
  width: 10em;
  justify-self: center;
  margin: 1em;
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
        {'Primer nombre:'}
        <Input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.changeHandler}
        />
        {'Primer apellido'}
        <Input
          type='text'
          name='lastName'
          value={this.state.lastName}
          onChange={this.changeHandler}
        />
        <Button onClick={this.onSubmit}>Enviar</Button>
      </RSVP>
    );
  }
}

export default Form;
