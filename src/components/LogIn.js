import React from "react";
import axios from "axios";

class Login extends React.Component {
  render() {
    var setLoggedIn = (username, song_id) => {
      this.props.logIn(username, song_id);
    };

    var login = () => {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var loader = document.getElementById("loader");
      var responseText = document.getElementById("responseText");

      loader.classList.add("show");

      axios({
        method: "post",
        url: "https://www.indietune.net/controllers/logIn.php",
        data: {
          password: password,
          username: username
        }
      })
        .then(function(response) {
          if (response.data.bool === true) {
            responseText.textContent = "Success";
            setLoggedIn(username, response.data.song_id);
            console.log(response);
          } else {
            responseText.textContent = "Failed";
          }
          loader.classList.remove("show");
        })
        .catch(function(error) {
          responseText = "Failed";
          console.log(error);
        });
    };

    return (
      <div className="forms">
        <h1>Log in</h1>
        <hr width="80%" />
        <form>
          <label htmlFor="username">Username</label>
          <input className="inputs" type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </form>
        <div className="registerResponse" id="registerResponse">
          <div id="loader" className="loader" />
          <p id="responseText" />
        </div>
        <button type="button" className="mode-btn" onClick={login}>
          Log in
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

export default Login;
