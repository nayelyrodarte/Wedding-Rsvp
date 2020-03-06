import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: center;
  }
`;

function Gifts() {
  return (
    <Layout>
      <h2> ¿Quieres hacernos un regalo ? </h2>{' '}
      <button> Mesa de regalos Liverpool </button>{' '}
      <button> Ver datos bancarios </button>{' '}
    </Layout>
  );
}

export default Gifts;
