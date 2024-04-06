export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {/* Кнопка Reset видна только если есть отзывы */}
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
}