import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div className="menu">
        <button className="btn logInButton" type="button">
          Log In
        </button>
        <button className="btn signUpButton" type="button">
          Sign Up
        </button>
        <i className="fas fa-caret-down fa-lg" />
      </div>
    );
  }
}

export default Menu;
