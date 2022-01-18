# Problem #1: Web server with secure communication

## Description

- This is a simple web server with secure communication.
- It listens to port 8443 and accepts only connections from localhost.
- This server is based on [Node.js](https://nodejs.org/en/).
- It supports only GET and POST requests. The only headers supported are: `Content-Type` and `Content-Length`.
- Server certificates are generated with [OpenSSL](https://www.openssl.org/docs/manmaster/apps/x509.html).
- The certificate created here is a self-signed certificate.

## Techonolgies used:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [SSL](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [HTTPS](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol_Secure)
- [HTTP2](https://en.wikipedia.org/wiki/HTTP/2)

## Installation

1. Clone the repository: `git clone`
2. Cd into the directory
3. initalize the project: `yarn init`
4. install certificats and keys in directory: `openssl req -new -newkey rsa:2048 -nodes -keyout server.key -out server.cert`

## Usage

1. Run the server: `node server.js`
2. Open the browser and go to https://localhost:8443
3. Type in your message and click on submit

## License

MIT
