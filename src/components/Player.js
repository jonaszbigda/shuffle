import React from "react";
import { Howl } from "howler";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      playStyle: { display: "block" },
      pauseStyle: { display: "none" }
    };
  }

  componentDidMount() {
    this.song = new Howl({
      src: [this.props.dataObject.audio_url],
      format: ["mp3"]
    });
    this.id = this.song.play();
    this.song.pause(this.id);
    console.log("Component Did Mount");
  }

  render() {
    //if (this.props.dataObject.audio_url.length)
    console.log(this.props.dataObject.length);

    var play = () => {
      console.log("play");
      this.song.play(this.id);
      this.setState({
        isPlaying: true,
        playStyle: { display: "none" },
        pauseStyle: { display: "block" }
      });
      console.log(this.id);
    };

    var pause = () => {
      this.song.pause(this.id);
      console.log("pause");
      this.setState({
        isPlaying: false,
        playStyle: { display: "block" },
        pauseStyle: { display: "none" }
      });
    };

    var playPause = () => {
      if (!this.state.isPlaying) {
        play();
      } else {
        pause();
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
