import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import Message from './Message';
import { rest } from '../functions';

const Form = () => {
  const [error, setError] = useState('');
  const [guestsDatabase, setGuestsDatabase] = useState([]);
  const [guestLastName, setGuestLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [registeredGuest, setRegisteredGuest] = useState('');

  useEffect(() => {
    setLoading(true);
    rest
      .getGuests()
      .then((res) => res.json())
      .then((res) => {
        setGuestsDatabase(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        setError(<Message msg={`Error en la base de datos`} />);
      });
  }, []);

  const getRegisteredGuest = () => {
    guestsDatabase.forEach((guest) => {
      setLoading(true);
      if (guest.name === guestName + ' ' + guestLastName) {
        setRegisteredGuest(guest);
        setLoading(false);
        setError('');
      } else {
        setLoading(false);
        setError(<Message msg={unregisteredGuestMessage} />);
      }
    });
  };

  const unregisteredGuestMessage = (
    <p>
      No se encontró registro. <br /> Comunícate al 000 000 00 00 para recibir
      asistencia.
    </p>
  );

  const enableSubmitButton =
    guestName.length && guestLastName.length && guestPhone.length === 10;

  return (
    <section className='form__container'>
      {loading && <Message msg={'Cargando'} />}
      {registeredGuest ? (
        <div>
          <Checkbox registeredGuest={registeredGuest} guestPhone={guestPhone} />
        </div>
      ) : (
        <div>
          {error}
          <h2>Confirma tu asistencia</h2>
          <form data-test='form-component'>
            <label htmlFor='guest-name'>
              Primer nombre:
              <input
                type='text'
                name={guestName}
                value={guestName}
                autoComplete='off'
                onChange={(e) => {
                  setError('');
                  setGuestName(e.target.value.toUpperCase().trim());
                }}
                required
              />
            </label>
            <label htmlFor='guest-lastName'>
              Apellido paterno:
              <input
                type='text'
                name={guestLastName}
                value={guestLastName}
                autoComplete='off'
                onChange={(e) => {
                  setError('');
                  setGuestLastName(e.target.value.toUpperCase().trim());
                }}
                required
              />
            </label>
            <label htmlFor='phone'>
              Teléfono celular (10 dígitos):
              <input
                type='text'
                name={guestPhone}
                value={guestPhone}
                onChange={(e) => {
                  setError('');
                  setGuestPhone(e.target.value);
                }}
                maxLength='10'
                required
              />
            </label>
            <button
              disabled={!enableSubmitButton}
              onClick={getRegisteredGuest}
              type='button'
            >
              Buscar
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Form;
