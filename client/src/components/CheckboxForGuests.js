import React, { useState } from 'react';
import { rest } from '../functions';
import Checkbox from './Checkbox';
import Message from './Message';

const CheckboxForGuests = ({ registeredGuest, guestPhone }) => {
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState('');

  const guestId = registeredGuest._id;
  const guestParty = registeredGuest.guest_party;

  const saveAttendingGuests = {};

  const isGuestPartyGoing = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;

    addGuestPartyCheckboxes.forEach((guest) => {
      if (guest.props.name === name) {
        saveAttendingGuests[name] = isChecked;
      }
    });
  };

  let addGuestPartyCheckboxes = guestParty.map((guest) => (
    <Checkbox name={guest} key={guest} onChange={isGuestPartyGoing} />
  ));

  const sendRsvpToDatabase = () => {
    updateRegisteredGuest();

    setLoading(true);
    rest.modifyGuest(guestId, registeredGuest); // send to MongoDB
    setLoading(false);
    setRegister(true);
    console.log('guest sent');
  };

  const updateRegisteredGuest = () => {
    registeredGuest.rsvpd = true;
    registeredGuest.phone = guestPhone;
    registeredGuest.guest_party = [];

    for (let attendee in saveAttendingGuests) {
      if (saveAttendingGuests[attendee]) {
        registeredGuest.guest_party.push(attendee);
      } else if (!saveAttendingGuests[attendee]) {
        return;
      }
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
            <div>{addGuestPartyCheckboxes}</div>
            <button onClick={sendRsvpToDatabase}>Confirmar</button>
          </div>
        </section>
      )}
    </div>
  );
};
//};

export default CheckboxForGuests;
