import { useState } from "react";

import { ThemeToggle } from "../Theme/Theme.jsx";
import { QuizButton } from "../ui/QuizMenuButton/QuizButton.jsx";
import { HtmlQuiz } from "../HtmlQuiz/HtmlQuiz.jsx";

import htmlIcon from "../../assets/images/icon-html.svg";
import cssIcon from "../../assets/images/icon-css.svg";
import jsIcon from "../../assets/images/icon-js.svg";
import accessibilityIcon from "../../assets/images/icon-accessibility.svg";
import styles from "./QuizStartMenu.module.css";

export function QuizStartMenu() {
  const [isHtmlQuizStarted, setIsHtmlQuizStarted] = useState(false);

  // function to start the HTML quiz
  const handleHtmlQuizStart = () => {
    setIsHtmlQuizStarted(true);
  };

  return (
    <>
      {isHtmlQuizStarted && <HtmlQuiz />}

      {!isHtmlQuizStarted && (
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
                <p className={styles.subjectText}>
                  Pick a subject to get started.
                </p>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div>
                <QuizButton
                  className={styles.btn}
                  onClick={handleHtmlQuizStart}
                >
                  <div className={`${styles.imgBox} ${styles.html}`}>
                    <img
                      src={htmlIcon}
                      alt="html icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.textBox}>
                    <p>HTML</p>
                  </div>
                </QuizButton>
              </div>
              <div>
                <QuizButton className={styles.btn}>
                  <div className={`${styles.imgBox} ${styles.css}`}>
                    <img src={cssIcon} alt="css icon" width={24} height={24} />
                  </div>
                  <div className={styles.textBox}>
                    <p>CSS</p>
                  </div>
                </QuizButton>
              </div>
              <div>
                <QuizButton className={styles.btn}>
                  <div className={`${styles.imgBox} ${styles.js}`}>
                    <img
                      src={jsIcon}
                      alt="javascript icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.textBox}>
                    <p>Javascript</p>
                  </div>
                </QuizButton>
              </div>
              <div>
                <QuizButton className={styles.btn}>
                  <div className={`${styles.imgBox} ${styles.accessibility}`}>
                    <img
                      src={accessibilityIcon}
                      alt="accessibility icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.textBox}>
                    <p>Accessibility</p>
                  </div>
                </QuizButton>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
