import React from 'react';
import Styled from 'styled-components';
import closeIcon from '../img/close_icon.svg';

const ModalStyling = Styled.div`
display: none;
padding: 2em 1em;
position: fixed;
max-width: 45vw;
max-height: fit-content;
left: 10%;
top: 30%;
height: 50vh;
background: white;
border-radius: 20px;
text-align: right;
z-index: 2;
box-shadow: 37px 10px 200px 81px rgba(0,0,0,0.76);

button {
  display: block;
  margin: auto;
  margin-top: 1em;
}

@media (max-width: 660px) {
  min-width: 70vw;
  min-height: 50vh;
  left: 15%;

  hr {
  position: absolute;
  width: 70%;
  right: 1em;
}


}



`;

const Modal = () => {
  return (
    <ModalStyling>
      <h2 className='modal_title'>Datos bancarios</h2>
      <div>
        <p>Brenda Judith Arias Quintana</p> <p>Banorte</p>{' '}
        <p>No. de tarjeta:</p> <p>4915 6664 7204 6550</p>
        <br />
        <hr />
        <br />
        <p>Marcos Aaron Rivera Olivas</p>
        <p>BBVA</p> <p>No. de tarjeta: 4152313380613849</p>
      </div>
      <button onClick={(e) => (e.target.parentNode.style.display = 'none')}>
        Cerrar
      </button>
    </ModalStyling>
  );
};

export default Modal;
