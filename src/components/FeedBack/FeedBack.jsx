import styles from "./FeedBack.module.css";

export default function FeedBack({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={`${styles.item} ${styles.total}`}>Total feedback: {totalFeedback}</li>
        <li className={`${styles.item} ${styles.positive}`}>
          Positive feedback: {positiveFeedbackPercentage}%
        </li>
      </ul>
    </>
  );
}
