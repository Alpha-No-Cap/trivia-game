import React from "react";
// import React, { useState } from "react";
import {
  useParams,
  useState,
  useHistory,
  Redirect,
  NavLink
} from "react-router-dom";
import { Button } from "reactstrap";

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

  const { question } = props;
  console.log(props.question);
  console.log(id);

  const _ = require('lodash');
  const multiple_choice = _.shuffle(question.incorrect_answers.concat(question.correct_answer));

  const handleAnswerSelection = (choice) => () => {
    if(choice === question.correct_answer){
      return alert("CONGRATUATIONS: YOU ARE RIGHT!!")
    } else {
      return alert("WRONG ANSWER")
    }
  }

  return (
    <>
      <h3>{question.question}</h3>
      <h3>{question.correct_answer}</h3>
      <h3>{question.incorrect_answers}</h3>
      <div>
        { multiple_choice.map(choice => {
          return (
            <button key={choice} onClick={handleAnswerSelection(choice)}>
              {choice}
            </button>
          )
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
