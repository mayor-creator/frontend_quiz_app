import { useState } from "react";

import { QuizButton } from "../ui/QuizMenuButton/QuizButton.jsx";
import { QuizQuestion } from "../ui/QuizQuestionButton/QuizQuestion.jsx";
import { Title } from "../Title/Title.jsx";
import data from "../../data.json";
import styles from "./HtmlQuiz.module.css";

const quizData = data.quizzes.find((quiz) => quiz.title === "HTML");
const icons = quizData.icon;
const questions = quizData.questions;

export function HtmlQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    if (
      selectedAnswer === currentQuestion.options.indexOf(currentQuestion.answer)
    ) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <Title icon={icons} title={quizData.title} />
      </header>

      <main>
        <div className={styles.questionContainer}>
          <div>
            <p className={styles.questionTextNumber}>
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          <div>
            <p className={styles.questionText}>{currentQuestion.question}</p>
          </div>
        </div>

        <div className={styles.questionButtonContainer}>
          <ul className={styles.questionList}>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <QuizQuestion
                  type={String.fromCharCode(65 + index)}
                  onClick={() => handleAnswerSelect(index)}
                  className={styles.btn}
                >
                  <p>{option}</p>
                </QuizQuestion>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.submitBtnContainer}>
          <QuizButton
            className={styles.submitBtn}
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            Submit Answer
          </QuizButton>
        </div>
      </main>
    </>
  );
}