import React, { useState } from 'react';
import CheckItem from './CheckItem';
import Message from './Message';
import Styled from 'styled-components';

const Section = Styled.section`
display: grid;
max-height: 80%;
justify-content: strech;

span {
  height: 80%
}
`;

//TODO
// Arrange checkboxes styling
// Disable button w/no boxes checked
// Add link to main component to return button (maybe scroll?)

const Checkbox = ({ guest, phone }) => {
  const [register, setRegister] = useState(false);
  const [error, setError] = useState('');
  const [checkboxes, setCheckboxes] = useState(null);

  console.log(guest);

  const id = guest._id;

  // Guest's family members / partner
  const guestParty = guest.guest_party;

  // Save attending guests (selected from checkboxes)
  let attending = new Map();

  const addAttendingGuest = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;

    list.map((item) => {
      if (item.props.name === name) {
        attending.set(name, isChecked);
      }
    });
  };

  console.log(attending);

  // Checkboxes for each family member / partner

  let list = guestParty.map((guest) => (
    <CheckItem name={guest} key={guest} onChange={addAttendingGuest} />
  ));

  const sendRsvp = () => {
    console.log(attending);

    // Verify - at least one checkbox checked
    // if (attending.length) {
    //   // Update guest
    //   guest.rsvpd = true;
    //   guest.phone = phone;
    //   guest.guest_party = attending;
    //   setRegister(true);
    //   setError('');
    // } else {
    //   setRegister(false);
    //   setError(<Message msg={'Favor de elegir al menos un invitado.'} />);
    //   setTimeout(function () {
    //     setError('');
    //   }, 8000);
    // }
    // console.log(guest);

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
    <Section>
      {error}
      {register ? (
        <div>
          <p> Tu registro ha quedado confirmado.</p>
          <p> ¡Muchas gracias por acompañarnos! </p>
          <button>Volver al inicio</button>
        </div>
      ) : (
        <div>
          <p>Selecciona los invitados que asistirán:</p>
          <span>{list}</span>
          <button onClick={sendRsvp}>Confirmar</button>
        </div>
      )}
    </Section>
  );
};

export default Checkbox;
