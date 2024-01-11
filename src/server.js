
// Require in functionality
const express = require('express');
const bodyParser = require('body-parser');
const envelopesRouter = require('./routes/envelopes');

// Create an instance of express
const app = express();

// Declare port for server to listen on
const PORT = 3001;

// Add functionality
app.use(express.json());

// Use the required routes from ./routes/envelopes
app.use('/api', envelopesRouter);

// Begin listeing on the port
app.listen(PORT, () => console.log(`Running express server on PORT ${PORT}`));

