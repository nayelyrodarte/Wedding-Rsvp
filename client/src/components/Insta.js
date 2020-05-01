import React from 'react';
import InstaPic from '../img/B&A-21-2.jpg';
import Styled from 'styled-components';

const InstaComp = Styled.div`
background: url(${InstaPic}) center/100% no-repeat;
width: 100wh;
height: 60vh;
p {
  font-size: 1.5em;
}
div {
  height: 30%;
  padding-top: 19em;
}
`;

function Insta() {
  return (
    <InstaComp>
      <div>
        <i className='fa fa-instagram fa-2x' aria-hidden='true' />
        <p> Etiqueta tus fotos con nuestro hashtag </p>
        <p> #BRENDAYAARON2020 </p>{' '}
      </div>
    </InstaComp>
  );
}

export default Insta;
