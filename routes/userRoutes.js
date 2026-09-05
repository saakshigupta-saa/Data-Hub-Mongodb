const express = require("express");
const User = require("../models/User");

const router = express.Router();

// POST /users
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

module.exports = router;