import styles from "./QuizButton.module.css";
import PropTypes from "prop-types";
import { memo } from "react";

export const QuizButton = memo(function QuizButton({
  className = "",
  children,
  disabled,
  ...delegated
}) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      {...delegated}
    >
      {children}
    </button>
  );
});

QuizButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};
