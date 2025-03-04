import PropTypes from "prop-types";
import { QuizButton } from "../QuizMenuButton/QuizButton";
import styles from "./QuizResults.module.css";

export function QuizResult({
  score,
  questions,
  handleRestartQuiz,
  title,
  icon,
}) {
  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>
          Quiz completed
          <span className={styles.scoreTitle}>You scored...</span>
        </h1>
      </div>

      <div className={styles.scoreCardContainer}>
        <div className={styles.scoreCardChildContainer}>
          <div className={styles.titleContainer}>
            <img src={icon} alt={`${title} quiz icon`} />
            <h2 className={styles.title}>{title}</h2>
          </div>

          <div className={styles.scoreContainer}>
            <h2 className={styles.scoreText}>
              {score}
              <span className={styles.scoreTotal}>
                out of {questions.length}
              </span>
            </h2>
          </div>
        </div>

        <QuizButton
          className={styles.submitBtn}
          onClick={handleRestartQuiz}
          aria-label="Play quiz again"
        >
          Play Again
        </QuizButton>
      </div>
    </main>
  );
}

QuizResult.propTypes = {
  score: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleRestartQuiz: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
