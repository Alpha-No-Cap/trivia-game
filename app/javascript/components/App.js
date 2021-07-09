import React, { Component } from 'react';
import mockdata from './mockdata.js';
import TriviaIndex from './pages/TriviaIndex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TriviaShow from './pages/TriviaShow';
import LeaderBoard from './pages/LeaderBoard';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import About from './pages/About';

const initialState = {
  categories: mockdata,
  questions: [],
  score: 0,
  lives: 4,
  user_id: null,
  games: [],
  category: null,
  difficulty: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getQuestions = (gameCategory, gameDifficulty) => {
    return fetch(
      `https://opentdb.com/api.php?amount=10&category=${gameCategory}&difficulty=${gameDifficulty}`
    )
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        console.log(payload.results);
        this.setState({ questions: payload.results });
      })
      .catch((errors) => {
        console.log('questions errors', errors);
      });
  };

  setPointsAndKillState = (points, kill) => {
    this.setState({
      score: this.state.score + points,
      lives: this.state.lives - kill
    });
  };

  setStateCategoryDifficulty = (category, difficulty) => {
    this.setState({ category: category, difficulty: difficulty });
  };

  resetGame = () => {
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
    fetch('/games')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((payload) => {
        this.setState({ games: payload });
        console.log(payload);
      })
      .catch((errors) => {
        console.log('index errors:', errors);
      });
  };

  createNewGameStat = () => {
    const gameParams = {
      score: this.state.score,
      category: this.state.category,
      difficulty: this.state.difficulty,
      user_id: this.props.current_user.id
    };
    return fetch('/games', {
      body: JSON.stringify({ game: gameParams }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => {
        if (response.status === 422) {
          alert('Please check your submission.');
        }
        return response.json();
      })
      .then((payload) => {
        this.indexGames();
      })
      .catch((errors) => {
        console.log('create errors:', errors);
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

    return (
      <Router>
        <Header />
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
                  setStateCategoryDifficulty={this.setStateCategoryDifficulty}
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
                  categories={this.state.categories}
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
                  updateGameState={this.setPointsAndKillState}
                  lives={this.state.lives}
                  resetGame={this.resetGame}
                  createNewGameStat={this.createNewGameStat}
                  questionsLength={this.state.questions.length}
                  difficulty={this.state.difficulty}
                />
              );
            }}
          />
          <Route path="/about" render={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
