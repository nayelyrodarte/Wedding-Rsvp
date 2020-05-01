import React, { useState, useEffect, Fragment } from 'react';
import Styled from 'styled-components';
import Checkbox from './Checkbox';

//TODO
//add form labels
//fix checkboxes grid
// complete DB
// add put route @ server

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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/guests', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setGuests(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const getGuest = () => {
    if (guests !== []) {
      setLoading(true);
    }
  };

  return (
    <Input>
      <Fragment>
        <input
          type='text'
          name={name}
          placeholder='Primer nombre y apellido paterno'
          value={name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
        />
        <input
          type='text'
          name='phone'
          placeholder='Teléfono celular'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength='10'
        />
        <button onClick={getGuest}>Buscar</button>
      </Fragment>

      {loading ? (
        <Checkbox guests={guests} loading={loading} name={name} />
      ) : (
        <Fragment>
          <p>No se encontró registro</p>
        </Fragment>
      )}

      <button>
        <i className='fa fa-angle-double-up' aria-hidden='true'>
          Volver al inicio{' '}
        </i>
      </button>
    </Input>
  );
};

export default Form;
