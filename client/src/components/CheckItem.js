import React from 'react';
import Styled from 'styled-components';

const CheckboxContainer = Styled.div`
height: max-content;
display: grid;
grid-template-columns: 20% 80%;
height: 1.5em;
align-items: baseline;
text-align: left;
white-space: no-wrap;
gap: 0.5em;

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
