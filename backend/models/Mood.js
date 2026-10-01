const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema(
  {
    mood: {
      type: String,
      required: true,
    },

    thought: {
      type: String,
      default: "",
    },

    goal: {
      type: String,
      default: "",
    },

    habits: {
      water: {
        type: Boolean,
        default: false,
      },

      study: {
        type: Boolean,
        default: false,
      },

      exercise: {
        type: Boolean,
        default: false,
      },

      reading: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;