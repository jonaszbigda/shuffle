import React from "react";
import axios from "axios";

class Register extends React.Component {
  render() {
    return (
      <div className="forms">
        <h1>Register</h1>
        <hr width="80%" />
        <form>
          <label htmlFor="username">Username</label>
          <input
            className="inputs"
            type="text"
            id="username"
            onChange={validateUsername}
          />
          <label htmlFor="password">Password (min. 6 characters)</label>
          <input type="password" id="password" onChange={validatePassword} />
        </form>
        <div className="registerResponse" id="registerResponse">
          <div id="loader" className="loader" />
          <p id="responseText" />
        </div>
        <button type="button" className="mode-btn" onClick={register}>
          Register
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

function validateUsername() {
  var username = document.getElementById("username");
  if (username.value.length < 1) {
    username.setCustomValidity("Username must be at least 1 character long.");
    return false;
  } else {
    username.setCustomValidity("");
    return true;
  }
}

function validatePassword() {
  var pass = document.getElementById("password");
  if (pass.value.length >= 6) {
    pass.setCustomValidity("");
    return true;
  } else {
    pass.setCustomValidity(
      "Password is too short or contains forbidden characters."
    );
    return false;
  }
}

function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var loader = document.getElementById("loader");
  var responseText = document.getElementById("responseText");

  loader.classList.add("show");

  if (validateUsername() && validatePassword()) {
    axios({
      method: "post",
      url: "https://www.indietune.net/controllers/registerNewUser.php",
      data: {
        password: password,
        username: username
      }
    })
      .then(function(response) {
        switch (response.status) {
          case 201:
            responseText.textContent = "Registration Successfull";
            break;
          case 205:
            responseText.textContent = "Username already exists";
            break;
          case 204:
            responseText.textContent = "Something went wrong, try again";
            break;
          default:
            responseText.textContent = "Something went wrong, try again";
        }
        loader.classList.remove("show");
      })
      .catch(function(error) {
        console.log(error);
      });
  } else {
    responseText.textContent = "Username or Password invalid";
    loader.classList.remove("show");
  }
}

export default Register;
