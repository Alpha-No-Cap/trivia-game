import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-container">
          <a href="/" className="home-link">
            <h2>Thirsty For Knowledge</h2>
          </a>
        </div>
      </>
    );
  }
}

export default Header;
