import React from "react";

class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <a href="https://www.soundcloud.com">
          <i className="fab fa-soundcloud fa-2x" />
        </a>
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook-f fa-2x" />
        </a>
        <a href="#">
          <i className="fas fa-globe-europe fa-2x" />
        </a>
      </div>
    );
  }
}

export default Social;
