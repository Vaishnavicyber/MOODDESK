import { useState } from "react";

const initialHabits = [
  { id: 1, name: "Water", icon: "💧" },
  { id: 2, name: "Study", icon: "📚" },
  { id: 3, name: "Exercise", icon: "🏃" },
  { id: 4, name: "Reading", icon: "📖" },
];

function HabitCard() {
  const [habits, setHabits] = useState(initialHabits);

  const completedCount = habits.filter(
    (habit) => habit.completed
  ).length;

  const progress = (completedCount / habits.length) * 100;

  const toggleHabit = (id) => {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  return (
    <section className="habit-card">
      <div className="card-heading">
        <div>
          <span className="card-icon">💧</span>
          <h2>Small Habits</h2>
        </div>

        <span className="habit-progress-text">
          {completedCount}/{habits.length}
        </span>
      </div>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="habit-list">
        {habits.map((habit) => (
          <button
            key={habit.id}
            className={`habit-item ${
              habit.completed ? "completed" : ""
            }`}
            onClick={() => toggleHabit(habit.id)}
          >
            <span className="habit-icon">
              {habit.icon}
            </span>

            <span className="habit-name">
              {habit.name}
            </span>

            <span className="habit-check">
              {habit.completed ? "✓" : ""}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default HabitCard;