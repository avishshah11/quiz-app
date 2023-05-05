import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const Questions = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function goToNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      props.setAnswer(selectedOption);
    });
    setSelectedOption(null);
  }

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(goToNextQuestion, 10000);
    return goToNextQuestion;
  }, [props.question]);

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{props.currentQuestion}</b>
        of
        <b>{props.totalQuestions}</b>
        <div className="main">
          <div className="title">
            <span>Question:</span>
            <p>{props.question.title}</p>
          </div>
          <div className="options">
            {props.question.options.map((option, index) => {
              return (
                <div
                  className={
                    index === selectedOption ? "option active" : "option"
                  }
                  key={index}
                  onClick={() => setSelectedOption(index)}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="control">
        <button onClick={goToNextQuestion}>Next</button>
      </div>
    </div>
  );
};

export default Questions;
