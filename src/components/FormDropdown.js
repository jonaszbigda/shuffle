import React from "react";
import "../FormDropdown.scss";
import "../InputField.scss";

function FormDropdown(props) {
  return (
    <div className="genre-dropdown InputField">
      <label>Genre *</label>
      <select id="selectGenre">
        <option value="Rock">Rock</option>
        <option value="Metal">Metal</option>
        <option value="Electronic">Electronic</option>
        <option value="Rap">Rap</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default FormDropdown;
