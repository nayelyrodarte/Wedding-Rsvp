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
      <button> Mesa de regalos Liverpool </button> <h3>Datos bancarios</h3>
      <p>NOMBRE</p>
      <p>Banco</p>
      <p>Cuenta</p>{' '}
    </Layout>
  );
}

export default Gifts;
