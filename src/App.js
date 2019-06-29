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
      mode: "shuffle",
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
    return (
      <div className="App" style={this.style}>
        <Background dataObject={this.state.dataObject} />
        <Header loggedIn={this.state.loggedIn} reload={this.reload} />
        <Modes setGenre={this.setGenre} genre={this.state.genre} />
        <Content reload={this.reload} dataObject={this.state.dataObject} />
        <Player
          setGenre={this.setGenre}
          reload={this.reload}
          dataObject={this.state.dataObject}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
