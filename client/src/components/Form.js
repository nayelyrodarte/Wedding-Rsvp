import React, { useState } from 'react';
import Message from './Message';
import { rest } from '../functions';

function Form({ updateNotification, updateRegisteredGuest, notification }) {
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
          return getRegisteredGuest(res);
        });
    } catch (error) {
      console.error('Error:', error);
      updateNotification(
        <Message msg={'Error en la base de datos'} type='error' />
      );
    }
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
<<<<<<< HEAD
      {notification}
      <form>
=======
      <form data-test='form-component'>
        {notification}
>>>>>>> master
        <label htmlFor='guest-name'>
          Primer nombre:
          <input
            type='text'
            name=''
            value={guestName}
            autoComplete='off'
            onChange={(e) => {
<<<<<<< HEAD
              //updateNotification('');
=======
>>>>>>> master
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
<<<<<<< HEAD
              //updateNotification('');
=======
>>>>>>> master
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
<<<<<<< HEAD
              //updateNotification('');
=======
>>>>>>> master
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
}

export default Form;
