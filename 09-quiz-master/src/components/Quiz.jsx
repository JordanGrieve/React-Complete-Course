import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizIsCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionsIndex = userAnswers.length;

  // Is the quiz over?
  const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handelSelectAnswer(
    selectedAnswer,
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnsewer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizIsCompleteImg} alt="Trophy Icon" />
        <h2>Quiz is compelte</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionsIndex}
        index={activeQuestionsIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnsewer={handleSkipAnsewer}
      />
    </div>
  );
}
