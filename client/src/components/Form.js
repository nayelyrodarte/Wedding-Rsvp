import React, { useState } from 'react';
import Message from './Message';
import { rest } from '../functions';

const Form = ({ updateNotification, updateRegisteredGuest, notification }) => {
  const [guestName, setGuestName] = useState('');
  const [guestLastName, setGuestLastName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  const abortController = new AbortController();

  const getDatabase = () => {
    try {
      updateNotification(<Message type='charging' />);
      rest
        .getGuests({ signal: abortController.signal })
        .then((res) => res.json())
        .then((res) => {
          updateNotification('');
          console.log(res);
          return getRegisteredGuest(res);
        });
    } catch (error) {
      console.error('Error:', error);
      updateNotification(
        <Message msg={'Error en la base de datos'} type='error' />
      );
    }
    return function cleanup() {
      abortController.abort();
    };
  };

  const getRegisteredGuest = (database) => {
    database.forEach((guest) => {
      if (guest.name === guestName + ' ' + guestLastName) {
        updateRegisteredGuest(guest);
      } else {
        setGuestName('');
        setGuestLastName('');
        setGuestPhone('');
        updateNotification(
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

  const enableSubmitButton =
    guestName.length && guestLastName.length && guestPhone.length === 10;

  return (
    <div>
      <form data-test='form-component'>
        {notification}
        <label htmlFor='guest-name'>
          Primer nombre:
          <input
            type='text'
            name=''
            value={guestName}
            autoComplete='off'
            onChange={(e) => {
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
              setGuestPhone(e.target.value);
            }}
            maxLength='10'
            required
          />
        </label>
        <button
          disabled={!enableSubmitButton}
          onClick={getDatabase}
          type='button'
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Form;
