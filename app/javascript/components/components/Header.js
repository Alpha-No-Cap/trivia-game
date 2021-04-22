import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-container">
          <h2>Thirsty For Knowledge</h2>
        </div>
      </>
    );
  }
}

export default Header;
