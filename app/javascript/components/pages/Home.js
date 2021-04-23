import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class Home extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      sign_up_route
    } = this.props;

    return (
      <>
        <div className="home-container">
          <h2 className="home-header">Welcome</h2>
          <h4 className="home-instructions">
            This is a fun game of trivia that you can play on your own or with
            your friends! Quench your thirst for knowledge by choosing your
            category and difficulty to start the game. You get more points for
            each question by increasing the difficulty at the start of the game.
            So flex you 🧠 power if you dare. Your final score will be ranked on
            the leaderboard once you go through all the questions of one
            category, or loose all 4 of your lives (by answering incorrectly).
          </h4>
          {!logged_in && (
            <a href={sign_in_route}>
              <Button>Sign In</Button>
            </a>
          )}
          {logged_in && (
            <a href={sign_out_route}>
              <Button>Sign Out</Button>
            </a>
          )}
          {!logged_in && (
            <a href={sign_up_route}>
              <Button>Sign Up</Button>
            </a>
          )}
          {logged_in && (
            <a href="/triviaindex">
              <Button>Play Game</Button>
            </a>
          )}
        </div>
      </>
    );
  }
}

export default Home;
