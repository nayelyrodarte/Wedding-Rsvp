import React from 'react';
import Styled from 'styled-components';

const Label = Styled.label`
display: grid;
grid-template-columns: 1fr 1fr;
`;

const Checkbox = ({
  type = 'checkbox',
  name,
  checked = 'false',
  onChange,
  key,
}) => {
  // state = { checked: false };
  // handleCheckboxChange = (event) =>
  //   this.setState({ checked: event.target.checked });

  // render() {
  //   const companion = this.props.check.acc;
  //   let guest;

  //   for (let i = 0; i < companion.length; i++) {
  //     guest = companion[i];
  //   }

  //   console.log(companion);

  return (
    <Label>
      <input type='type' checked={checked} onChange={onChange} name={name} />
      <p>{name}</p>
    </Label>
  );
};

export default Checkbox;
