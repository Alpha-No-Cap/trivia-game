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
        <h1>home</h1>
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
      </>
    );
  }
}

export default Home;
