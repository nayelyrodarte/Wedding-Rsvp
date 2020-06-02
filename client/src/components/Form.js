import React, { useState, useEffect, Fragment } from 'react';
import Checkbox from './Checkbox';

//TODO
// complete DB

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);

  //Get all guests from DB
  useEffect(() => {
    fetch('http://localhost:8000/api/guests')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setGuests(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const getGuest = () => {
    setLoading(true);
  };

  // Get registered guest
  const guest = guests.filter((guest) => guest.name === name);

  // Disable / enable submit button
  const enabled =
    guests.length > 0 &&
    name.length > 0 &&
    phone.length === 10 &&
    guest.length === 1;

  return (
    <section>
      {loading ? (
        <Fragment>
          <Checkbox guest={guest} phone={phone} />
        </Fragment>
      ) : (
        <Fragment>
          <label htmlFor='name'>
            Primer nombre y apellido paterno:
            <input
              type='text'
              name={name}
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
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

          <button disabled={!enabled} className='findButton' onClick={getGuest}>
            Buscar
          </button>
        </Fragment>
      )}

      <button>
        <i className='fa fa-angle-double-up' aria-hidden='true'>
          Volver al inicio{' '}
        </i>
      </button>
    </section>
  );
};

export default Form;
