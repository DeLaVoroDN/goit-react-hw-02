export default function FeedBack({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total feedback: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </>
  );
}
