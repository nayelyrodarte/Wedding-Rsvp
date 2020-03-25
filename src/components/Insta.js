import React from 'react';
import InstaPic from '../img/BA-Horizon.jpg';
import Styled from 'styled-components';

const InstaComp = Styled.div`
text-align: right;
background: url(${InstaPic}) bottom/100% no-repeat;
background-size: cover;
width: 100wh;
height: 50vh;
`;

function Insta() {
  return (
    <InstaComp>
      <div style={{ padding: '1.5em' }}>
        <i
          className='fa fa-instagram fa-2x'
          aria-hidden='true'
          style={{ marginRight: '3.5em' }}
        />
        <p> Etiqueta tus fotos con nuestro hashtag </p>{' '}
        <p
          style={{
            fontSize: '1.3em',
            fontWeight: 'bold'
          }}
        >
          {' '}
          #BRENDAYAARON2020{' '}
        </p>{' '}
      </div>
    </InstaComp>
  );
}

export default Insta;
