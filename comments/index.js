const express = require("express");

const bodyParser = require("body-parser");

const { randomBytes } = require("crypto");

const app = express();

app.use(bodyParser.json());

const commentsByPostsId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostsId[req.params.id]);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");

  const { content } = req.body;

  const comments = commentsByPostsId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostsId[req.params.id] = comments;
  //201 for created resource
  res.status(201).send(comments);
});

const comments = {};

app.listen(4001, () => {
  console.log("====================================");
  console.log("Listening on 4001");
  console.log("====================================");
});