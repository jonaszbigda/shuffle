import React from "react";

function Genre(props) {
  return (
    <div>
      <div className="genreDropdown">
        <button type="button" className="mode-btn">
          Genre
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Genre;
