const express = require("express");

const bodyParser = require("body-parser");

const { randomBytes } = require("crypto");

const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });
  //201 for created resource
  res.status(201).send(posts[id]);
});

const posts = {};

app.listen(4000, () => {
  console.log("====================================");
  console.log("Listening on 4000");
  console.log("====================================");
});
