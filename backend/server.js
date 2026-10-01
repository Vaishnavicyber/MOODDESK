const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((error) => {
    console.log("MongoDB connection failed ❌");
    console.log(error.message);
  });

// Mood routes
const moodRoutes = require("./routes/moodRoutes");

app.use("/api/moods", moodRoutes);

app.get("/", (req, res) => {
  res.send("MoodDesk Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`MoodDesk server running on http://localhost:${PORT}`);
});