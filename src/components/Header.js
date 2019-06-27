import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="#">
          <h1>
            Shuffle{" "}
            <span>
              <i className="fas fa-random" />
            </span>
          </h1>
        </a>
      </div>
    );
  }
}

export default Header;
