import config from './config';
import express from 'express';
import apiRouter from './api';
const https = require('https');
const http = require('http');

/*https.get('https://www.reddit.com', res => {
    console.log(res.statusCode);

    res.on('data', chunk => {
        console.log(chunk.toString());
    });
});*/

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express\n');
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
    console.info('Express is listening on port ', config.port);
});
