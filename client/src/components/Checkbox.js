import React from 'react';
import CheckItem from './CheckItem';
import Spinner from './Spinner';

const Checkbox = ({ guests, name, phone, loading }) => {
  const findGuest = guests.filter((guest) => guest.name === name);
  const id = findGuest.map((guest) => guest._id);
  const guestParty = findGuest.map((guest) => guest.acc);

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
    guest.rsvpd = true;
    //guest.phone = phone;
    //guest.acc = attending
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
