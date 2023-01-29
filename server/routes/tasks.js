const express = require('express');

const client = require("twilio")(process.env.accountSid, process.env.authToken);

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

taskRoutes.route('/tasks/later').get(function (req, res) {
  const dbConnect = dbo.getDb();

  const matchDocument = req.query.user ? {
    assignees: req.query.user,
    next_alert: { $gte: new Date() }
  } : {
    group_id: req.query.group_id,
    next_alert: { $gte: new Date() }
  }
  dbConnect
    .collection('Tasks')
    .find(matchDocument)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching tasks!');
      } else {
        res.json(result);
      }
    });


})

taskRoutes.route('/tasks').post(function (req, res) {
  const dbConnect = dbo.getDb();

  function subtractHours(date, hours) {
    date.setHours(date.getHours() - hours);

    return date;
  }

  const now = new Date();

  const matchDocument = {
    group_id: req.body.group,
    assignees: [req.body.initial_assignee],
    last_notified: now,
    last_completed: subtractHours(now, 1),
    frequency: req.body.freq * 1000,
    assign_idx: 0,
    isFreq: true,
    card_id: req.body.card_id
  };

  dbConnect
    .collection('Tasks')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting matches!');
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(204).send(result.insertedId);
      }
    });
});

taskRoutes.route('/tasks/sendMessage').get((req,_res) => {
  const phone = "+1" + req.query.phone
  client.messages
  .create({ body: "Reminder to do " + req.query.taskName, from: "+18339741927", to: phone })
  .then(message => console.log(message.sid));
});

taskRoutes.route('/tasks/done').get(function (req, _res) {
  const dbConnect = dbo.getDb();
  const code = req.query.code

  function addMins(date, mins) {
    date.setMinutes(date.getMinutes() - mins);

    return date;
  }
  const matchDocument = {
    card_id: code
  }
  const taskOld = dbConnect.collection('Tasks').findOne(matchDocument).toArray()[0]
  dbConnect
  .collection('Tasks')
  .updateOne(matchDocument, { $set: { next_alert: addMins(new Date(), taskOld.frequency), assign_idx: (taskOld.assign_idx + 1) % taskOld.assignees.length }})
})

module.exports = taskRoutes;
