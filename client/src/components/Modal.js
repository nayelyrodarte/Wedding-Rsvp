import React from 'react';

//TODO
// Fixed modal styling for screen

const Modal = () => {
  return (
    <section className='modal'>
      <h2>Datos bancarios</h2>
      <div>
        <p>
          Brenda Judith <br /> Arias Quintana{' '}
        </p>{' '}
        <p>Banorte</p>
        No. de tarjeta: <br /> 4915 6664 7204 6550
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
      <button onClick={(e) => (e.target.parentNode.style.display = 'none')}>
        Cerrar
      </button>
    </section>
  );
};

export default Modal;
