import React from "react";
import PropTypes from "prop-types";
import mockdata from "./mockdata.js";
import TriviaIndex from "./pages/TriviaIndex";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import mockquestions from "./mockquestions.js";
import TriviaShow from "./pages/TriviaShow";
// import Header from './components/Header.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: mockdata,
        questions: [],
        score: 0
    };
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

  addScore = (points) => {
    this.setState({score: this.state.score + points } )
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props

    console.log("questions: ", this.state.questions);
    console.log("logged_in:", logged_in)
    console.log("current user:", current_user)
    return (
      <Router>
        {/* <Header
              logged_in={ logged_in }
              sign_in_route={ sign_in_route }
              sign_out_route={ sign_out_route }
              sign_up_route={ sign_up_route }
              /> */}
        <Switch>
        
          <Route exact path="/" render = {(props) => { 
              return ( <Home  
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                sign_up_route={ new_user_route }
              />)
          }}/>
          { logged_in &&
          <Route
            path="/triviaindex"
            render={(props) => (
              <TriviaIndex
                url={this.getQuestions}
                categories={this.state.categories}
                current_user={ current_user }
              />
            )}
          />}
          <Route
            path="/triviashow/:id"
            render={(props) => {
              console.log(this.state.questions);
              const id = +props.match.params.id;

              return <TriviaShow 
                question={this.state.questions[id]} 
                score = {this.state.score}
                addScore = {this.addScore}
               />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
