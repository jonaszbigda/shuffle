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
      mode: "register",
      loggedIn: false
    };
  }

  reload = () => {
    this.fetchSong();
    this.forceUpdate();
  };

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
              setMode={this.setMode}
              loggedIn={this.state.loggedIn}
              reload={this.reload}
            />
            <Content
              setMode={this.setMode}
              mode={this.state.mode}
              reload={this.reload}
              dataObject={this.state.dataObject}
            />
            <Footer />
          </div>
        );

      default:
        console.log("error");
    }
  }
}

export default App;
