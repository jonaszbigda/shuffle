import React from "react";
import Menu from "./Menu";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="logoSection">
            <button
              className="headerLogoButton"
              type="button"
              onClick={() => {
                if (this.props.mode === "shuffle") {
                  this.props.reload();
                } else {
                  this.props.setMode("shuffle");
                }
              }}
            >
              IndieTune{" "}
              <span>
                <i className="far fa-play-circle" />
              </span>
            </button>
            <p id="slogan">Empower Indies (beta)</p>
          </div>
          <Menu
            song_id={this.props.song_id}
            logOut={this.props.logOut}
            username={this.props.username}
            setMode={this.props.setMode}
            loggedIn={this.props.loggedIn}
          />
        </div>
        <h3 id="splash-text">
          Press the IndieTune logo and get an randomly picked indie song. You
          can choose a genre if you like.
          <br /> No premium accounts. Equal chance to get discovered.
        </h3>
      </div>
    );
  }
}

export default Header;
