import styles from "./QuizQuestion.module.css";

export function QuizQuestion({ className, type, children, ...delegated }) {
  return (
    <>
      <button className={`${styles.button} ${className}`} {...delegated}>
        <div>{type}</div>
        <div>{children}</div>
      </button>
    </>
  );
}

QuizQuestion.propTypes;
