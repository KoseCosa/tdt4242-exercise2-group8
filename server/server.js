const express = require('express')
const server = express()

const port = process.env.PORT || 4300

server.use(express.static(__dirname + '/../dist'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

server.listen(port, () => console.log('Server listening on port '+port+'!'))
