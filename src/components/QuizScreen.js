import React, { useState } from "react";
import QuestionsList from "../data/questions.json";
import Questions from "./Questions.js";
import QuizResult from "./QuizResult";

const QuizScreen = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(QuestionsList.length)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionsList.length;

  const calculateResult = () => {
    let correct = 0;
    QuestionsList.forEach((question, index) => {
      if (question.correctOptionsIndex === markedAnswers[index]) {
        correct++;
      }
    });
    return {
      total: QuestionsList.length,
      correct: correct,
      percentage: (correct / QuestionsList.length) * 100,
    };
  };
  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult 
        result={calculateResult()} 
        retry={props.retry} />
      ) : (
        <Questions
          question={QuestionsList[currentQuestionIndex]}
          totalQuestions={QuestionsList.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex - 1] = index;
              return newArr;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
};

export default QuizScreen;
