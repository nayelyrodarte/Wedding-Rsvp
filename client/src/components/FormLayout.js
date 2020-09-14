import React from 'react';
import Message from './Message';

const FormLayout = ({ children, error }) => {
  return (
    <section className='form-layout-component'>
      <h2>Confirma tu asistencia</h2>
      {error && <Message msg={error} />}
      {children}
    </section>
  );
};
export default FormLayout;
