const express = require("express");

const bodyParser = require("body-parser");

const { randomBytes } = require("crypto");

const cors = require("cors");

const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.use(cors());

const commentsByPostsId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostsId[req.params.id]);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");

  const { content } = req.body;

  const comments = commentsByPostsId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostsId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });
  //201 for created resource
  res.status(201).send(comments);
});

const comments = {};

app.listen(4001, () => {
  console.log("====================================");
  console.log("Listening on 4001");
  console.log("====================================");
});
