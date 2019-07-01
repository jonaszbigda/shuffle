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
          <input className="inputs" type="text" id="username" />
          <label htmlFor="password">Password (min. 6 characters)</label>
          <input type="password" id="password" onChange={validatePassword} />
        </form>
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

function validatePassword() {
  var pass = document.getElementById("password");
  if (pass.value.length >= 6) {
    pass.setCustomValidity("");
  } else {
    pass.setCustomValidity(
      "Hasło jest zbyt krótkie, lub zawiera niedozwolone znaki."
    );
  }
}

function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  axios({
    method: "post",
    url: "http://localhost/onetrack/src/controllers/registerNewUser.php",
    data: {
      password: password,
      username: username
    }
  })
    .then(function(response) {
      console.log(response);
      if (response.status === 201) {
        console.log("STARUS CODE IS 201 - CREATED");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default Register;
