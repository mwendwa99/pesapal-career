// in-built http server
const https = require("https");

// express to handle http requests
const express = require("express");
const app = express();

// port
const PORT = 8000;

// file system to read files
const fs = require("fs");

// body parser to parse the body of the request
const bodyParser = require("body-parser");

// configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// use Content-Type and Content-Length of 100kb
app.use(bodyParser.json({
    type: 'application/json',
    limit: '100kb',
}));

// get request to the html file at root
app.get("/", (req, res) => {

    // send index.html to browser
    res.sendFile(__dirname + "/index.html");
});

// post request to the html file at root
app.post("/message", (req, res) => {
    console.log(req.body);

    // redirect to the root
    res.redirect("/");
});


// object of key and certificate for SSL
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

// https server with options and app object
https.createServer(options, app)
    .listen(PORT, (req, res) => {
        console.log(`server is running at port: ${PORT}`);
    });

// 404 error handler
app.use('*', (req, res, next) => {
    res.status(404).send("<h1>404 Sorry That Page Does Not Exist!</h1>");
})