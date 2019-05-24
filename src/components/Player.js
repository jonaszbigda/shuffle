import React from "react";
import { Howl } from "howler";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true,
      playStyle: { display: "none" },
      pauseStyle: { display: "block" }
    };
    this.id = 0;
    this.song = new Howl({
      src: ["001.mp3"],
      format: ["mp3"]
    });
  }

  render() {
    if (this.id == 0) {
      this.id = this.song.play();
      console.log(this.id);
    }

    var playPause = function() {
      if (!this.state.isPlaying) {
        console.log("play");
        this.song.play(this.id);
        this.setState({
          isPlaying: true,
          playStyle: { display: "none" },
          pauseStyle: { display: "block" }
        });
        console.log(this.id);
      } else {
        this.song.pause(this.id);
        console.log("pause");
        this.setState({
          isPlaying: false,
          playStyle: { display: "block" },
          pauseStyle: { display: "none" }
        });
        console.log(this.id);
      }
    };

    return (
      <div className="Player">
        <button type="button" className="playerControl">
          <i className="fas fa-step-backward fa-4x" />
        </button>
        <button
          onClick={playPause.bind(this)}
          type="button"
          className="playerControl"
        >
          <i className="fas fa-play fa-4x" style={this.state.playStyle} />
          <i className="fas fa-pause fa-4x" style={this.state.pauseStyle} />
        </button>
        <button id="nextButton" type="button" className="playerControl">
          <i className="fas fa-step-forward fa-4x" />
        </button>
      </div>
    );
  }
}

export default Player;
