import { useState } from "react";

import MoodSelector from "../components/MoodSelector";
import ThoughtCard from "../components/ThoughtCard";
import GoalCard from "../components/GoalCard";
import HabitCard from "../components/HabitCard";
import MoodHistory from "../components/MoodHistory";
import InspirationCard from "../components/InspirationCard";

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [moodTheme, setMoodTheme] = useState("");

  const today = new Date();

  const dayName = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main
      className={`dashboard ${darkMode ? "dark-mode" : ""} ${
        moodTheme ? `mood-${moodTheme}` : ""
      }`}
    >
      <section className="welcome-section">
        <div>
          <p className="greeting">Good Morning 👋</p>

          <h1>
            Welcome to <span>MoodDesk</span>
          </h1>

          <p className="subtitle">
            Your day, your mood, your space.
          </p>
        </div>

        <div className="date-card">
          <p>Today</p>
          <h2>{dayName}</h2>
          <span>{formattedDate}</span>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </section>

      <MoodSelector onMoodChange={setMoodTheme} />
      <ThoughtCard />
      <GoalCard />
      <HabitCard />
      <MoodHistory />
      <InspirationCard />
    </main>
  );
}

export default Dashboard;