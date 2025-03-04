import PropTypes from "prop-types";
import { ThemeToggle } from "../Theme/Theme";
import styles from "./Title.module.css";

export function Title({ title, icon }) {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <div className={styles.iconWrapper}>
          <img
            src={icon}
            alt={`${title} quiz icon`}
            className={styles.icon}
            width="40"
            height="40"
          />
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>
    </header>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
