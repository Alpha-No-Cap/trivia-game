import React, { useMemo, useState, useEffect } from "react";
import { useParams, useHistory, Redirect, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
const _ = require("lodash");

const TriviaShow = (props) => {
  const { id } = useParams();

  const [isDisabled, setDisabled] = useState(false);
  const history = useHistory();
  const { width, height } = useWindowSize();

  const [showConfetti, setConfetti] = useState(false);

  const nextQuestion = () => {
    const increment = 1;
    if (lives > 0) {
      setDisabled(false);
      history.push(`/triviashow/${+id + increment}`);
    } else {
      setDisabled(true);
    }
  };

  const previousQuestion = () => {
    const increment = 1;
    const route = +id - increment;
    setDisabled(true);
    if (route < 0) {
      return (route = 0 && alert("can not go back"));
    }
    history.push(`/triviashow/${route}`);
  };

  const {
    question,
    updateGameState,
    score,
    lives,
    resetGame,
    questionsLength
  } = props;
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

  const exitToMainMenu = () => {
    resetGame();
  };

  useEffect(
    function () {
      multiple_choice.map((choice) => {
        const btnClicked = document.getElementById(choice);
        const btnCorrect = document.getElementById(question.correct_answer);
        btnClicked.classList.remove("btn-success");
        btnClicked.classList.remove("btn-danger");
        btnCorrect.classList.remove("btn-success");
        btnCorrect.classList.remove("btn-danger");
      });
    },
    [question]
  );

  const handleAnswerSelection = (choice) => {
    setDisabled(true);
    const btnClicked = document.getElementById(choice);
    const btnCorrect = document.getElementById(question.correct_answer);

    console.log(question.correct_answer);
    console.log("id: ", id);
    console.log("question length: ", questionsLength);

    if (lives === 1) {
      btnClicked.classList.add("btn-danger");
      btnCorrect.classList.add("btn-success");
      updateGameState(-5, 1);
      setTimeout(function () {
        alert(
          "You have 0 lives! Game OVER! Click Leader Board button to see your ranking."
        );
      }, 500);
    } else if (
      lives > 0 &&
      parseInt(id) === questionsLength - 1 &&
      choice === question.correct_answer
    ) {
      btnClicked.classList.add("btn-success");
      updateGameState(10, 0);
      setConfetti(true);
    } else if (
      lives > 1 &&
      parseInt(id) === questionsLength - 1 &&
      choice !== question.correct_answer
    ) {
      btnClicked.classList.add("btn-danger");
      btnCorrect.classList.add("btn-success");
      updateGameState(-5, 1);
      setConfetti(true);
    } else if (choice === question.correct_answer) {
      btnClicked.classList.add("btn-success");
      updateGameState(10, 0);
    } else {
      btnClicked.classList.add("btn-danger");
      btnCorrect.classList.add("btn-success");
      updateGameState(-5, 1);
    }
  };

  console.log(score);
  console.log(lives);
  console.log("show cofetti: ", showConfetti);

  return (
    <>
      <div className="show-container">
        <div className="question-container">
          <div className="score-lives-bar">
            <h3 className="score-lives">Score: {score}</h3>
            <h3 className="score-lives"> Lives: {lives}</h3>
          </div>

          <div className="question-answer">
            <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
            {multiple_choice.map((choice) => {
              return (
                <button
                  className="choices-buttons"
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

            {showConfetti && <Confetti width={width} height={height} />}
          </div>
          <br />

          <Button onClick={previousQuestion}>Previous Question</Button>
          <Button onClick={nextQuestion}>Next Question</Button>

          <NavLink to="/triviaindex">
            <Button onClick={exitToMainMenu}>Main Menu</Button>
          </NavLink>

          <Button onClick={handleGameEnd}>Leader Board</Button>
        </div>
      </div>
    </>
  );
};
export default TriviaShow;
