import styles from "./QuizButton.module.css";

export function QuizButton({ className = "", children, ...delegated }) {
  return (
    <button className={`${styles.button} ${className}`} {...delegated}>
      {children}
    </button>
  );
}

QuizButton.propTypes;
