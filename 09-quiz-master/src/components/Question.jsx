import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Question({
  questionText,
  answers,
  onSelect,
  selectedAnswer,
  answerState,
  onSkipAnsewer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeOut={onSkipAnsewer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelect}
      />
    </div>
  );
}
