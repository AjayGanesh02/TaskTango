// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });

// Requires for express and auth0
const express = require('express');
const cors = require('cors');
// const { auth } = require('express-oauth2-jwt-bearer');
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');

// get MongoDB driver connection
const dbo = require('./db/conn');

const PORT = process.env.PORT || 5000;
const app = express();

// const checkJwt = auth({
//   audience: 'https://tasktango.tech/',
//   issuerBaseURL: `dev-vtvguykkngefawuw.us.auth0.com/`,
// });

// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: 'https://dev-vtvguykkngefawuw.us.auth0.com/.well-known/jwks.json'
// }),
// audience: 'https://tasktango.tech/',
// issuer: 'https://dev-vtvguykkngefawuw.us.auth0.com/',
// algorithms: ['RS256']
// });
// app.use(jwtCheck);
app.use(cors());
// app.use(express.json());
// app.use(require('./routes/record'));

// Global error handling
app.use(function (err, _req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/api/public', (req, res) => {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
})

app.get('/api/private', function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

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
