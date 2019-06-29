import React from "react";

function Genre(props) {
  return (
    <div>
      <div className="genreDropdown">
        <button id="currentGenre" type="button" className="mode-btn">
          {props.genre}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </button>
        <div className="dropdownContent">
          <button
            type="button"
            className="mode-btn"
            onClick={() => props.setGenre("Genre")}
          >
            All
          </button>
          <button
            type="button"
            className="mode-btn"
            onClick={() => props.setGenre("Electronic")}
          >
            Electronic
          </button>
          <button
            type="button"
            className="mode-btn"
            onClick={() => props.setGenre("Rock")}
          >
            Rock
          </button>
          <button
            type="button"
            className="mode-btn"
            onClick={() => props.setGenre("Metal")}
          >
            Metal
          </button>
          <button
            type="button"
            className="mode-btn"
            onClick={() => props.setGenre("Other")}
          >
            Other
          </button>
        </div>
      </div>
    </div>
  );
}

export default Genre;
