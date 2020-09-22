import React, { useState } from 'react';
import Message from './Message';
import { rest } from '../functions';

function Form({
  updateLoading,
  updateNotification,
  updateRegisteredGuest,
  notification,
}) {
  const [guestName, setGuestName] = useState('');
  const [guestLastName, setGuestLastName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  const getDatabase = () => {
    updateLoading(true);
    rest
      .getGuests()
      .then((res) => res.json())
      .then((res) => {
        getRegisteredGuest(res);
      })
      .catch((error) => {
        console.error('Error:', error);
        updateLoading(false);
        updateNotification(
          <Message msg={'Error en la base de datos'} type='error' />
        );
      });
  };

  const getRegisteredGuest = (database) => {
    database.forEach((guest) => {
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
    guestName.length && guestLastName.length && guestPhone.length === 1;

  const enableInput = true;

  return (
    <div>
      {notification}
      <form data-test='form-component'>
        <label htmlFor='guest-name'>
          Primer nombre:
          <input
            type='text'
            name={guestName}
            value={guestName}
            autoComplete='off'
            onChange={(e) => {
              updateNotification('');
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
              updateNotification('');
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
              updateNotification('');
              setGuestPhone(e.target.value);
            }}
            maxLength='10'
            disabled={!enableInput}
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
