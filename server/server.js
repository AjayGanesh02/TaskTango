// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });

// Requires for express and auth0
const express = require('express');
const cors = require('cors');

// get MongoDB driver connection
const dbo = require('./db/conn');
const PORT = process.env.PORT || 80;
const app = express();


app.use(cors());
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

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
