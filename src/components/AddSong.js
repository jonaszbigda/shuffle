import React from "react";
import axios from "axios";
import InputField from "./InputField";
import FormDropdown from "./FormDropdown";

class AddSong extends React.Component {
  sendForm = () => {
    var _title = document.getElementById("_title"),
      _artist = document.getElementById("_artist"),
      _fb = document.getElementById("_fb"),
      _sc = document.getElementById("_sc"),
      _www = document.getElementById("_www"),
      _image = document.getElementById("_image"),
      _mp3 = document.getElementById("_mp3"),
      _description = document.getElementById("_description"),
      _genre = document.getElementById("selectGenre"),
      _username = this.props.username,
      loader = document.getElementById("loader"),
      responseText = document.getElementById("responseText");

    if (
      validateForm() &&
      _image.files.length !== 0 &&
      _mp3.files.length !== 0 &&
      isJPG(_image.files[0].name) &&
      isMP3(_mp3.files[0].name)
    ) {
      loader.classList.add("show");
      responseText.innerHTML = "Uploading...";

      var formData = new FormData();

      formData.append("title", _title.value);
      formData.append("artist", _artist.value);
      formData.append("fb", _fb.value);
      formData.append("sc", _sc.value);
      formData.append("www", _www.value);
      formData.append("description", _description.value);
      formData.append("username", _username);
      formData.append("image", _image.files[0]);
      formData.append("mp3", _mp3.files[0]);
      formData.append("genre", _genre.value);

      axios
        .post("http://localhost/onetrack/src/controllers/upload.php", formData)
        .then(response => {
          loader.classList.remove("show");
          responseText.innerHTML = "Upload completed.";
          console.log("AJAX sent.");
          var onUpload = () => this.props.onUpload(response.data.song_id);
          onUpload();
        })
        .catch(function(error) {
          loader.classList.remove("show");
          console.log(error);
        });
    } else {
      responseText.innerHTML = "Please fill required fields.";
    }
  };

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
                  <i id="image-icon" className="far fa-image fa-lg">
                    <span> Upload Photo</span>
                  </i>
                }
                id="_image"
                type="file"
                change={() =>
                  isJPG(document.getElementById("_image").files[0].name)
                }
              />
              <InputField
                additionalClass="file"
                label={
                  <i id="mp3-icon" className="fas fa-music fa-lg">
                    <span> Upload track</span>
                  </i>
                }
                id="_mp3"
                type="file"
                change={() =>
                  isMP3(document.getElementById("_mp3").files[0].name)
                }
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
        <div className="registerResponse" id="songResponse">
          <div id="loader" className="loader" />
          <p id="responseText" />
        </div>
        <button
          type="button"
          id="_submit"
          className="mode-btn"
          onClick={this.sendForm.bind(this)}
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

function getExtension(filename) {
  var parts = filename.split(".");
  return parts[parts.length - 1];
}

function isJPG(filename) {
  var ext = getExtension(filename);
  if (ext.toLowerCase() === "jpg") {
    if (!document.getElementById("image-icon").classList.contains("fa-check")) {
      document.getElementById("image-icon").classList.remove("far", "fa-image");
      document.getElementById("image-icon").classList.add("fas", "fa-check");
    }
    return true;
  } else {
    if (document.getElementById("image-icon").classList.contains("fa-check")) {
      document.getElementById("image-icon").classList.remove("fas", "fa-check");
      document.getElementById("image-icon").classList.add("far", "fa-image");
    }
    return false;
  }
}

function isMP3(filename) {
  var ext = getExtension(filename);
  if (ext.toLowerCase() === "mp3") {
    if (!document.getElementById("mp3-icon").classList.contains("fa-check")) {
      document.getElementById("mp3-icon").classList.remove("fa-music");
      document.getElementById("mp3-icon").classList.add("fa-check");
    }
    return true;
  } else {
    if (document.getElementById("mp3-icon").classList.contains("fa-check")) {
      document.getElementById("mp3-icon").classList.remove("fa-check");
      document.getElementById("mp3-icon").classList.add("fa-music");
    }
    return false;
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
