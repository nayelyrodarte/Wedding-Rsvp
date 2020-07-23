import React, { useState } from 'react';
import { modifyGuest } from '../methods';
import CheckItem from './CheckItem';
import Message from './Message';

//TODO
// issue: Phone isn't returning from form
// disable button

const Checkbox = ({ guest, phone }) => {
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState('');

  const id = guest._id;
  const guestParty = guest.guest_party;

  // Save selected/unselected guests
  const attending = {};

  const addAttendingGuest = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;

    // Save or overwrite guests status when checked/unchecked
    guestList.forEach((guest) => {
      if (guest.props.name === name) {
        attending[name] = isChecked;
      }
    });
  };

  // Create checkboxes for each family member or partner
  let guestList = guestParty.map((guest) => (
    <CheckItem name={guest} key={guest} onChange={addAttendingGuest} />
  ));

  const sendRsvp = () => {
    // Update guest
    guest.rsvpd = true;
    guest.phone = phone;
    guest.guest_party = [];

    // Save guests with selected (going) status.
    for (let attendee in attending) {
      if (attending[attendee]) {
        guest.guest_party.push(attendee);
      } else if (!attending[attendee]) {
        return;
      }

      console.log(guest);
      setRegister(true);

      // setLoading(true);
      // // modifyGuest(id, guest); // send to MongoDB
      // setLoading(false);
      // setRegister(true);
      // setError('');
    }
  };

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      {loading && <Message msg={'Cargando'} />}
      {register ? (
        <section className='form__container guestlist'>
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
        <section className='form__container guestlist'>
          <div>
            {' '}
            <p>Selecciona los invitados que asistirán:</p>
            <div>{guestList}</div>
            <button onClick={sendRsvp}>Confirmar</button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Checkbox;
