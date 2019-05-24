import React from "react";
import Background from "./components/Background";
import Content from "./components/Content";
import Player from "./components/Player";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObject: {
        coverUrl: "http://localhost/img/001.jpg",
        audioUrl: "",
        title: "Mother",
        autor: "Danzig"
      }
    };
  }

  render() {
    return (
      <div className="App" style={this.style}>
        <Background coverUrl={this.state.dataObject.coverUrl} />
        <Content dataObject={this.state.dataObject} />
        <Player dataObject={this.state.dataObject} />
      </div>
    );
  }
}

export default App;
