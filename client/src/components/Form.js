import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import Message from './Message';
import { rest } from '../functions';

const Form = () => {
  const [error, setError] = useState('');
  const [guests, setGuests] = useState([]);
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guest, setGuest] = useState('');

  //Get all guests from DB
  useEffect(() => {
    setLoading(true);
    rest
      .getGuests()
      .then((res) => res.json())
      .then((res) => {
        setGuests(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(<Message msg='Error en la base de datos' />);
      });
  }, []);

  // Get registered guest @ form
  const registerGuest = () => {
    console.log(guests);
    guests.forEach((guest) => {
      setLoading(true);
      if (guest.name === name + ' ' + lastName) {
        setGuest(guest);
        setLoading(false);
        setError('');
      } else {
        setLoading(false);
        setError(<Message msg={unregistered} />);
      }
    });
  };

  // Disable / enable submit button
  const enabled = name.length && lastName.length && phone.length === 10;

  const unregistered = (
    <p>
      No se encontró registro. <br /> Comunícate al 000 000 00 00 para recibir
      asistencia.
    </p>
  );

  return (
    <section className='form__container'>
      {loading && <Message msg={'Cargando'} />}
      {guest ? (
        <div>
          <Checkbox guest={guest} phone={phone} />
        </div>
      ) : (
        <div>
          {error}
          <h2>Confirma tu asistencia</h2>
          <form>
            <label htmlFor='name'>
              Primer nombre:
              <input
                type='text'
                name={name}
                value={name}
                autoComplete='off'
                onChange={(e) => {
                  setError('');
                  setName(e.target.value.toUpperCase().trim());
                }}
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
                onChange={(e) => {
                  setError('');
                  setLastName(e.target.value.toUpperCase().trim());
                }}
                required
              />
            </label>
            <label htmlFor='phone'>
              Teléfono celular (10 dígitos):
              <input
                type='text'
                name='phone'
                value={phone}
                onChange={(e) => {
                  setError('');
                  setPhone(e.target.value);
                }}
                maxLength='10'
                required
              />
            </label>
            <button disabled={!enabled} onClick={registerGuest} type='button'>
              Buscar
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Form;
