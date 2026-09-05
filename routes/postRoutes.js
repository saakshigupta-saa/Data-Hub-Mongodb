const express = require("express");
const Post = require("../models/Post");

const router = express.Router();
// GET /posts/recent
router.get("/recent", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("authorId")
      .sort({ createdAt: -1 })
      .limit(3);

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch recent posts",
      error: error.message,
    });
  }
});

// GET /posts
router.get("/", async (req, res) => {
  try {
const posts = await Post.find().populate("authorId");    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
});

// GET /posts/:id
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch post",
      error: error.message,
    });
  }
});

// POST /posts
router.post("/", async (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    const newPost = await Post.create({
      title,
      content,
      authorId,
    });

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create post",
      error: error.message,
    });
  }
});

// PUT /posts/:id
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json({
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update post",
      error: error.message,
    });
  }
});

// DELETE /posts/:id
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json({
      message: "Post deleted successfully",
      post: deletedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete post",
      error: error.message,
    });
  }
});

module.exports = router;