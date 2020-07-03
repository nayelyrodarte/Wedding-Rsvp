import React from 'react';
import Styled from 'styled-components';

const MessageContainer = Styled.div`
background-color:  #cccccc;
border: 1.5px solid black;
border-radius: 10px;
color: black;
margin: auto;
padding: 0.2em;
width: fit-content;
position: relative;
`;

const Message = ({ msg }) => {
  return <MessageContainer>{msg}</MessageContainer>;
};

export default Message;
