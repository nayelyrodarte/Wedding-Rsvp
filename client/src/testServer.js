//import { SWRConfig, cache } from 'swr';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/react';
import 'whatwg-fetch';

const handlers = [
  rest.get('/api/guests', async (req, res, ctx) => {
    const database = [
      {
        guest_party: ['THEO', 'NAYE'],
        _id: '1111111111111',
        name: 'SERGIO DELGADO',
        rsvpd: false,
        phone: '',
      },
    ];

    return res(ctx.status(200), ctx.json(database));
  }),
];

const server = setupServer(...handlers);

//afterEach(() => cache.clear());

export { server, rest };
