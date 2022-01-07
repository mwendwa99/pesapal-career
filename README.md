# Web server with secure communication

## Description

This is a simple web server with secure communication.
It listenes to port 8000 and accepts only connections from localhost.
This server is based on [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/).
It supports only GET and POST requests. The only headders supported are: `Content-Type` and `Content-Length`.

### Techonolgies used:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SSL](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [HTTPS](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol_Secure)
- [Body-parser](https://www.npmjs.com/package/body-parser)

## Installation

clone the repository: `git clone`
cd into the directory
install dependencies: `npm install`

## Usage

run the server: `node app.js`
open the browser and go to https://localhost:8000
type in the text and click on submit

## License

MIT
