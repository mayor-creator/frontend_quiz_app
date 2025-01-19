import { useId, useState } from "react";

import lightIcon from "../../images/icon-sun-light.svg";
import darkIcon from "../../images/icon-moon-light.svg";
import styles from "./Theme.module.css";

export function ThemeToggle() {
  const id = useId();
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className={styles.themeContainer}>
        <div>
          <img src={lightIcon} alt="sun icon" />
        </div>
        <label htmlFor={id} className={styles.switch}>
          <input
            type="checkbox"
            checked={isToggled}
            onChange={handleToggle}
            id={id}
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
