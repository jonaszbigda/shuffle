import React from "react";
import Background from "./components/Background";
import Content from "./components/Content";
import Player from "./components/Player";
import Header from "./components/Header";
import Modes from "./components/Modes";
import Footer from "./components/Footer";

import axios from "axios";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObject: {},
      genre: "Genre",
      mode: "shuffle",
      loggedIn: false,
      username: "",
      song_id: "0"
    };
  }

  checkIfLoggedIn() {
    axios
      .get("https://www.indietune.net/controllers/sessionInfo.php")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  reload = () => {
    this.fetchSong(this.state.mode);
    this.render();
  };

  setGenre = inGenre => {
    this.setState({
      genre: inGenre
    });
    this.reload();
  };

  setMode = inMode => {
    if (inMode === "mySong") {
      this.setState({
        mode: inMode
      });
      this.fetchSong("mySong");
      this.render();
    } else {
      this.setState({
        mode: inMode
      });
    }
  };

  onUpload = song_id => {
    this.setState({
      song_id: song_id,
      mode: "mySong"
    });
    this.fetchSong("mySong");
    this.render();
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

  fetchSong(mode) {
    if (mode === "mySong") {
      this.setState({
        mode: "loading"
      });
      axios
        .get(
          "https://www.indietune.net/controllers/mySong.php?id=" +
            this.state.song_id
        )
        .then(res => {
          const data = res.data;
          this.setState({ dataObject: data, mode: "mySong" });
        });
    } else if (mode === "shuffle") {
      this.setState({
        mode: "loading"
      });
      axios
        .get(
          "https://www.indietune.net/controllers/randomSong.php?genre=" +
            this.state.genre
        )
        .then(res => {
          const data = res.data;
          this.setState({ dataObject: data, mode: "shuffle" });
        });
    }
  }

  componentWillMount() {
    this.fetchSong(this.state.mode);
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
              song_id={this.state.song_id}
              mode={this.state.mode}
              logOut={this.logOut}
              logIn={this.logIn}
              username={this.state.username}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
              reload={this.reload}
            />
            <div className="content-container">
              <Modes
                setGenre={this.setGenre}
                genre={this.state.genre}
                setMode={this.setMode}
                mode={this.state.mode}
              />
              <div className="loader" />
              <Content
                mode={this.state.mode}
                reload={this.reload}
                dataObject={this.state.dataObject}
              />
            </div>

            <Player
              setGenre={this.setGenre}
              reload={this.reload}
              dataObject={this.state.dataObject}
            />
            <Footer />
          </div>
        );

      case "loading":
        return (
          <div className="App" style={this.style}>
            <Background
              mode={this.state.mode}
              dataObject={this.state.dataObject}
            />
            <Header
              song_id={this.state.song_id}
              mode={this.state.mode}
              logOut={this.logOut}
              logIn={this.logIn}
              username={this.state.username}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
              reload={this.reload}
            />
            <div className="loader show" />
            <Footer />
          </div>
        );

      case "top10":
        return (
          <div className="App" style={this.style}>
            <Background mode={this.state.mode} />
            <Header
              song_id={this.state.song_id}
              logOut={this.logOut}
              logIn={this.logIn}
              username={this.state.username}
              mode={this.state.mode}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
              reload={this.reload}
            />
            <div className="content-container">
              <Modes
                setGenre={this.setGenre}
                genre={this.state.genre}
                setMode={this.setMode}
                mode={this.state.mode}
              />
              <div className="loader" />
              <Content
                mode={this.state.mode}
                reload={this.reload}
                dataObject={this.state.dataObject}
              />
            </div>

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
              mode={this.state.mode}
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
              mode={this.state.mode}
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
              song_id={this.state.song_id}
              logOut={this.logOut}
              username={this.state.username}
              mode={this.state.mode}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
            />
            <Content
              username={this.state.username}
              setMode={this.setMode}
              mode={this.state.mode}
              onUpload={this.onUpload}
            />
            <Footer />
          </div>
        );

      case "mySong":
        return (
          <div className="App" style={this.style}>
            <Background
              dataObject={this.state.dataObject}
              mode={this.state.mode}
            />
            <Header
              song_id={this.state.song_id}
              logOut={this.logOut}
              username={this.state.username}
              mode={this.state.mode}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
            />
            <div className="content-container">
              <Modes
                setGenre={this.setGenre}
                genre={this.state.genre}
                setMode={this.setMode}
                mode={this.state.mode}
              />
              <div className="loader" />
              <Content
                setMode={this.setMode}
                mode={this.state.mode}
                dataObject={this.state.dataObject}
              />
            </div>
            <Player reload={this.reload} dataObject={this.state.dataObject} />
            <Footer />
          </div>
        );

      case "about":
        return (
          <div className="App" style={this.style}>
            <Background mode={this.state.mode} />
            <Header
              song_id={this.state.song_id}
              logOut={this.logOut}
              username={this.state.username}
              mode={this.state.mode}
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
            />
            <div className="content-container">
              <Modes
                setGenre={this.setGenre}
                genre={this.state.genre}
                setMode={this.setMode}
                mode={this.state.mode}
              />
              <Content mode={this.state.mode} />
            </div>
            <Footer />
          </div>
        );

      default:
        console.log("error");
    }
  }
}

export default App;
