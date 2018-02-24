const express = require('express')
const server = express()

const port = process.env.PORT || 4300

server.use(express.static(__dirname + '/../dist'))
server.listen(port, () => console.log('Server listening on port '+port+'!'))
