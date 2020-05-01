import React from 'react';
import Styled from 'styled-components';

const Foot = Styled.div`
  background: black;
  color: white;
  font-size: 0.7em;
  padding: 2.5em;
`;

function Footer() {
  return (
    <div>
      <Foot>
        <p> Diseño web: Nayely Rodarte | Fotografía: Jonathan Guajardo</p>{' '}
        <p>© Todos los derechos reservados. </p>
      </Foot>
    </div>
  );
}

export default Footer;
