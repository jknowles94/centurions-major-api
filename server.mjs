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
import router from './routes/index.mjs';
//Dummy data to build rest of web app before implement database
import cors from 'cors';
const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});