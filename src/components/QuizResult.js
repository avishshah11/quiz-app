import React from "react";

const QuizResult = (props) => {
  return (
    <div className="result-screen">
      <h2>Result: {props.result.percentage}%</h2>
      <p>Selected {props.result.correct} correct options out of {props.result.total} questions.</p>
      <button onClick={props.retry}>Retry</button>
    </div>
  );
};

export default QuizResult;
