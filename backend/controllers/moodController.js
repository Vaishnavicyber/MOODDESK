const Mood = require("../models/Mood");

// Get all moods
const getMoods = async (req, res) => {
  try {
    const moods = await Mood.find().sort({ createdAt: -1 });

    res.json(moods);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get moods",
      error: error.message,
    });
  }
};

// Add a new mood
const createMood = async (req, res) => {
  try {
    const newMood = new Mood(req.body);

    const savedMood = await newMood.save();

    res.status(201).json(savedMood);
  } catch (error) {
    res.status(500).json({
      message: "Failed to save mood",
      error: error.message,
    });
  }
};

module.exports = {
  getMoods,
  createMood,
};