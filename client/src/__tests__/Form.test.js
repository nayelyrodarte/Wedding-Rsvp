import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../components/Form';

import { SWRConfig, cache } from 'swr';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';

afterEach(() => cache.clear());

test('renders Form component', () => {
  render(<Form />);
});

// const server = setupServer(
//   rest.get('/api/guests', (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         {
//           guest_party: ['THEO'],
//           _id: '1111111111111',
//           name: 'SERGIO DELGADO',
//           rsvpd: false,
//           phone: '',
//         },
//       ])
//     );
//   })
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

// describe('Database fetching', () => {
//   beforeEach(() => {
//     render(
//       <SWRConfig value={{ dedupingInterval: 0 }}>
//         <Form />
//       </SWRConfig>
//     );
//   });

test("Shows error message when database isn't loaded", async () => {
  // server.use(
  //   rest.get('api/guests', (req, res, ctx) => {
  //     return res(ctx.status(500), ctx.json({ message: 'Error del servidor' }));
  //   })
  // );
  render(<Form />);
  screen.debug();
  fireEvent.change(screen.getByLabelText('Primer nombre:'), {
    target: { value: 'Nayely' },
  });
  fireEvent.change(screen.getByLabelText('Apellido paterno:'), {
    target: { value: 'Rodarte' },
  });
  fireEvent.change(screen.getByLabelText('Teléfono celular (10 dígitos):'), {
    target: { value: '1234567892' },
  });
  fireEvent.click(screen.getByRole('button'));
  screen.debug();
});
// });
