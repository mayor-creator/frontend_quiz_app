import styles from "./QuizQuestion.module.css";

export function QuizQuestion({
  className,
  type,
  children,
  isSelected,
  ...delegated
}) {
  return (
    <>
      <button
        className={`${styles.button} ${className} ${
          isSelected ? styles.selected : ""
        }`}
        {...delegated}
      >
        <div
          className={`${styles.questionTypeBox} ${
            isSelected ? styles.selectedBox : ""
          }`}
        >
          {type}
        </div>
        <div className={styles.questionBox}>{children}</div>
      </button>
    </>
  );
}

QuizQuestion.propTypes;
