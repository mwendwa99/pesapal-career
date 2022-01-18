const fs = require('fs')

// this is our original handler, extracted as a function
// returns a response of 26 bytes
const helloWorldHandler = (stream, headers) => {
    console.log({ headers })
    stream.respond({
        'content-type': 'text/html; charset=utf-8',
        'content-length': '26',
        ':status': 200
    })
    // send html file
    stream.end(fs.readFileSync(__dirname + '/index.html'));
}

// post request handler
const getMessageBody = (stream, headers) => {
    console.log({ headers })
    // if stream has been closed, return
    if (stream.closed) {
        return
    }
    // get the message body
    const body = []
    stream.on('data', (chunk) => {
        body.push(chunk)
    })
    stream.on('end', () => {
        // convert the body to a string
        const message = Buffer.concat(body).toString()

        // remove the + from the message
        const messageWithoutPlus = message.replace(/\+=/g, ' ')

        // respond with a message
        stream.respond({
            'content-type': 'text/html; charset=utf-8',
            'content-length': '26',
            ':status': 200
        })
        stream.end(`
        <div style="
                    background-color: #f0f0f0;
                    padding: 10px; 
                    display: flex; 
                    justify-content: center;
                    flex-direction: column;
                    text-align: center; 
                    align-items:center;">
            <h1>This is a dynamically rendered page</h1>
            <br />
            <h3>your ${messageWithoutPlus}</h3>
            <br />
            <h3>go back to the <a href="/">home page</a></h3>
        </div>
        `)
    })
}

// in case a route doesn't exist, we want to return a
// 404 status and a message that the path does not exist!
// also returns a response of 26 bytes
const notFoundHandler = (stream, headers) => {
    stream.respond({
        'content-type': 'text/plain; charset=utf-8',
        'content-length': '26',
        ':status': 200
    })
    stream.end('path does not exist!')
}

// the router is a special type of handler the original request
// is sent to another handler based on the headers
const router = (stream, headers) => {
    // extract the path and method pseudo headers
    const path = headers[':path']
    const method = headers[':method']

    // if-else statement to determine the
    // final destination for the request stream and assign
    // it to the `handler` variable
    let handler
    if (path === "/" && method === 'GET') {
        handler = helloWorldHandler
    }
    else if (path === "/message" && method == 'POST') {
        // handler = messageHandler
        handler = getMessageBody
    }
    else {
        handler = notFoundHandler
    }

    // finally, apply the chosen handler to the request
    handler(stream, headers)
}

module.exports = router