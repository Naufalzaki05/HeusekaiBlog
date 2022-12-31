const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Posts = require("../routes/posts");
const Comment = require("../models/Comment.js");

// CREATE COMMENTS
router.post("/", async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    console.log("hfhfhf");
    console.log(req.body);
    console.log(newComment);
    const savedComment = await newComment.save();
    console.log("hfhfhf22222");
    res.status(200).json(savedComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//DELETE COMMMENTS
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.username === req.body.username) {
      try {
        await comment.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL COMMENTS
router.get("/", async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET COMMENT BY ID

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;