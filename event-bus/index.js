const express = require("express");

const bodyParser = require("body-parser");

const axios = require("axios");

const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("====================================");
  console.log(event);
  console.log("====================================");
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message, "here");
  });
  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
