import { useState } from "react";

function GoalCard() {
  const [goal, setGoal] = useState("");
  const [savedGoal, setSavedGoal] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSave = () => {
    if (goal.trim() === "") {
      return;
    }

    setSavedGoal(goal.trim());
    setGoal("");
    setCompleted(false);
  };

  const handleToggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <section className="goal-card">
      <div className="card-heading">
        <div>
          <span className="card-icon">🎯</span>
          <h2>One Important Goal</h2>
        </div>

        <span className="goal-label">For today</span>
      </div>

      {!savedGoal ? (
        <div className="goal-input-area">
          <input
            type="text"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            placeholder="What is the one thing you want to achieve?"
            maxLength={100}
          />

          <button onClick={handleSave}>
            Add Goal
          </button>
        </div>
      ) : (
        <div className={`saved-goal ${completed ? "completed" : ""}`}>
          <button
            className="goal-check"
            onClick={handleToggleComplete}
            aria-label="Mark goal as complete"
          >
            {completed ? "✓" : ""}
          </button>

          <div className="saved-goal-content">
            <p>{savedGoal}</p>

            {completed && (
              <span>Goal completed! 🎉</span>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default GoalCard;