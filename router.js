// this is our original handler, extracted as a function
const helloWorldHandler = (stream, headers) => {
    console.log({ headers })
    stream.respond({
        ':status': 200
    })
    stream.end('Hello World from router')
}

// the pingHandler returns "response success" to let us know that
// the server is up and running
const pingHandler = (stream, headers) => {
    console.log({ headers })
    stream.respond({
        ':status': 200
    })
    stream.end('response success')
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
    if (path === "/hello-world" && method === 'GET') {
        handler = helloWorldHandler
    }
    else if (path === "/ping" && method == 'GET') {
        handler = pingHandler
    }
    else {
        handler = notFoundHandler
    }

    // finally, apply the chosen handler to the request
    handler(stream, headers)
}

module.exports = router