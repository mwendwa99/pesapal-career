const router = require('./router');

// requre http2 protocol
const http2 = require('http2');
const fs = require('fs');

// create secure server
const server = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
});

// log any error that occurs when running the server
server.on('error', (err) => console.error(err))

// event to listen to tcp stream
server.on('stream', router);

server.listen(8443);

console.log('Server running at https://localhost:8443/');