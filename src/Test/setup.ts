import { server } from './mocks/server';
import { beforeAll,afterAll,afterEach } from 'vitest';
import { fetch } from 'cross-fetch';

global.fetch = fetch;
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());