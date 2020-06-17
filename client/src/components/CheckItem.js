import React from 'react';
import Styled from 'styled-components';

const CheckboxContainer = Styled.div`
height: 2em;
display: grid;
margin: 0 1em;
grid-template-columns: 20% 60%;
align-items: baseline;
text-align: left;

label {
  margin: 0 1em;
}

`;

const CheckItem = ({ name, onChange, checked }) => {
  return (
    <CheckboxContainer>
      <label htmlFor={name}>
        <input
          type='checkbox'
          checked={null}
          onChange={onChange}
          name='name'
          key={name}
          value={name}
        />
      </label>
      <span>{name}</span>
    </CheckboxContainer>
  );
};

export default CheckItem;
