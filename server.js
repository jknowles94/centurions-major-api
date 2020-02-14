// Google Firebase
// require('dotenv').config()
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// const firebase = require("firebase");
// const apiKey = process.env.APP_FIREBASE_APIKEY;
// const authDomain = process.env.APP_FIREBASE_AUTHDOMAIN;
// const databaseURL = process.env.APP_FIREBASE_DATABASEURL;

// const firebaseConfig = {
//   apiKey,
//   authDomain,
//   databaseURL
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();

// app.get('/users', (req, res) => {
//   db.ref('/users').once('value').then((snapshot) => {
//     return res.send(snapshot.val());
//   }).catch(e => {
//     console.log(e);
//     return res.send(e);
//   });
// });

// app.put('/users', (req, res) => {
  
// });

// app.listen(port, () => console.log(`listening on port ${port}`));

//Google firebase end

import express from 'express';
import bodyParser from 'body-parser';
const PORT = 5000;
//Dummy data to build rest of web app before implement database
import users from './db/users';
import events from './db/events';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Get users Items
app.get('/api/users', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'users successfully retrieved',
    users: users
  });
});

//Get Events
app.get('/api/events', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Events successfully retrieved',
    events: events
  });
});

app.get('/api/event/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = events.findIndex((el) => el.id === id);
  if(index != -1) {
    return res.status(200).send({
      success: true,
      message: 'Event retrieved',
      event: events[index]
    });
  }

  return res.status(404).send({
    success: false,
    message: 'Event does not exist'
  });
});

app.post('/api/event', (req, res) => {
  
  if(!req.body.name) {
    return res.status(400).send({
      success: false,
      message: 'An event requires a name.'
    });
  } else if(!req.body.winner_id && isNaN(req.body.winner_id)) {
    return res.status(400).send({
      success: false,
      message: 'An event requires a winner_id.'
    });
  } else if(!req.body.results || !req.body.results.length <= 0) {
    return res.status(400).send({
      success: false,
      message: 'An event requires at least 1 result'
    });
  } else {
    let index = users.findIndex(el => req.body.winner_id === el.id);
    if(index === -1) {
      return res.status(400).send({
        success: false,
        message: 'Cannot find a user with that winner_id'
      });
    }
  }

  let newEvent = {
    id: events.length + 1,
    ...req.body
  };
  events.push(newEvent);
  return res.status(201).send({
    success: true,
    message: 'Event successfully created.',
    events
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});