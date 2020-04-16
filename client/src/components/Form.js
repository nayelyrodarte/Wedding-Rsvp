import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Checkbox from './Checkbox';

const Input = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 50%;
    text-align: center;
  }

  
`;

const Form = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [guests, setGuests] = useState();
  const [loading, setLoading] = useState(false);

  // TODO: figuring out which dependency is useful for the fetch
  // a button can update a hook?
  // try passing data from app.js

  async function requestGuests() {
    setLoading(true);

    const req = await fetch('http://localhost:8000/api/guests');
    const list = await req.json();

    setGuests(list || []);
    setLoading(false);

    console.log([guests]);
  }

  // track checkbox changes
  const onChange = (e) => {};

  useEffect(() => {
    requestGuests();
  }, []);

  return (
    <Input>
      <input
        type='text'
        name={name}
        placeholder='Primer nombre'
        value={name}
        onChange={(e) => setName(e.target.value.toUpperCase())}
      />
      <input
        type='text'
        name={lastName}
        placeholder='Apellido paterno'
        value={lastName}
        onChange={(e) => setLastName(e.target.value.toUpperCase())}
      />
      <input
        type='text'
        name='phone'
        placeholder='Teléfono celular'
        value={phone}
        onChange={(e) => setPhone(e.target.value.toUpperCase())}
        maxLength='10'
      />

      <button>Buscar</button>

      <div>
        {'Selecciona los invitados que asistirán:'}
        <div></div>
        <button>Enviar</button>
      </div>

      <button>
        {' '}
        <i className='fa fa-angle-double-up' aria-hidden='true'>
          Volver al inicio{' '}
        </i>
      </button>
    </Input>
  );
};

export default Form;
