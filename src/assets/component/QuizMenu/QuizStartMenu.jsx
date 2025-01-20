import { ThemeToggle } from "../Theme/Theme";

import { QuizButton } from "../ui/QuizMenuButton/QuizButton.jsx";

import htmlIcon from "../../images/icon-html.svg";
import cssIcon from "../../images/icon-css.svg";
import jsIcon from "../../images/icon-js.svg";
import accessibilityIcon from "../../images/icon-accessibility.svg";
import styles from "./QuizStartMenu.module.css";

export function QuizStartMenu() {
  return (
    <>
      <header>
        <ThemeToggle />
      </header>

      <main>
        <div className={styles.titleContainer}>
          <div className={styles.headerTitleContainer}>
            <h1 className={styles.titleText}>
              Welcome to the{" "}
              <span className={styles.titleSpanText}>Frontend Quiz !</span>
            </h1>
            <p className={styles.subjectText}>Pick a subject to get started.</p>
          </div>
        </div>
        <div>
          <div>
            <QuizButton>
              <div>
                <img src={htmlIcon} alt="html icon" width={24} height={24} />
              </div>
              <div>
                <p>HTML</p>
              </div>
            </QuizButton>
          </div>
          <div>
            <QuizButton>
              <div>
                <img src={cssIcon} alt="css icon" width={24} height={24} />
              </div>
              <div>
                <p>CSS</p>
              </div>
            </QuizButton>
          </div>
          <div>
            <QuizButton>
              <div>
                <img
                  src={jsIcon}
                  alt="javascript icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p>Javascript</p>
              </div>
            </QuizButton>
          </div>
          <div>
            <QuizButton>
              <div>
                <img
                  src={accessibilityIcon}
                  alt="accessibility icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p>Accessibility</p>
              </div>
            </QuizButton>
          </div>
        </div>
      </main>
    </>
  );
}
