import React, { useState } from 'react';
import { rest } from '../functions';
import Checkbox from './Checkbox';
import Message from './Message';

const CheckboxForGuests = ({
  registeredGuest,
  guestPhone,
  updateNotification,
}) => {
  const [confirmedGuest, setConfirmedGuest] = useState('');

  const guestName = registeredGuest.name;
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
    <Checkbox name={guestName} key={guestName} onChange={isGuestPartyGoing} />
  ));

  const sendRsvpToDatabase = () => {
    updateRegisteredGuest();

    updateNotification(<Message type='charging' />);
    rest.modifyGuest(guestId, registeredGuest); // send to MongoDB
    updateNotification('');
    setConfirmedGuest(true);
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
    <div className='rsvp'>
      {confirmedGuest ? (
        <div>
          <Message
            msg={
              <p>
                Tu registro ha quedado confirmado. <br /> ¡Muchas gracias por
                acompañarnos!
              </p>
            }
          />
        </div>
      ) : (
        <div>
          <p>Selecciona los invitados que asistirán:</p>
          <div>{addGuestPartyCheckboxes}</div>
          <button onClick={sendRsvpToDatabase}>Confirmar</button>
        </div>
      )}
      <button onClick={scrollTop}>Volver al inicio</button>
    </div>
  );
};

export default CheckboxForGuests;
