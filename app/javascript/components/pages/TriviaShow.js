import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import smart_donkey from '/app/assets/images/smart_donkey_two.png';
import stupid_donkey from '/app/assets/images/stupid_donkey.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
const _ = require('lodash');

const DIFFICULTY_SCORE_MAP = {
  easy: { positive: 10, negative: -5 },
  medium: { positive: 20, negative: -10 },
  hard: { positive: 30, negative: -15 }
};

const TriviaShow = (props) => {
  const {
    question,
    updateGameState,
    score,
    lives,
    resetGame,
    questionsLength,
    difficulty
  } = props;

  const { id } = useParams();
  const history = useHistory();

  const [isDisabled, setDisabled] = useState(false);

  const [showWinnerModal, setWinnerModal] = useState(false);
  const [showLoserModal, setLoserModal] = useState(false);

  const [showConfetti, setConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const [showWinPicture, setWinPicture] = useState(false);
  const [showWrongPicture, setWrongPicture] = useState(false);

  const nextQuestion = () => {
    const increment = 1;
    if (lives > 0) {
      setDisabled(false);
      history.push(`/triviashow/${+id + increment}`);
    } else {
      setDisabled(true);
    }
    setWinPicture(false);
    setWrongPicture(false);
  };

  const previousQuestion = () => {
    const increment = 1;
    const route = +id - increment;
    setDisabled(true);
    if (route < 0) {
      return (route = 0 && alert('can not go back'));
    }
    history.push(`/triviashow/${route}`);
  };

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
    history.push('/leaderboard');
  };

  const exitToMainMenu = () => {
    resetGame();
  };

  useEffect(
    function () {
      multiple_choice.map((choice) => {
        const btnClicked = document.getElementById(choice);
        const btnCorrect = document.getElementById(question.correct_answer);
        btnClicked.classList.remove('btn-success');
        btnClicked.classList.remove('btn-danger');
        btnCorrect.classList.remove('btn-success');
        btnCorrect.classList.remove('btn-danger');
      });
    },
    [question]
  );

  const handleAnswerSelection = (choice) => {
    setDisabled(true);
    const btnClicked = document.getElementById(choice);
    const btnCorrect = document.getElementById(question.correct_answer);

    console.log(question.correct_answer);
    console.log('id: ', id);
    console.log('question length: ', questionsLength);

    if (lives === 1 && choice !== question.correct_answer) {
      btnClicked.classList.add('btn-danger');
      btnCorrect.classList.add('btn-success');
      updateGameState(DIFFICULTY_SCORE_MAP[difficulty]['negative'], 1);
      setWrongPicture(true);
      setTimeout(function () {
        setLoserModal(true);
      }, 500);
    } else if (
      lives > 0 &&
      parseInt(id) === questionsLength - 1 &&
      choice === question.correct_answer
    ) {
      btnClicked.classList.add('btn-success');
      updateGameState(DIFFICULTY_SCORE_MAP[difficulty]['positive'], 0);
      setConfetti(true);
      setWinPicture(true);
      setTimeout(function () {
        setWinnerModal(true);
      }, 500);
    } else if (
      lives > 1 &&
      parseInt(id) === questionsLength - 1 &&
      choice !== question.correct_answer
    ) {
      btnClicked.classList.add('btn-danger');
      btnCorrect.classList.add('btn-success');
      updateGameState(DIFFICULTY_SCORE_MAP[difficulty]['negative'], 1);
      setConfetti(true);
      setWrongPicture(true);
      setTimeout(function () {
        setWinnerModal(true);
      }, 500);
    } else if (choice === question.correct_answer) {
      btnClicked.classList.add('btn-success');
      updateGameState(DIFFICULTY_SCORE_MAP[difficulty]['positive'], 0);
      setWinPicture(true);
    } else {
      btnClicked.classList.add('btn-danger');
      btnCorrect.classList.add('btn-success');
      updateGameState(DIFFICULTY_SCORE_MAP[difficulty]['negative'], 1);
      setWrongPicture(true);
    }
  };

  console.log(score);
  console.log(lives);
  console.log('show cofetti: ', showConfetti);

  return (
    <>
      {showWinPicture && (
        <img src={smart_donkey} className="donkey-correct"></img>
      )}
      <div className="show-container">
        <div className="question-container">
          <div className="score-lives-bar">
            <h3 className="score-lives">Score: {score}</h3>
            <NavLink to="/triviaindex">
              <Button onClick={exitToMainMenu}>Main Menu</Button>
            </NavLink>
            <h3 className="score-lives"> Lives: {lives}</h3>
          </div>

          {showWinnerModal && (
            <div>
              <Modal isOpen={showWinnerModal}>
                <ModalHeader>Congrats You Won!</ModalHeader>
                <ModalBody>
                  You have proven your knowledge! Please continute to the Leader
                  Board to see your final score.
                </ModalBody>
                <ModalFooter>
                  <Button onClick={handleGameEnd}>Leader Board</Button>
                </ModalFooter>
              </Modal>
            </div>
          )}
          {showLoserModal && (
            <div className="loser-modal">
              <Modal isOpen={showLoserModal}>
                <ModalHeader className="loser-modal-header">
                  Game Over!
                </ModalHeader>
                <ModalBody className="loser-modal-body">
                  LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! Please continute to
                  the Leader Board to see your final score.
                </ModalBody>
                <ModalFooter className="loser-modal-footer">
                  <Button onClick={handleGameEnd}>Leader Board</Button>
                </ModalFooter>
              </Modal>
            </div>
          )}

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

          <div className="nxt-prev-btns-container">
            <Button className="nxt-prev-btns" onClick={previousQuestion}>
              Previous Question
            </Button>
            <Button className="nxt-prev-btns" onClick={nextQuestion}>
              Next Question
            </Button>
          </div>
        </div>
      </div>
      {showWrongPicture && (
        <img src={stupid_donkey} className="donkey-wrong"></img>
      )}
    </>
  );
};
export default TriviaShow;
