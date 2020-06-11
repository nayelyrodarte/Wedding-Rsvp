import React, { useState } from 'react';
import CheckItem from './CheckItem';
import Styled from 'styled-components';

const CheckboxContainer = Styled.div`
  display: grid;
  grid-auto-rows: auto;
`;

//TODO
// Arrange checkboxes styling
// Check if there's a way to require at least one checkbox checked

const Checkbox = ({ guest, phone }) => {
  const [register, setRegister] = useState(false);

  console.log(guest);

  const id = guest._id;

  // Guest's family members / partner
  const guestParty = guest.guest_party;

  // Save attending guests
  let attending = [];

  const addAttendingGuest = (e) => {
    attending.push(e.target.value);
  };

  // Adding checkboxes for each family member / partner
  let list = guestParty.map((guest) => (
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
          <CheckboxContainer>{list}</CheckboxContainer>
          <button onClick={sendRsvp}>Confirmar</button>
        </div>
      )}
    </section>
  );
};

export default Checkbox;
