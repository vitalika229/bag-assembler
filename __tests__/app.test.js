import request from 'supertest';
import app from '../src/front/server.js';

describe('API tests', () => {
  it('should return status 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
