import React from "react";

function Menu(props) {
  if (props.loggedIn === true) {
    return (
      <div className="menu">
        <button className="btn logInButton" type="button">
          Add Song
        </button>
        <i className="fas fa-caret-down fa-lg" />
      </div>
    );
  } else {
    return (
      <div className="menu">
        <button className="btn logInButton" type="button">
          Log In
        </button>
        <button
          className="btn signUpButton"
          type="button"
          onClick={() => props.setMode("register")}
        >
          Register
        </button>
        <button
          type="button"
          className="dropdownButton"
          onClick={clickDropdown}
        >
          <i className="fas fa-caret-down fa-lg" />
        </button>
        <div id="dropdown" className="menuDropdown">
          <button type="button" className="menu-button">
            About
          </button>
          <button type="button" className="menu-button">
            Contribute
          </button>
          <button type="button" className="menu-button">
            Submit a song
          </button>
          <button type="button" className="menu-button">
            Contact
          </button>
        </div>
      </div>
    );
  }
}

function clickDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (
    !event.target.matches(".dropdownButton") &&
    !event.target.matches(".fa-caret-down")
  ) {
    if (document.getElementById("dropdown").classList.contains("show")) {
      document.getElementById("dropdown").classList.remove("show");
    }
  }
};

export default Menu;
