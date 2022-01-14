// requre http2 protocol
const http2 = require('http2');
const fs = require('fs');

// create secure server
const server = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
});

// event to listen to tcp stream
server.on('stream', (stream, headers) => {
    // send response
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });

    // send data
    stream.end('<h1>Hello World!</h1>');
});

server.listen(8443);

console.log('Server running at https://localhost:8443/');