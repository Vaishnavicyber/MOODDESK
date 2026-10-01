import { useState } from "react";

const moods = [
  { name: "Happy", emoji: "😊", theme: "happy" },
  { name: "Calm", emoji: "😌", theme: "calm" },
  { name: "Tired", emoji: "😴", theme: "tired" },
  { name: "Stressed", emoji: "😫", theme: "stressed" },
  { name: "Excited", emoji: "🤩", theme: "excited" },
];

function MoodSelector({ onMoodChange }) {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSelect = async (mood) => {
    // Update selected mood on frontend
    setSelectedMood(mood.name);

    // Change dashboard theme
    if (onMoodChange) {
      onMoodChange(mood.theme);
    }

    try {
      // Send mood to backend
      const response = await fetch("http://localhost:5000/api/moods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mood: mood.name,
        }),
      });

      // Check whether backend responded successfully
      if (!response.ok) {
        throw new Error("Failed to save mood");
      }

      // Get saved data from backend
      const data = await response.json();
      console.log("Mood saved successfully:", data);
    } catch (error) {
      console.error("Error saving mood:", error);
    }
  };

  return (
    <section className="mood-section">
      <div className="section-heading">
        <p>🌤️ TODAY'S MOOD</p>
        <span>How are you feeling today?</span>
      </div>

      <div className="mood-list">
        {moods.map((mood) => (
          <button
            key={mood.name}
            type="button"
            className={`mood-card ${
              selectedMood === mood.name ? "selected" : ""
            }`}
            onClick={() => handleMoodSelect(mood)}
          >
            <span className="mood-emoji">{mood.emoji}</span>
            <span className="mood-name">{mood.name}</span>
          </button>
        ))}
      </div>

      {selectedMood && (
        <p className="selected-message">
          You are feeling <strong>{selectedMood}</strong> today ✨
        </p>
      )}
    </section>
  );
}

export default MoodSelector;
