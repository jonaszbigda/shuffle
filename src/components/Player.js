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

  componentDidMount() {
    this.clearPlayer();
    if (
      document.getElementById("player") &&
      document.getElementById("loader")
    ) {
      document.getElementById("player").classList.add("hide");
      document.getElementById("loader").classList.add("show");
    }
    if (typeof this.id === "undefined") {
      this.song = new Howl({
        src: [this.props.dataObject.audio_url],
        format: ["mp3"],
        onload: function() {
          if (
            document.getElementById("player") &&
            document.getElementById("loader")
          ) {
            document.getElementById("player").classList.remove("hide");
            document.getElementById("loader").classList.remove("show");
          }
        }
      });
    }
  }

  componentWillUnmount = () => {
    this.clearPlayer();
  };

  clearPlayer = () => {
    if (typeof this.id !== "undefined") {
      this.pause();
    }
    this.id = undefined;
    if (
      document.getElementById("progress") &&
      document.getElementById("seekTime")
    ) {
      document.getElementById("progress").style.width = "0%";
      document.getElementById("seekTime").innerText = "0:00";
      document.getElementById("durationTime").innerText = "0:00";
    }
  };

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

  play = () => {
    this.id = this.song.play();
    this.startTimer();
    document.getElementById("durationTime").innerText = this.formatTime(
      this.song.duration(this.id)
    );
    this.setState({
      isPlaying: true,
      playStyle: { display: "none" },
      pauseStyle: { display: "block" }
    });
  };

  pause = () => {
    this.song.pause(this.id);
    clearInterval(this.intervalId);
    this.setState({
      isPlaying: false,
      playStyle: { display: "block" },
      pauseStyle: { display: "none" }
    });
  };

  playPause = () => {
    if (!this.state.isPlaying) {
      this.play();
    } else {
      this.pause();
    }
  };

  render() {
    return (
      <div className="playerContainer">
        <div id="loader" className="loader" />
        <div id="player">
          <div className="progressBar">
            <div id="progress" className="progress" />
          </div>
          <div className="progressTime">
            <p id="seekTime">0:00</p>
            <p id="durationTime">0:00</p>
          </div>
          <button type="button" className="playerControl">
            <i className="fas fa-redo-alt fa-2x" />
          </button>
          <button
            onClick={this.playPause.bind(this)}
            type="button"
            className="playerControl"
          >
            <i className="fas fa-play fa-2x" style={this.state.playStyle} />
            <i className="fas fa-pause fa-2x" style={this.state.pauseStyle} />
          </button>
          <button
            id="nextButton"
            type="button"
            className="playerControl"
            onClick={this.props.reload}
          >
            <i className="fas fa-step-forward fa-2x" />
          </button>
        </div>
      </div>
    );
  }
}

export default Player;
