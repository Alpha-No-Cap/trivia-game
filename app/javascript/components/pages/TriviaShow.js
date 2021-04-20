import React, { useMemo, useState } from "react";
// import React, { useState } from "react";
import {
  useParams,
  useHistory,
  Redirect,
  NavLink
} from "react-router-dom";
import { Button } from "reactstrap";
const _ = require("lodash");

const TriviaShow = (props) => {
  const { id } = useParams();

  const [isDisabled, setDisabled] = useState(false);
  const history = useHistory();

  const nextQuestion = () => {
    const increment = 1;
    setDisabled(false);
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
    props.createNewGameStat();
    resetGame();
    history.push("/leaderboard");
  };

  const handleAnswerSelection = (choice) => {
    setDisabled(true);
    const btnClicked = document.getElementById(choice);
    const btnCorrect = document.getElementById(question.correct_answer)
  
    console.log(question.correct_answer)

    if (choice === question.correct_answer) {
      btnClicked.classList.add("btn-success");
      updateGameState(10, 0);
    } else if (lives === 1) {
      handleGameEnd();
    } else {
      btnClicked.classList.add("btn-danger");
      btnCorrect.classList.add("btn-success");
      // find correct choice and add class to that
      updateGameState(-5, 1);
    }
  };

  console.log(score);
  console.log(lives);

  return (
    <>
    <div className="show-container">
      <div className="question-container">
        <div className="score-lives-bar">
        <h2>score: {score}</h2>
        <h2>lives: {lives}</h2> 
        <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
        </div>
        
        <div>
          {multiple_choice.map((choice) => {
            return (
              <button
              disabled={isDisabled}
              key={choice}
              id={choice}
              onClick={() => {
                handleAnswerSelection(choice);
              }}>
                <h4 dangerouslySetInnerHTML={{ __html: choice }} />
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
      </div>
    </div>
    </>
  );
};
export default TriviaShow;
