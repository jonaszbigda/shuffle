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
    this.intervalId = "";
  }

  componentDidUpdate() {
    if (typeof this.id === "undefined") {
      this.song = new Howl({
        src: [this.props.dataObject.audio_url],
        format: ["mp3"]
      });
      this.id = this.song.play();
      this.song.pause(this.id);
    }
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      let progress =
        (this.song.seek(this.id) / this.song.duration(this.id)) * 100;
      document.getElementById("progress").style.width = progress + "%";
      document.getElementById("seekTime").innerText = this.formatTime(
        this.song.seek(this.id)
      );
    }, 100);
  }

  formatTime(time) {
    var minutes = ~~((time % 3600) / 60);
    var seconds = ~~time % 60;

    var formated = "";

    formated += minutes + ":" + (seconds < 10 ? "0" : "");
    formated += "" + seconds;
    return formated;
  }

  render() {
    var play = () => {
      console.log("play");
      this.song.play(this.id);
      document.getElementById("durationTime").innerText = this.formatTime(
        this.song.duration(this.id)
      );
      this.startTimer();
      this.setState({
        isPlaying: true,
        playStyle: { display: "none" },
        pauseStyle: { display: "block" }
      });
    };

    var pause = () => {
      this.song.pause(this.id);
      console.log("pause");
      clearInterval(this.intervalId);
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
        <div className="progressBar">
          <div id="progress" className="progress" />
        </div>
        <div className="progressTime">
          <p id="seekTime">0:00</p>
          <p id="durationTime">0:00</p>
        </div>
        <button type="button" className="playerControl">
          <i className="fas fa-redo-alt fa-lg" />
        </button>
        <button
          onClick={playPause.bind(this)}
          type="button"
          className="playerControl"
        >
          <i className="fas fa-play fa-lg" style={this.state.playStyle} />
          <i className="fas fa-pause fa-lg" style={this.state.pauseStyle} />
        </button>
        <button
          id="nextButton"
          type="button"
          className="playerControl"
          onClick={this.props.reload}
        >
          <i className="fas fa-step-forward fa-lg" />
        </button>
      </div>
    );
  }
}

export default Player;
