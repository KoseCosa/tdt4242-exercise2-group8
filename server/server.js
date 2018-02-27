const express = require('express');
const server = express();
const apiRouter = require('./routes/api.js');

const port = process.env.PORT || 4300

server.use(express.static(__dirname + '/../dist'));

server.use('/api',apiRouter);

server.listen(port, () => console.log('Server listening on port '+port+'!'));
