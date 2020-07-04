import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  const modalRoot = document.getElementById('modal-root');
  const element = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => modalRoot.removeChild(element); // clean-up
  }, [element, modalRoot]);

  const modal = (
    <section className='modal'>
      <h2>Datos bancarios</h2>
      <div>
        <p>Brenda Judith </p>
        <p> Arias Quintana </p>
        <p>Banorte</p>
        <p>No. de tarjeta:</p> <br /> 4915 6664 7204 6550
        <br />
        <p />
        <br />
        <hr />
        <br />
        <p>
          Marcos Aaron <br /> Rivera Olivas{' '}
        </p>
        <p>BBVA</p>
        <p>
          No. de tarjeta: <br /> 4152313380613849{' '}
        </p>
      </div>
      <button>Cerrar</button>
    </section>
  );

  return ReactDOM.createPortal(modal, element);
};

export default Modal;
