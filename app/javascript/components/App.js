import React from "react";
import PropTypes from "prop-types";
import mockdata from "./mockdata.js";
import TriviaIndex from "./pages/TriviaIndex";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import mockquestions from "./mockquestions.js";
import TriviaShow from "./pages/TriviaShow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: mockdata
      //   questions: mockquesions
    };
  }

  getQuestions = (gameCategory, gameDifficulty) => {
    return fetch(
      `https://opentdb.com/api.php?amount=50&category=${gameCategory}&difficulty=${gameDifficulty}`
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

  render() {
    console.log(this.state.questions);
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/triviaindex"
            render={(props) => (
              <TriviaIndex
                url={this.getQuestions}
                categories={this.state.categories}
              />
            )}
          />
          <Route
            path="/triviashow/:id"
            render={(props) => {
              console.log(this.state.questions);
              const id = +props.match.params.id;

              return <TriviaShow question={this.state.questions[id]} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
