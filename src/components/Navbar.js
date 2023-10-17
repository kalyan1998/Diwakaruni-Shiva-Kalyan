import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <a href="#about">About</a>
          <a href="#portfolio">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Experience</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
