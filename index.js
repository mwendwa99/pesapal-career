const http2 = require('http2');

// create a new session with google.com
const session = http2.connect('http://localhost:8443');

// log any errors to the console
session.on('error', (err) => console.error(err));

// // new request stream
// const req = session.request({ ':path': '/' });
// // end request
// req.end();

// set request timeout to 100ms
const req = session.request({ ':path': '/', ':method': 'POST', ':scheme': 'https' });
req.setTimeout(100, () => {
    // if the request times out, end the request
    console.log('request timed out');
    req.end();
});


// fire a callback once a response is received from the server
req.on('response', (headers, flags) => {
    // log each response
    for (const name in headers) {
        console.log(`${name}: ${headers[name]}`);
    }
});

// initialize an empty data string with utf8 encoding
req.setEncoding('utf8');
let data = '';

// add data to the data string everytime a chunk is received
req.on('data', (chunk) => {
    data += chunk;
});

// log the data string once the request is complete
req.on('end', () => {
    console.log(`\n${data}`);

    // close the session
    session.close();
});