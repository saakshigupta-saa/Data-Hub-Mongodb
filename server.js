require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(logger);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to The Data Hub API",
  });
});

// Routes
app.use("/posts", postRoutes);
app.use("/login", authRoutes);
app.use("/users", userRoutes);

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});