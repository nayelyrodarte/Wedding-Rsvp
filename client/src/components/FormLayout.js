import React from 'react';
import Message from './Message';

const FormLayout = ({ children, error }) => {
  return (
    <section className='form__container'>
      {error && <Message msg={error} />}
      {children}
    </section>
  );
};
export default FormLayout;
