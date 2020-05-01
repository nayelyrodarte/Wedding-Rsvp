import React from 'react';
import Styled from 'styled-components';

const Layout = Styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: center;
    width: 12em;
  }
`;

function Gifts() {
  return (
    <Layout>
      <h2> ¿Quieres hacernos un regalo? </h2>{' '}
      <button> Mesa de regalos Liverpool </button>
      <button> Amazon </button> <h3>Datos bancarios</h3>
      <p>Brenda Judith Arias Quintana</p>
      <p>Banorte</p>
      <p>No. de tarjeta 4915 6664 7204 6550</p>{' '}
    </Layout>
  );
}

export default Gifts;
