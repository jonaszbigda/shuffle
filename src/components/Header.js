import React from "react";
import Menu from "./Menu";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="logoSection">
            <a href="#" onClick={this.props.reload}>
              <h1>
                Shuffle{" "}
                <span>
                  <i className="fas fa-random" />
                </span>
              </h1>
            </a>
            <p>Empower indies</p>
          </div>
          <Menu loggedIn={this.props.loggedIn} />
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
