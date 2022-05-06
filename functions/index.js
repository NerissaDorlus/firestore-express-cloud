const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("It's working 💕");
});

app.get("/", (req, res) => {
  res.send("🏡 This is home 🏡");
});

//this app creates the cloud function that runs the express app
exports.app = functions.https.onRequest(app);
