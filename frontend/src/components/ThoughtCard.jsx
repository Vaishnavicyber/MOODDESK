import { useState } from "react";

function ThoughtCard() {
  const [thought, setThought] = useState("");

  return (
    <section className="thought-card">
      <div className="card-heading">
        <div>
          <span className="card-icon">📝</span>
          <h2>What's on my mind?</h2>
        </div>

        <span className="character-count">
          {thought.length}/120
        </span>
      </div>

      <textarea
        value={thought}
        onChange={(event) => setThought(event.target.value)}
        maxLength={120}
        placeholder="Write one thought about your day..."
      />

      <p className="thought-hint">
        A small thought can help you understand your day better.
      </p>
    </section>
  );
}

export default ThoughtCard;