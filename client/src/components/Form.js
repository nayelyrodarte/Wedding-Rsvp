import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import db from './db.json';
import Styled from 'styled-components';
import FormPhoto from '../img/BA-Bus.jpg';
import Message from './Message';

//TODO
// complete DB
// Find loader gif
// Testing

const Form = () => {
  const [error, setError] = useState('');
  const [guests, setGuests] = useState([]);
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guest, setGuest] = useState('');

  useEffect(() => {
    setGuests(db);
  }, []);

  //Get all guests from DB
  // useEffect(() => {
  //setLoading(true)
  //   fetch('http://localhost:8000/api/guests')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('Success:', data);
  //       setGuests(data);
  //setLoading(false)
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //setError("Error en la base de datos")
  //     });
  // }, []);};

  // Get registered guest
  const getGuest = () => {
    guests.forEach((guest) => {
      setLoading(true);
      if (guest.name === name + ' ' + lastName) {
        setGuest(guest);
        setLoading(false);
      } else {
        setLoading(false);
        setError(
          <Message
            msg={
              'No se encontró registro. Comunícate al 123 124 32 23 para recibir asistencia.'
            }
          />
        );
        setTimeout(function () {
          setError('');
        }, 8000);
      }
    });
  };

  // Disable / enable submit button
  const enabled = name.length && lastName.length && phone.length === 10;

  return (
    <section>
      {loading && <Message msg={'Cargando'} />}
      <FormContainer>
        {guest ? (
          <div>
            {' '}
            <h2>Confirma tu asistencia</h2>
            <Checkbox guest={guest} phone={phone} />
          </div>
        ) : (
          <div>
            <div>
              <h2>Confirma tu asistencia</h2>
              {error}
              <form>
                <label htmlFor='name'>
                  Primer nombre:
                  <input
                    type='text'
                    name={name}
                    value={name}
                    autoComplete='off'
                    onChange={(e) =>
                      setName(e.target.value.toUpperCase().trim())
                    }
                    required
                  />
                </label>
                <label htmlFor='lastName'>
                  Apellido paterno:
                  <input
                    type='text'
                    name={lastName}
                    value={lastName}
                    autoComplete='off'
                    onChange={(e) =>
                      setLastName(e.target.value.toUpperCase().trim())
                    }
                    required
                  />
                </label>
                <label htmlFor='phone'>
                  Teléfono celular (10 dígitos):
                  <input
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength='10'
                    required
                  />
                </label>
                <div>
                  <button
                    className='searchButton'
                    disabled={!enabled}
                    onClick={getGuest}
                    type='button'
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </FormContainer>
      >
    </section>
  );
};

const FormContainer = Styled.section`
  min-height: 50vh;
  background-image: url(${FormPhoto});
  background-size: 130%;
  background-position: bottom left;
  background-color: #cfd3d6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: top;

  form {
    padding: 0.5em;
  }

  label {
  display: block;
  padding: .5em;
  }

  button {
    margin: 1em;
    width: 10em;
  }

  @media (max-width: 660px) {
    min-height: 95vh;
    grid-template-columns: 1fr;
    background-size: cover;
  background-position: bottom center;
  }

`;

export default Form;
