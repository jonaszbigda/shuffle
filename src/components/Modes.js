import React from "react";

class Modes extends React.Component {
  render() {
    return (
      <div className="modes">
        <button
          id="shuffle"
          className="mode-btn active-mode"
          type="button"
          onClick=""
        >
          Shuffle
        </button>
        <button id="top10" className="mode-btn" type="button" onClick="">
          Top 10
        </button>
      </div>
    );
  }
}

export default Modes;
