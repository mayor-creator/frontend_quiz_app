import { useState } from "react";
import data from "../../data.json";

import { QuizButton } from "../ui/QuizMenuButton/QuizButton.jsx";
import { QuizQuestion } from "../ui/QuizQuestionButton/QuizQuestion.jsx";
import { Title } from "../Title/Title.jsx";
import { QuizResult } from "../ui/Results/QuizResults.jsx";
import styles from "./Javascript.module.css";

const quizData = data.quizzes.find((quiz) => quiz.title === "JavaScript");
const icons = quizData.icon;
const questions = quizData.questions;

export function JavascriptQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
    } else {
      setIsQuizOver(true);
      setShowResults(true);
    }
  };

  //function to reset the quiz state
  const handleQuizPlayAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsQuizOver(false);
  };

  return (
    <>
      <header className={`${styles.headerContainer} ${styles.header}`}>
        <Title icon={icons} title={quizData.title} />
      </header>

      {isQuizOver && showResults ? (
        <QuizResult
          score={score}
          questions={questions}
          icon={icons}
          title={quizData.title}
          handleRestartQuiz={handleQuizPlayAgain}
        />
      ) : (
        <main className={styles.main}>
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

          <div>
            <div className={styles.questionButtonContainer}>
              <ul className={styles.questionList}>
                {currentQuestion.options.map((option, index) => (
                  <li key={index}>
                    <QuizQuestion
                      type={String.fromCharCode(65 + index)}
                      className={styles.btn}
                      onClick={() => handleAnswerSelect(index)}
                      isSelected={selectedAnswer === index}
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
          </div>
        </main>
      )}
    </>
  );
}
