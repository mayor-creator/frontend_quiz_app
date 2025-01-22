import { ThemeToggle } from "../Theme/Theme";
import styles from "./Title.module.css";

export function Title({ title, icon }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <div>
          <img src={icon} alt={`icon-${title}`} />
        </div>
        <div>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </>
  );
}

Title.propTypes;
