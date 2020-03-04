import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1.8em;
  font-family: Parisienne;
  margin-top: 1em;
  margin-bottom: 0;
`;

const Subtitle = styled.h4`
  font-size: 1.4em;
  margin-top: 1em;
  margin-bottom: 0em;
`;

const Button = styled.a`
  font-size: 1em;
  color: white;
  background: black;
  font-family: inherit;
  margin: 1em;
  padding: 0.25em 2em;
  border: none;
  border-radius: 12px;
  outline: none;
  text-decoration: none;

  &:visited {
    color: none;
  }

  &:active {
    color: none;
  }
`;

const Content = styled.div`
  font-size: 1.2em;
  justify-content: center;
  background: #dae0e0;
  padding-bottom: 2em;
  padding-top: 0.3em;
`;

class Itinerary extends Component {
  render() {
    return (
      <div>
        <Content>
          <Title> Horarios y ubicaciones </Title>
          <Subtitle> Ceremonia </Subtitle> <p> Templo de la Sagrada Familia </p>{' '}
          <p>
            Av.Venustiano Carranza 1810, Bolívar, Zona Centro, Chihuahua, Chih.{' '}
          </p>{' '}
          <p> 00: 00 hrs </p>{' '}
          <Button href='https://goo.gl/maps/gyEpWxBD3KmfQzZs5'>
            {' '}
            Ir al mapa{' '}
          </Button>{' '}
          {''} <Subtitle> Recepción </Subtitle>{' '}
          <p> Salón de Eventos Los Encinos </p>{' '}
          <p> Calle 38 6601 B, Tabalaopa, Chihuahua, Chih. </p>{' '}
          <p> 00: 00 hrs </p>{' '}
          <Button href='https://goo.gl/maps/U7Zzdo4LRmcELCay8'>
            Ir a al mapa{' '}
          </Button>{' '}
        </Content>{' '}
      </div>
    );
  }
}

export default Itinerary;
