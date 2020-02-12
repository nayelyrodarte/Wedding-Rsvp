import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Rsvp = styled.form`
  border: 2px;
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
      <Rsvp>
        {'Primer nombre:'}
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.changeHandler}
        />
        {'Primer apellido'}
        <input
          type='text'
          name='lastName'
          value={this.state.lastName}
          onChange={this.changeHandler}
        />
        <Button onClick={this.onSubmit}>Confirma tu asistencia</Button>
      </Rsvp>
    );
  }
}

export default Form;
