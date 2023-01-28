const express = require('express');

// crudRoutes is an instance of the express router.
// We use it to define our routes.
const taskRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

taskRoutes.route('/tasks').get(async function (req, res) {
  const dbConnect = dbo.getDb();
  const group_id = req.query.group
  const user_id = req.query.user
  if (!group_id && !user_id) {
    res.send("Specify a group or user to find tasks")
  }
  const filter_doc = group_id ?
    {
      "group_id": group_id
    }
    :
    {
      "assignees": user_id
    }
  dbConnect
    .collection('Tasks')
    .find(filter_doc)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching tasks!');
      } else {
        res.json(result);
      }
    });
});

taskRoutes.route('/tasks').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const matchDocument = {
    group_name: req.body.group_name,
    users: [req.body.initial_user]
  };

  dbConnect
    .collection('Tasks')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting matches!');
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});

taskRoutes.route('/tasks').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body.id };
  const updates = {
    $inc: {
      likes: 1,
    },
  };

  dbConnect
    .collection('listingsAndReviews')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating likes on listing with id ${listingQuery.id}!`);
      } else {
        console.log('1 document updated');
      }
    });
});

// This section will help you delete a record.
taskRoutes.route('/listings/delete/:id').delete((req, res) => {
  const dbConnect = dbo.getDb();
  const listingQuery = { listing_id: req.body.id };

  dbConnect
    .collection('listingsAndReviews')
    .deleteOne(listingQuery, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error deleting listing with id ${listingQuery.listing_id}!`);
      } else {
        console.log('1 document deleted');
      }
    });
});

module.exports = taskRoutes;
