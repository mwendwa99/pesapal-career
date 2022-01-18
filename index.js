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
server.on('stream', (stream, headers) => {
    // send response
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });

    // response streams are also stream objects, so we can
    // use `write` to send data, and `end` once we're done
    stream.write('<h1>Hello World</h1>');
    stream.end()
});

server.listen(8443);

console.log('Server running at https://localhost:8443/');