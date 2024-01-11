
// Require in functionality
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Declare port for server to listen on
const PORT = 3001;

// Begin listeing on the port
app.listen(PORT, () => console.log(`Running express server on PORT ${PORT}`));

// Simple GET route to test it is working
app.get('/', (req, res, next) => {
    console.log("Success");
    res.status(200).send("Hello World")
});