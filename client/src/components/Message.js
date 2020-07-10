import React from 'react';
import Styled from 'styled-components';

//TODO
// Add settimeout & close btn

const MessageContainer = Styled.div`
background-color: #F3ECC3;
border: 1.5px solid #D49504;
border-radius: 10px;
color: #D49504;
margin: auto;
margin-top: 0.3em;
padding: 0.2em;
width: 80%;
position: absolute;

@media screen and (min-width: 767px) {
  margin-top: 0;
  padding: 0;
}
`;

const Message = ({ msg }) => {
  return <MessageContainer>{msg}</MessageContainer>;
};

export default Message;
