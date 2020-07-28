import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  const modalRoot = document.getElementById('modal-root');
  const element = document.createElement('div');
  const modalEl = useRef('null');

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    }; // clean-up
  }, [element, modalRoot]);

  const closeModal = () => {
    modalEl.current.style.display = 'none';
  };

  const modal = (
    <section ref={modalEl} className='modal'>
      <h2>Datos bancarios</h2>
      <div>
        <p>
          Brenda Judith
          <br />
          Arias Quintana
          <br />
          Banorte
          <br />
          No de tarjeta:
          <br />
          4915 6664 7204 6550
        </p>
        <hr />
        <p>
          Marcos Aaron
          <br />
          Rivera Olivas
          <br />
          BBVA
          <br />
          No de tarjeta:
          <br />
          4152 3133 8061 3849
        </p>
      </div>
      <button onClick={closeModal}>Cerrar</button>
    </section>
  );

  return ReactDOM.createPortal(modal, element);
};

export default Modal;
