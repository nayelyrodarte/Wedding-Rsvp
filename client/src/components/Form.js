import React, { useState, useEffect } from 'react';
import Message from './Message';
import { rest } from '../functions';

function Form({
  updateLoading,
  updateNotification,
  updateRegisteredGuest,
  notification,
}) {
  const [guestsDatabase, setGuestsDatabase] = useState([]);
  const [guestName, setGuestName] = useState('');
  const [guestLastName, setGuestLastName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  useEffect(() => {
    //updateLoading(true);
    rest
      .getGuests()
      .then((res) => res.json())
      .then((res) => {
        setGuestsDatabase(res);
        updateLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        updateLoading(false);
        setNotification(
          <Message msg={'Error en la base de datos'} type='error' />
        );
      });
  }, []);

  const getRegisteredGuest = () => {
    guestsDatabase.forEach((guest) => {
      updateLoading(true);
      if (guest.name === guestName + ' ' + guestLastName) {
        updateRegisteredGuest(guest);
        updateLoading(false);
      } else {
        updateLoading(false);
        updateNotification(
          <Message
            msg={
              <p>
                No se encontró registro.
                <br />
                Comunícate al 000 000 00 00 para recibir asistencia.'
              </p>
            }
          />
        );
      }
    });
  };

  const enableSubmitButton =
    guestName.length && guestLastName.length && guestPhone.length === 10;

  return (
    <div>
      {notification}
      <form>
        <label htmlFor='guest-name'>
          Primer nombre:
          <input
            type='text'
            name=''
            value={guestName}
            autoComplete='off'
            onChange={(e) => {
              updateNotification('');
              setGuestName(e.target.value.toUpperCase().trim());
            }}
            disabled={!guestsDatabase.length}
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
              updateNotification('');
              setGuestLastName(e.target.value.toUpperCase().trim());
            }}
            disabled={!guestsDatabase.length}
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
              updateNotification('');
              setGuestPhone(e.target.value);
            }}
            maxLength='10'
            disabled={!guestsDatabase.length}
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
  );
}

export default Form;
