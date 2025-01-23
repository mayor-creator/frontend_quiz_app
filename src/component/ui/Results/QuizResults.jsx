import { QuizButton } from "../QuizMenuButton/QuizButton";

export function QuizResult({
  score,
  questions,
  handleRestartQuiz,
  title,
  icon,
}) {
  return (
    <>
      <div>
        <h1>
          Quiz completed <span>You scored...</span>
        </h1>
      </div>
      <div>
        <div>
          <div>
            <img src={icon} alt={`icon-${title}`} />
          </div>
          <div>
            <h2>{title}</h2>
          </div>
        </div>
        <div>
          <h2>{score}</h2>
          <p>out of {questions.length}</p>
        </div>
        <QuizButton onClick={handleRestartQuiz}>Play Again</QuizButton>
      </div>
    </>
  );
}

QuizResult.propTypes;
