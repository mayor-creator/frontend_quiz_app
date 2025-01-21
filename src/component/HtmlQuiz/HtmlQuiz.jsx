import { useState } from "react";

import { QuizButton } from "../ui/QuizMenuButton/QuizButton.jsx";
import { QuizQuestion } from "../ui/QuizQuestionButton/QuizQuestion.jsx";
import { Title } from "../Title/Title.jsx";

import data from "../../data.json";

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
      <header>
        <Title icon={icons} title={quizData.title} />
      </header>

      <main>
        <div>
          <div>
            <p>
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          <div>
            <p>{currentQuestion.question}</p>
          </div>
        </div>

        <div>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <QuizQuestion
                  type={String.fromCharCode(65 + index)}
                  onClick={() => handleAnswerSelect(index)}
                  style={{
                    backgroundColor:
                      selectedAnswer === index ? "#adc2e1" : "white",
                  }}
                >
                  <div>{option}</div>
                </QuizQuestion>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <QuizButton
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            Submit
          </QuizButton>
        </div>
      </main>
    </>
  );
}
