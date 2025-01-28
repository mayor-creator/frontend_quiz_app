import { useId, useContext } from "react";

import { ThemeContext } from "./ThemeContext";

import lightIcon from "../../assets/images/icon-sun-light.svg";
import darkIcon from "../../assets/images/icon-moon-light.svg";
import styles from "./Theme.module.css";

export function ThemeToggle() {
  const id = useId();
  const { theme, toggleTheme } = useContext(ThemeContext);

  //set the checkbox's checked state based on the theme
  const isChecked = theme === "dark";

  return (
    <>
      <div className={styles.themeContainer}>
        <div>
          <img src={lightIcon} alt="sun icon" />
        </div>
        <label htmlFor={id} className={styles.switch}>
          <input
            type="checkbox"
            onChange={toggleTheme}
            id={id}
            checked={isChecked}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <div>
          <img src={darkIcon} alt="moon icon" />
        </div>
      </div>
    </>
  );
}
