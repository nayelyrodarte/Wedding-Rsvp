import React from 'react';
import App from '../components/App';
import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { SWRConfig, cache } from 'swr';

afterEach(() => cache.clear());

const server = setupServer(
  rest.get('/api/guests', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          guest_party: ['THEO'],
          _id: '1111111111111',
          name: 'SERGIO DELGADO',
          rsvpd: false,
          phone: '',
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test.skip('renders App component', () => {
  render(<App />);
});

describe('Database fetching', () => {
  beforeEach(() => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <App />
      </SWRConfig>
    );
  });

  test.skip('Shows charging message when database is fetching', async () => {
    const charging = await screen.getByText(/Cargando.../i);
    expect(charging).toBeInTheDocument();
  });
  test.skip("Doesn't show error message when database is loaded", async () => {
    const error = await screen.queryByText(/Error en la base de datos/i);
    expect(error).toBeNull();
  });
  test("Shows error message when database isn't loaded", async () => {
    server.use(
      rest.get('api/guests', (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ message: 'Error del servidor' })
        );
      })
    );

    const error = await screen.findByText(/Error en la base de datos/);
    expect(error).toBeInTheDocument();
  });
});
