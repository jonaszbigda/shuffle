import React from "react";
import "../FormDropdown.css";
import InputField from "./InputField";

function FormDropdown(props) {
  return (
    <div className="dropdown">
      <InputField type="text" label="Genre *" id="genre" />
      <div className="dropdown-content">
        <button type="button">Rock</button>
        <button type="button">Rock</button>
        <button type="button">Rock</button>
        <button type="button">Rock</button>
        <button type="button">Rock</button>
      </div>
    </div>
  );
}

export default FormDropdown;
