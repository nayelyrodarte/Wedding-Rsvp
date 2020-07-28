import React, { useState } from 'react';
import { rest } from '../functions';
import CheckItem from './CheckItem';
import Message from './Message';

const Checkbox = ({ guest, phone }) => {
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState('');

  const id = guest._id;
  const guestParty = guest.guest_party;

  // Save guests (key: name, value: selected/unselected)
  const guestSelection = {};

  const isGuestGoing = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;

    // Save or overwrite guests values
    guestList.forEach((guest) => {
      if (guest.props.name === name) {
        guestSelection[name] = isChecked;
      }
    });
  };

  // Checkboxes for each family member / partner of registered guest
  let guestList = guestParty.map((guest) => (
    <CheckItem name={guest} key={guest} onChange={isGuestGoing} />
  ));

  const sendRsvp = () => {
    // Update guest object from db
    guest.rsvpd = true;
    guest.phone = phone;
    guest.guest_party = [];

    // Save only selected guests from checkboxes
    for (let attendee in guestSelection) {
      if (guestSelection[attendee]) {
        guest.guest_party.push(attendee);
      } else if (!guestSelection[attendee]) {
        return;
      }

      setLoading(true);
      rest.modifyGuest(id, guest); // send to MongoDB
      setLoading(false);
      setRegister(true);
    }
  };

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      {loading && <Message msg={'Cargando'} />}
      {register ? (
        <section className='form__container guestlist final'>
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
