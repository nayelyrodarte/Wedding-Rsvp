import React from 'react';
import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';
import Form from '../components/Form';

const server = setupServer(
  rest.get("api/guests", (req,res, ctx) => {
    return res(ctx.status(200), ctx.json({[{"_id": "5ec5b83fd0572caa39bc86dc","name":"CONRADO ARIAS","guest_party":["CONRADO ARIAS"],"rsvpd":false,"phone":""}]}))
  })
)

test('renders Form component', () => {
  render(<Form />);
});

describe('Database fetching at Form component', () => {
  beforeEach(() => render(<Form />));

  test.skip('Succesfully fetches database when rendered', async () => {});

  test.skip('Throws error message when database isnt succesfully fetched', async () => {});

  test.skip('Disables text inputs when database isnt succesfully fetched', async () => {});
});
