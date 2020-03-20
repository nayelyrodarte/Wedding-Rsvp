import React from 'react';
import InstaPic from '../img/aaron.jpg';
import Styled from 'styled-components';

const InstaComp = Styled.div`
background: url(${InstaPic}) center/100%;
width: 100wh;
height: 32vh;

`;

function Insta() {
  return (
    <InstaComp>
      <div style={{ padding: '1em' }}>
        <i className='fa fa-instagram fa-2x' aria-hidden='true' />
        <p> Etiqueta tus fotos con nuestro hashtag </p>{' '}
        <p
          style={{
            fontSize: '1.7em',
            fontWeight: 'bold'
          }}
        >
          {' '}
          #BRENDA & AARON2020{' '}
        </p>{' '}
      </div>
    </InstaComp>
  );
}

export default Insta;
