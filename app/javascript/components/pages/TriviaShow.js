import React, { useMemo } from "react";
// import React, { useState } from "react";
import {
  useParams,
  useState,
  useHistory,
  Redirect,
  NavLink
} from "react-router-dom";
import { Button } from "reactstrap";
const _ = require("lodash");

const TriviaShow = (props) => {
  const { id } = useParams();

  const history = useHistory();

  const nextQuestion = () => {
    const increment = 1;
    history.push(`/triviashow/${+id + increment}`);
  };
  const previousQuestion = () => {
    const increment = 1;
    const route = +id - increment;
    if (route < 0) {
      return (route = 0 && alert("can not go back"));
    }
    history.push(`/triviashow/${route}`);
  };

  const { question, updateGameState, score, lives, resetGame } = props;
  console.log(props.question);
  console.log(id);

  const multiple_choice = useMemo(() => {
    return _.shuffle(
      question.incorrect_answers.concat(question.correct_answer)
    );
  }, [question]);

  const handleGameEnd = () => {
    resetGame();
    history.push("/triviaindex");
  };

  const handleAnswerSelection = (choice) => {
    if (choice === question.correct_answer) {
      return updateGameState(10, 0);
    } else if (lives === 1) {
      handleGameEnd();
    } else {
      updateGameState(-5, 1);
    }
  };

  console.log(score);
  console.log(lives);

  return (
    <>
      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
      {/* <h3>{question.correct_answer}</h3>
      <h3>{question.incorrect_answers}</h3> */}
      <h2>score: {score}</h2>
      <h2>lives: {lives}</h2>
      <div>
        {multiple_choice.map((choice) => {
          return (
            <button
              key={choice}
              onClick={() => {
                handleAnswerSelection(choice);
              }}>
              {choice}
            </button>
          );
        })}
      </div>
      <br />

      <button onClick={previousQuestion}>Previous Question</button>
      <button onClick={nextQuestion}>Next Question</button>

      <NavLink to="/triviaindex">
        <Button>Exit Game</Button>
      </NavLink>
    </>
  );
};
export default TriviaShow;
