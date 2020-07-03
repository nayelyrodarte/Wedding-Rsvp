import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import db from './db.json';
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
              <p>
                No se encontró registro.
                <br />
                Comunícate al 000 000 00 00 para recibir asistencia.
              </p>
            }
          />
        );
      }
    });
  };

  // Disable / enable submit button
  const enabled = name.length && lastName.length && phone.length === 10;

  return (
    <section>
      {loading && <Message msg={'Cargando'} />}
      {guest ? (
        <div>
          {' '}
          <Checkbox guest={guest} phone={phone} />
        </div>
      ) : (
        <section className='form__container'>
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
                onChange={(e) => setName(e.target.value.toUpperCase().trim())}
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
            <button
              className='searchButton'
              disabled={!enabled}
              onClick={getGuest}
              type='button'
            >
              Buscar
            </button>
          </form>
        </section>
      )}
    </section>
  );
};

export default Form;
