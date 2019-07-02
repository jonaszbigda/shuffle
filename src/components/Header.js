import React from "react";
import Menu from "./Menu";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="logoSection">
            <button
              className="headerLogoButton"
              type="button"
              onClick={() => this.props.setMode("shuffle")}
            >
              Shuffle{" "}
              <span>
                <i className="fas fa-random" />
              </span>
            </button>
            <p>Empower indies</p>
          </div>
          <Menu
            logOut={this.props.logOut}
            username={this.props.username}
            setMode={this.props.setMode}
            loggedIn={this.props.loggedIn}
          />
        </div>
        <h3 id="splash-text">
          Choose a genre and get randomly picked indie songs. No premium
          accounts. Equal chance to get discovered.
        </h3>
      </div>
    );
  }
}

export default Header;
