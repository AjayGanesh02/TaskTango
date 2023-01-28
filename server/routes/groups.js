const express = require('express');

// crudRoutes is an instance of the express router.
// We use it to define our routes.
const groupRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

groupRoutes.route('/groups').get(async function (req, res) {
  const dbConnect = dbo.getDb();
  const user = req.query.email
  if (!user) {
    res.send("Specify a user to find groups")
  }
  dbConnect
    .collection('Groups')
    .find({
      'users': user
    })
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});

groupRoutes.route('/groups').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const matchDocument = {
    group_name: req.body.group_name,
    users: [req.body.initial_user]
  };

  dbConnect
    .collection('Groups')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting matches!');
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});

module.exports = groupRoutes;
