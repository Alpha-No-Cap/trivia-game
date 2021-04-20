import React from "react";
import PropTypes from "prop-types";
import mockdata from "./mockdata.js";
import TriviaIndex from "./pages/TriviaIndex";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import mockquestions from "./mockquestions.js";
import TriviaShow from "./pages/TriviaShow";
import LeaderBoard from "./pages/LeaderBoard";
// import Header from './components/Header.js'

const initialState = {
  categories: mockdata,
  questions: [],
  score: 0,
  lives: 4,
  user_id: null,
  games: []
  // category: gameCategory,
  // difficulty: gameDificulty
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getQuestions = (gameCategory, gameDifficulty) => {
    return fetch(
      `https://opentdb.com/api.php?amount=15&category=${gameCategory}&difficulty=${gameDifficulty}`
    )
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        console.log(payload.results);
        this.setState({ questions: payload.results });
      })
      .catch((errors) => {
        console.log("questions errors", errors);
      });
  };

  updateGameState = (points, kill) => {
    this.setState({ score: this.state.score + points });
    this.setState({ lives: this.state.lives - kill });
  };

  resetGame = () => {
    // save final score
    // reset score, lives, questions to initial state
    this.setState({
      questions: initialState.questions,
      score: initialState.score,
      lives: initialState.lives
    });
  };

  componentDidMount() {
    this.indexGames();
  }

  indexGames = () => {
    fetch("http://localhost:3000//games")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((payload) => {
        this.setState({ games: payload });
        console.log(payload);
      })
      .catch((errors) => {
        console.log("index errors:", errors);
      });
  };

  createNewGameStat = (newScore) => {
    return fetch("http://localhost:3000//games", {
      body: JSON.stringify(newScore),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Please check your submission.");
        }
        return response.json();
      })
      .then((payload) => {
        this.indexGames();
      })
      .catch((errors) => {
        console.log("create errors:", errors);
      });
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props;

    console.log("questions: ", this.state.questions);
    console.log("logged_in:", logged_in);
    console.log("current user:", current_user);
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Home
                  logged_in={logged_in}
                  sign_in_route={sign_in_route}
                  sign_out_route={sign_out_route}
                  sign_up_route={new_user_route}
                />
              );
            }}
          />
          {logged_in && (
            <Route
              path="/triviaindex"
              render={(props) => (
                <TriviaIndex
                  url={this.getQuestions}
                  categories={this.state.categories}
                  current_user={current_user}
                />
              )}
            />
          )}
          {logged_in && (
            <Route
              path="/leaderboard"
              render={(props) => (
                <LeaderBoard
                  games={this.state.games}
                  current_user={current_user}
                />
              )}
            />
          )}
          <Route
            path="/triviashow/:id"
            render={(props) => {
              console.log(this.state.questions);
              const id = +props.match.params.id;

              return (
                <TriviaShow
                  question={this.state.questions[id]}
                  score={this.state.score}
                  updateGameState={this.updateGameState}
                  lives={this.state.lives}
                  resetGame={this.resetGame}
                  createNewGameStat={this.createNewGameStat}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
