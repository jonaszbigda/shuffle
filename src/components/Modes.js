import React from "react";
import Genre from "./Genre";

function Modes(props) {
  if (props.mode === "top10") {
    return (
      <div className="modes">
        <button
          id="shuffle"
          className="mode-btn"
          type="button"
          onClick={() => {
            props.setMode("shuffle");
          }}
        >
          Shuffle
        </button>
        <button
          id="top10"
          className="mode-btn active-mode"
          type="button"
          onClick={() => {
            props.setMode("top10");
          }}
        >
          Top 5
        </button>
        <Genre setGenre={props.setGenre} genre={props.genre} />
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
            props.setMode("shuffle");
          }}
        >
          Shuffle
        </button>
        <button
          id="top10"
          className="mode-btn"
          type="button"
          onClick={() => {
            props.setMode("top10");
          }}
        >
          Top 5
        </button>
        <Genre setGenre={props.setGenre} genre={props.genre} />
      </div>
    );
  }
}

export default Modes;
