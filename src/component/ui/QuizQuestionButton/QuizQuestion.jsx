import styles from "./QuizQuestion.module.css";
import PropTypes from "prop-types";

export function QuizQuestion({
  className = "",
  type,
  children,
  isSelected = false,
  ...delegated
}) {
  return (
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
  );
}

QuizQuestion.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
};
