import React from "react";
import axios from "axios";
import InputField from "./InputField";
import FormDropdown from "./FormDropdown";

class AddSong extends React.Component {
  render() {
    return (
      <div className="forms">
        <h1>Submit a song</h1>
        <hr width="80%" />
        <p>
          If you have lots of songs, choose wisely, because you can only upload
          one.
        </p>
        <form>
          <div className="row">
            <div className="column">
              <InputField
                label="Title *"
                id="title"
                type="text"
                validateField={validateField}
                validate="true"
              />
              <InputField
                validateField={validateField}
                validate="true"
                label="Artist *"
                id="artist"
                type="text"
              />
              <FormDropdown />
            </div>
            <div className="column">
              <InputField label="Facebook" id="fb" type="text" />
              <InputField label="Soundcloud" id="sc" type="text" />
              <InputField label="Other link" id="www" type="text" />
            </div>
            <div className="column">
              <InputField
                additionalClass="file"
                label={
                  <i className="far fa-image fa-lg">
                    <span> Upload Photo</span>
                  </i>
                }
                id="image"
                type="file"
              />
              <InputField
                additionalClass="file"
                label={
                  <i className="fas fa-music fa-lg">
                    <span> Upload track</span>
                  </i>
                }
                id="file"
                type="file"
              />
            </div>
          </div>
          <div className="row">
            <InputField
              label="Description *"
              id="description"
              type="textarea"
            />
          </div>
        </form>
        <div className="registerResponse" id="registerResponse">
          <div id="loader" className="loader" />
          <p id="responseText" />
        </div>
        <button type="button" className="mode-btn">
          Submit
        </button>
        <button type="button" className="mode-btn">
          Cancel
        </button>
      </div>
    );
  }
}

function validateField(id) {
  var field = document.getElementById(id);

  if (field.value.length > 0) {
    field.setCustomValidity("");
  } else {
    field.setCustomValidity("Cannot leave this field empty, sorry");
  }
}

export default AddSong;
