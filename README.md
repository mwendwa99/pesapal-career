# Web server with secure communication

## Description

- This is a simple web server with secure communication.
- It listens to port 8443 and accepts only connections from localhost.
- This server is based on [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/).
- It supports only GET and POST requests. The only headers supported are: `Content-Type` and `Content-Length`.
- It dynamically generates the response based on the request as well as a static HTML page.
- The connection is secured by letsencrypt.

### Techonolgies used:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [LetsEncrypt](https://letsencrypt.org/)
- [SSL](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [HTTPS](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol_Secure)
- [Body-parser](https://www.npmjs.com/package/body-parser)

## Installation

1. Clone the repository: `git clone`
2. Cd into the directory
3. Install dependencies: `npm install`

## Usage

1. Run the server: `node app.js`
2. Open the browser and go to https://localhost:8000
3. Type in the text and click on submit

<!-- 1. To make server publicly available, you can either run a  -->

## License

MIT
