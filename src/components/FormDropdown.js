import React from "react";
import "../FormDropdown.css";
import "../InputField.css";

function FormDropdown(props) {
  return (
    <div className="genre-dropdown InputField">
      <label>Genre *</label>
      <select>
        <option>Rock</option>
        <option>Metal</option>
        <option>Electronic</option>
        <option>Rap</option>
        <option>Other</option>
      </select>
    </div>
  );
}

export default FormDropdown;
