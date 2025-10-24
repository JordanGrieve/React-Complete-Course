import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizIsCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answerState, setAnsweredState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionsIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  // Is the quiz over?
  const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handelSelectAnswer(selectedAnswer) {
      setAnsweredState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionsIndex].answers[0]) {
          setAnsweredState("correct");
        } else {
          setAnsweredState("wrong");
        }

        setTimeout(() => {
          setAnsweredState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionsIndex],
  );

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
        questionText={QUESTIONS[activeQuestionsIndex].text}
        answers={[...QUESTIONS[activeQuestionsIndex].answers]}
        onSelect={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnsewer={handleSkipAnsewer}
      />
    </div>
  );
}
