import React from "react";
import Genre from "./Genre";

class Modes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "shuffle"
    };
  }

  setMode(inMode) {
    this.setState({
      mode: inMode
    });
  }

  render() {
    if (this.state.mode === "top10") {
      return (
        <div className="modes">
          <button
            id="shuffle"
            className="mode-btn"
            type="button"
            onClick={() => {
              this.setMode("shuffle");
            }}
          >
            Shuffle
          </button>
          <button
            id="top10"
            className="mode-btn active-mode"
            type="button"
            onClick={() => {
              this.setMode("top10");
            }}
          >
            Top 10
          </button>
          <Genre setGenre={this.props.setGenre} genre={this.props.genre} />
        </div>
      );
    } else {
      return (
        <div className="modes">
          <button
            id="shuffle"
            className="mode-btn active-mode"
            type="button"
            onClick={() => {
              this.setMode("shuffle");
            }}
          >
            Shuffle
          </button>
          <button
            id="top10"
            className="mode-btn"
            type="button"
            onClick={() => {
              this.setMode("top10");
            }}
          >
            Top 10
          </button>
          <Genre setGenre={this.props.setGenre} genre={this.props.genre} />
        </div>
      );
    }
  }
}

export default Modes;
