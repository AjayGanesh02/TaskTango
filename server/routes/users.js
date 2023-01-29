const express = require('express');

// crudRoutes is an instance of the express router.
// We use it to define our routes.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

userRoutes.route('/users').get(async function (req, res) {
  const dbConnect = dbo.getDb();
  const user = req.query.email
  if (!user) {
    res.send("Specify a user email to get phone num")
  }
  dbConnect
    .collection('Users')
    .find({
      'email': user
    })
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});

userRoutes.route('/users').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const matchDocument = {
    email: req.body.email,
    phone: "1" + req.body.phone
  };

  console.log(matchDocument)

  dbConnect
    .collection('Users')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting matches!');
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(204).send(result.insertedId);
      }
    });
});

module.exports = userRoutes;
