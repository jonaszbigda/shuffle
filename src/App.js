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
      dataObject: {}
    };
  }

  componentWillMount() {
    axios.get("http://localhost/randomSong.php").then(res => {
      const data = res.data;
      this.setState({ dataObject: data });
    });
  }

  render() {
    return (
      <div className="App" style={this.style}>
        <Background dataObject={this.state.dataObject} />
        <Header />
        <Modes />
        <Content dataObject={this.state.dataObject} />
        <Player dataObject={this.state.dataObject} />
        <Footer />
      </div>
    );
  }
}

export default App;
