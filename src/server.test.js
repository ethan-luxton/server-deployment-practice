const server = require('./server');
const supertest = require('supertest');

const req = supertest(server);

test('hello endpoint', async () => {
    const res = await req.get('/hello');
    expect(res.text).toBe('Hello!');
});

test('goodbye endpoint', async () => {
    const res = await req.get('/goodbye');
    expect(res.text).toBe('Nailed It!');
});