import React, { useState, useEffect, Fragment } from 'react';
import Checkbox from './Checkbox';
import db from './db.json';
import Styled from 'styled-components';
import FormPhoto from '../img/BA-Bus.jpg';

//TODO
// complete DB
// Find loader gif
// Testing
// UI design improvement

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
    const guest = guests.forEach((guest) => {
      setLoading(true);
      if (guest.name === name + ' ' + lastName) {
        setGuest(guest);
        setLoading(false);
      } else {
        setLoading(false);
        setError(
          <Message>
            <p>No se encontró registro.</p>
            <p>
              Favor de comunicarse al 123 124 32 23 para recibir asistencia.
            </p>
          </Message>
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
      {loading && <div>Cargando</div>}

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
              <div className='form'>
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
                  >
                    Buscar
                  </button>
                  <button>Volver al inicio</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </FormContainer>
    </section>
  );
};

const FormContainer = Styled.section`
  height: 50vh;
  background-image: url(${FormPhoto});
  background-size: 130%;
  background-position: bottom left;
  background-color: #cfd3d6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: top;

  .form {
    padding: 2em;
  }

  label {
  display: block;
  padding: .5em;
  }

  img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  }

  button {
    margin: 1.5em 1em;
    width: 10em;
  }

  .searchButton:disabled {
  background-color: #cccccc;
  color: #5e5d5d;
  box-shadow: none;
    }

  @media (max-width: 768px) {
    height: 50vh;
    grid-template-columns: 1fr;
    background-size: cover;
  background-position: bottom center;

    img {
      grid-column: 1;
      grid-row: 1/2;
    }

    h2 {
    width: auto;
    padding: 0;
  }
    
  }

`;

const Message = Styled.div`
  border: 1px solid #66293C;
  background-color: rgba(160, 64, 95, 0.6);
  color: white;
  margin-top: 0.5em;
`;

export default Form;
