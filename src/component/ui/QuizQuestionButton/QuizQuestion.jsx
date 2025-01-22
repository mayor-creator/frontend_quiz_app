import styles from "./QuizQuestion.module.css";

export function QuizQuestion({ className, type, children, ...delegated }) {
  return (
    <>
      <button className={`${styles.button} ${className}`} {...delegated}>
        <div className={styles.questionTypeBox}>{type}</div>
        <div className={styles.questionBox}>{children}</div>
      </button>
    </>
  );
}

QuizQuestion.propTypes;
