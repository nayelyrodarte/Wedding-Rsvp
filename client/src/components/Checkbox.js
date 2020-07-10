import React, { useState } from 'react';
import CheckItem from './CheckItem';
import Message from './Message';

//TODO
// Add logic to a different file
// Add loader when sending data (guest) to MONGO

const Checkbox = ({ guest, phone }) => {
  const [register, setRegister] = useState(false);
  const [error, setError] = useState('');

  const id = guest._id;

  // Guest's family members / partner
  const guestParty = guest.guest_party;

  // Save selected/unselected guests
  const attending = {};

  const addAttendingGuest = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;

    // Save or overwrite guests w/their  value
    // selected (true) / unselected (false)
    guestList.forEach((guest) => {
      if (guest.props.name === name) {
        attending[name] = isChecked;
      }
    });

    console.log(attending);
  };

  // Create checkboxes for each family member / partner
  let guestList = guestParty.map((guest) => (
    <CheckItem name={guest} key={guest} onChange={addAttendingGuest} />
  ));

  const sendRsvp = () => {
    // Save only guests with selected (true) value.
    const att = [];

    for (let guest in attending) {
      if (attending[guest]) {
        att.push(guest);
      }
    }

    updateGuest(att);
  };

  function updateGuest(att) {
    if (att.length) {
      guest.rsvpd = true;
      guest.phone = phone;
      guest.guest_party = att;
      setRegister(true);
      console.log(guest);
    } else {
      setError(<Message msg={'Selecciona por lo menos a un invitado.'} />);
    }

    // Update guest
    // Sending updated guest to DB
    // const put = {
    //   method: 'put',
    //   body: JSON.stringify(guest),
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // };
    // fetch(`http://localhost:8000/api/guests/${id}`, put)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      {register ? (
        <section className='form__container'>
          <div>
            <p>
              {' '}
              Tu registro ha quedado confirmado.
              <br />
              ¡Muchas gracias por acompañarnos!{' '}
            </p>
          </div>
          <button onClick={scrollTop}>Volver al inicio</button>
        </section>
      ) : (
        <section className='form__container'>
          <div>
            {' '}
            <p>Selecciona los invitados que asistirán:</p>
            {error}
            <div>{guestList}</div>
            <button onClick={sendRsvp}>Confirmar</button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Checkbox;
