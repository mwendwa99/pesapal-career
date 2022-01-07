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

// use Content-Type and Content-Length
app.use(bodyParser.json({
    type: 'application/json',
    // limit:''
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

    // // get the data from the request
    // const data = req.body;

    // // get the file name from the request
    // const fileName = data.fileName;

    // // get the file content from the request
    // const fileContent = data.fileContent;

    // // write the file to the file system
    // fs.writeFile(fileName, fileContent, (err) => {

    //     // if error
    //     if (err) {

    //         // send error message
    //         res.send(err);
    //     }

    //     // if no error
    //     else {

    //         // send success message
    //         res.send("File saved successfully!");
    //     }
    // });
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