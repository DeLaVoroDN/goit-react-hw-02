import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Option/Options";
import Notification from "./Notification/Notification";
import FeedBack from "./FeedBack/FeedBack";

export default function App() {
  const [obj, setObj] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(obj));
  }, [obj]);

  const updateFeedback = (feedbackType) => {
    setObj((currentState) => ({
      ...currentState,
      [feedbackType]: currentState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setObj({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = obj.good + obj.neutral + obj.bad;
  const positiveFeedbackPercentage =
    totalFeedback > 0 ? Math.round((obj.good / (obj.good + obj.bad)) * 100) : 0;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <FeedBack
          good={obj.good}
          neutral={obj.neutral}
          bad={obj.bad}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
