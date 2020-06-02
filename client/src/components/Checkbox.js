import React, { useState } from 'react';
import CheckItem from './CheckItem';

//TODO
// Add validation when succesfull / failed registration
// Arrange checkboxes styling

const Checkbox = ({ guest, phone }) => {
  const [register, setRegister] = useState(false);

  const registered = guest[0];

  // Guest's id from DB
  const id = registered._id;

  // Guest's family members / partner
  const guestParty = registered.guest_party;

  let attending = [];

  const addAttendingGuest = (e) => {
    attending.push(e.target.value);
  };

  const list = guestParty.map((guest) => (
    <CheckItem name={guest} key={guest} onChange={addAttendingGuest} />
  ));

  const sendRsvp = () => {
    // Updating guest
    guest.rsvpd = true;
    guest.phone = phone;
    guest.guest_party = attending;
    console.log(guest);

    setRegister(true);

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
  };

  return (
    <section>
      {register ? (
        <div>
          Tu registro ha quedado confirmado. ¡Muchas gracias por acompañarnos!
        </div>
      ) : (
        <div>
          <p>Selecciona los invitados que asistirán:</p>
          {list}
          <button onClick={sendRsvp}>Confirmar</button>
        </div>
      )}
    </section>
  );
};

export default Checkbox;
