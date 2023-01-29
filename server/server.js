// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });
const https = require("https");
const fs = require("fs");

// Requires for express and auth0
const express = require('express');
// const cors = require('cors');

// get MongoDB driver connection
const dbo = require('./db/conn');
const PORT = process.env.PORT || 8080;
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// app.use(cors());
app.use(express.json());
app.use(require('./routes/groups'));
app.use(require('./routes/tasks'));

// Global error handling
app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  res.send("Hello world")
})

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  https
  .createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log("serever is runing at port 4000");
  });
});
