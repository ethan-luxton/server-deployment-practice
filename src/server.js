
const express = require('express');


const server = express();

server.get('/hello', (_, res) => res.send('Hello!'));

server.get('/goodbye', (_, res) => res.send('Nailed It!'));

module.exports = server;
