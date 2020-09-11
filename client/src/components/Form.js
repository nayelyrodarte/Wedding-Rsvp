import React, { useState } from 'react';

function Form({
  updateLoading,
  updateError,
  guestsDatabase,
  updateRegisteredGuest,
  error,
}) {
  const [guestName, setGuestName] = useState('');
  const [guestLastName, setGuestLastName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  const getRegisteredGuest = () => {
    guestsDatabase.forEach((guest) => {
      updateLoading(true);
      if (guest.name === guestName + ' ' + guestLastName) {
        updateRegisteredGuest(guest);
        updateLoading(false);
        updateError('');
      } else {
        updateLoading(false);
        updateError(
          <p>
            {' '}
            No se encontró registro. <br />
            Comunícate al 000 000 00 00 para recibir asistencia.
          </p>
        );
      }
    });
  };

  const enableSubmitButton =
    guestName.length && guestLastName.length && guestPhone.length === 1;

  return (
    <div>
      <h2>Confirma tu asistencia</h2>
      {error}
      <form data-test='form-component'>
        <label htmlFor='guest-name'>
          Primer nombre:
          <input
            type='text'
            name={guestName}
            value={guestName}
            autoComplete='off'
            onChange={(e) => {
              updateError('');
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
              updateError('');
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
              updateError('');
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
  );
}

export default Form;
