import { useState } from "react";

const inspirations = [
  "Small steps every day create big changes.",
  "You don't have to do everything today. Just do what matters.",
  "Take a breath. You are doing better than you think.",
  "A calm mind can handle a busy day.",
  "Progress is still progress, even when it feels small.",
];

function InspirationCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeInspiration = () => {
    setCurrentIndex((currentIndex + 1) % inspirations.length);
  };

  return (
    <section className="inspiration-card">
      <div className="inspiration-icon">✨</div>

      <div className="inspiration-content">
        <p className="inspiration-label">DAILY INSPIRATION</p>

        <p className="inspiration-text">
          "{inspirations[currentIndex]}"
        </p>

        <button
          className="new-inspiration-button"
          onClick={changeInspiration}
        >
          New inspiration ↗
        </button>
      </div>
    </section>
  );
}

export default InspirationCard;