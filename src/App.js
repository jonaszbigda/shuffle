import React from "react";
import Background from "./components/Background";
import Content from "./components/Content";
import Player from "./components/Player";
import Header from "./components/Header";
import Modes from "./components/Modes";
import Footer from "./components/Footer";

import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObject: {},
      genre: "Genre",
      mode: "add",
      loggedIn: true,
      username: "null",
      song_id: ""
    };
  }

  reload = () => {
    this.fetchSong();
    this.forceUpdate();
  };

  /* UŻYJEMY TEGO DOPIERO PO DEPLOYMENCIE NA SERWER

  checkIfLoggedIn() {
    axios
      .get("http://localhost/onetrack/src/controllers/sessionInfo.php")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  */

  setGenre = inGenre => {
    this.setState({
      genre: inGenre
    });
    this.reload();
  };

  setMode = inMode => {
    this.setState({
      mode: inMode
    });
    this.reload();
  };

  logIn = (username, song_id) => {
    this.setState({
      loggedIn: true,
      mode: "shuffle",
      username: username,
      song_id: song_id
    });
  };

  logOut = () => {
    this.setState({
      loggedIn: false,
      mode: "shuffle",
      username: "",
      song_id: ""
    });
  };

  fetchSong() {
    axios
      .get(
        "http://localhost/onetrack/src/controllers/randomSong.php?genre=" +
          this.state.genre
      )
      .then(res => {
        const data = res.data;
        this.setState({ dataObject: data });
      });
  }

  componentWillMount() {
    this.fetchSong();
  }

  render() {
    switch (this.state.mode) {
      case "shuffle":
        return (
          <div className="App" style={this.style}>
            <Background
              mode={this.state.mode}
              dataObject={this.state.dataObject}
            />
            <Header
              logOut={this.logOut}
              logIn={this.logIn}
              username={this.state.username}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
              reload={this.reload}
            />
            <Modes setGenre={this.setGenre} genre={this.state.genre} />
            <Content
              mode={this.state.mode}
              reload={this.reload}
              dataObject={this.state.dataObject}
            />
            <Player
              setGenre={this.setGenre}
              reload={this.reload}
              dataObject={this.state.dataObject}
            />
            <Footer />
          </div>
        );

      case "register":
        return (
          <div className="App" style={this.style}>
            <Background
              mode={this.state.mode}
              dataObject={this.state.dataObject}
            />
            <Header
              logIn={this.logIn}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
              reload={this.reload}
            />
            <Content
              logIn={this.logIn}
              setMode={this.setMode}
              mode={this.state.mode}
              reload={this.reload}
              dataObject={this.state.dataObject}
            />
            <Footer />
          </div>
        );

      case "login":
        return (
          <div className="App" style={this.style}>
            <Background mode={this.state.mode} />
            <Header
              logIn={this.logIn}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
              reload={this.reload}
            />
            <Content
              logIn={this.logIn}
              setMode={this.setMode}
              mode={this.state.mode}
              reload={this.reload}
            />
            <Footer />
          </div>
        );

      case "add":
        return (
          <div className="App" style={this.style}>
            <Background mode={this.state.mode} />
            <Header
              logOut={this.logOut}
              username={this.state.username}
              mode={this.state.mode}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
            />
            <Content mode={this.state.mode} />
            <Footer />
          </div>
        );

      default:
        console.log("error");
    }
  }
}

export default App;
