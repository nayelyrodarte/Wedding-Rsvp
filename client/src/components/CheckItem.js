import React, { Fragment } from 'react';

const onChange = () => {
  console.log('checkbox working');
};
const Checkbox = ({ name }) => {
  return (
    <Fragment>
      <input
        type='checkbox'
        checked={null}
        onChange={onChange}
        name={name}
        key={name}
      />
      <p>{name}</p>
    </Fragment>
  );
};

export default Checkbox;
