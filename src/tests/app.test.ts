import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the / endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('sever is working');
  });
});
