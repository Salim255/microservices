const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    console.log("====================================");
    console.log(id, title, data, posts);
    console.log("====================================");
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    console.log("====================================");
    console.log(data);
    console.log("====================================");

    const post = posts[postId];

    console.log("====================================");
    console.log(posts, "hello posts", postId);
    console.log("====================================");
    post.comments.push({ id, content });

    console.log("====================================");
    console.log("cimment", posts);
    console.log("====================================");
  }

  console.log("====================================");
  console.log(posts);
  console.log("====================================");
  res.send({});
});

app.listen(4002, () => {
  console.log("Service query running on port: 4002");
});
