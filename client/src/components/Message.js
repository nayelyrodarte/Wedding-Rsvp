import React from 'react';
import Styled from 'styled-components';
import closeIcon from '../img/close_icon.svg';

//TODO
// Add close btn

const MessageContainer = Styled.div`
background-color: #F3ECC3;
border: 1.5px solid #D49504;
border-radius: 10px;
color: #D49504;
margin: auto;
margin-top: 0.5em;
height: min-content;
position: relative;
width: 80%;



@media screen and (min-width: 768px) {
  width: 30%;
  right: 30%;
}
`;

const Message = ({ msg }) => {
  if (msg === 'Cargando') {
    return (
      <MessageContainer>
        <div className='charging'>{msg}</div>
      </MessageContainer>
    );
  } else {
    return (
      <MessageContainer>
        <div>{msg}</div>
      </MessageContainer>
    );
  }
};

export default Message;
