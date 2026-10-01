const moodHistory = [
  { day: "Mon", mood: "Happy", emoji: "😊" },
  { day: "Tue", mood: "Calm", emoji: "😌" },
  { day: "Wed", mood: "Excited", emoji: "🤩" },
  { day: "Thu", mood: "Tired", emoji: "😴" },
  { day: "Fri", mood: "Happy", emoji: "😊" },
];

function MoodHistory() {
  return (
    <section className="mood-history-card">
      <div className="card-heading">
        <div>
          <span className="card-icon">📊</span>
          <h2>Mood History</h2>
        </div>

        <span className="history-label">Recent days</span>
      </div>

      <div className="mood-history-list">
        {moodHistory.map((item) => (
          <div className="history-item" key={item.day}>
            <span className="history-day">{item.day}</span>

            <span className="history-emoji">{item.emoji}</span>

            <span className="history-mood">{item.mood}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MoodHistory;