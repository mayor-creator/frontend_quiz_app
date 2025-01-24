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
    <>
      <main>
        <div className={styles.headerContainer}>
          <h1 className={styles.headerTitle}>
            Quiz completed{" "}
            <span className={styles.scoreTitle}>You scored...</span>
          </h1>
        </div>
        <div className={styles.scoreCardContainer}>
          <div className={styles.scoreCardChildContainer}>
            <div className={styles.titleContainer}>
              <div>
                <img src={icon} alt={`icon-${title}`} />
              </div>
              <div>
                <h2 className={styles.title}>{title}</h2>
              </div>
            </div>
            <div>
              <h2 className={styles.scoreText}>{score}</h2>
            </div>
            <div>
              <p className={styles.scoreTotal}>out of {questions.length}</p>
            </div>
          </div>
          <QuizButton className={styles.submitBtn} onClick={handleRestartQuiz}>
            Play Again
          </QuizButton>
        </div>
      </main>
    </>
  );
}

QuizResult.propTypes;
