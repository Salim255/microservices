const express = require("express");

const bodyParser = require("body-parser");

const { randomBytes } = require("crypto");

const app = express();

app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  //201 for created resource
  res.status(201).send(posts[id]);
});

const posts = {};

app.listen(4000, () => {
  console.log("====================================");
  console.log("Listening on 4000");
  console.log("====================================");
});
