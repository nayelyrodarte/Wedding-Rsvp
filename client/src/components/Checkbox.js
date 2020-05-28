import React from 'react';
import CheckItem from './CheckItem';
import Spinner from './Spinner';

const Checkbox = ({ guests, name, phone, loading }) => {
  // Get registered guest
  const findGuest = guests.filter((guest) => guest.name === name);

  // Guest's id from DB
  const id = findGuest.map((guest) => guest._id);

  // Guest's family members / partner
  const guestParty = findGuest.map((guest) => guest.guest_party);

  //   if (loading) {
  //     return <Spinner />;
  //   }

  //;

  let attending = [];
  let guest = findGuest[0];
  console.log(guest);

  const guestAttend = (e) => {
    attending.push(e.target.value);
  };

  let list = guestParty[0].map((guest) => (
    <CheckItem name={guest} key={guest} onChange={guestAttend} />
  ));

  const sendRsvp = () => {
    // Updating guest to send to DB
    guest.rsvpd = true;
    guest.phone = phone;
    guest.guest_party = attending;
    console.log(guest);

    const put = {
      method: 'put',
      body: JSON.stringify(guest),
      headers: {
        'Content-type': 'application/json',
      },
    };

    fetch(`http://localhost:8000/api/guests/${id}`, put)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // fetch('http://localhost:8000/api/guests')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <div>
      <p>Selecciona los invitados que asistirán:</p>
      {list}

      <button onClick={sendRsvp}>Confirmar</button>
    </div>
  );
};

export default Checkbox;
