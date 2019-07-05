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
                id="_title"
                type="text"
                validateField={validateField}
                validate="true"
              />
              <InputField
                validateField={validateField}
                validate="true"
                label="Artist *"
                id="_artist"
                type="text"
              />
              <FormDropdown />
            </div>
            <div className="column">
              <InputField label="Facebook" id="_fb" type="text" />
              <InputField label="Soundcloud" id="_sc" type="text" />
              <InputField label="Other link" id="_www" type="text" />
            </div>
            <div className="column">
              <InputField
                additionalClass="file"
                label={
                  <i className="far fa-image fa-lg">
                    <span> Upload Photo</span>
                  </i>
                }
                id="_image"
                type="file"
              />
              <InputField
                additionalClass="file"
                label={
                  <i className="fas fa-music fa-lg">
                    <span> Upload track</span>
                  </i>
                }
                id="_mp3"
                type="file"
              />
            </div>
          </div>
          <div className="row">
            <InputField
              label="Description *"
              id="_description"
              type="textarea"
            />
          </div>
        </form>
        <div className="registerResponse" id="registerResponse">
          <div id="loader" className="loader" />
          <p id="responseText" />
        </div>
        <button
          type="button"
          id="_submit"
          className="mode-btn"
          onClick={() => sendForm(this.props.username)}
        >
          Submit
        </button>
        <button
          type="button"
          className="mode-btn"
          onClick={() => this.props.setMode("shuffle")}
        >
          Cancel
        </button>
      </div>
    );
  }
}

function sendForm(username) {
  var _title = document.getElementById("_title"),
    _artist = document.getElementById("_artist"),
    _fb = document.getElementById("_fb"),
    _sc = document.getElementById("_sc"),
    _www = document.getElementById("_www"),
    _image = document.getElementById("_image"),
    _mp3 = document.getElementById("_mp3"),
    _description = document.getElementById("_description"),
    _username = username;

  if (validateForm() && _image.files.length !== 0 && _mp3.files.length !== 0) {
    /* axios
      .post("http://localhost/onetrack/src/controllers/upload.php", {
        title: _title,
        artist: _artist,
        fb: _fb,
        sc: _sc,
        www: _www,
        image: _image,
        mp3: _mp3,
        description: _description,
        username: _username
      })
      .then(function(response) {
        console.log("Form valid and sent.");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      }); */
    console.log("VALIDATED AND SENT");
  } else {
    console.log("Form Invalid");
  }
}

function validateForm() {
  if (
    validateField("_title") &&
    validateField("_artist") &&
    validateField("_description")
  ) {
    return true;
  } else {
    return false;
  }
}

function validateField(id) {
  var field = document.getElementById(id);

  if (field.value.length > 0) {
    field.setCustomValidity("");
    return true;
  } else {
    field.setCustomValidity("Cannot leave this field empty, sorry");
    return false;
  }
}

export default AddSong;
