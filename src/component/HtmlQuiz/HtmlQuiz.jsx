import { useState } from "react";

import { QuizButton } from "../ui/QuizMenuButton/QuizButton.jsx";
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
                <QuizButton type={String.fromCharCode(65 + index)}>
                  <div>{option}</div>
                </QuizButton>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <QuizButton>Submit</QuizButton>
        </div>
      </main>
    </>
  );
}
