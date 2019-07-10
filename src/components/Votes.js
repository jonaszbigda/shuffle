import React from "react";
import axios from "axios";

class Votes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: false
    };
    this.votes = 0;
  }

  componentWillReceiveProps() {
    this.setState({
      voted: false
    });
  }

  checkIfAlreadyVoted = () => {
    if (this.state.voted === false) {
      axios
        .get(
          "https://www.indietune.net/controllers/alreadyVoted.php?id=" +
            this.props.dataObject.id,
          { withCredentials: true }
        )
        .then(res => {
          this.votes = this.props.dataObject.votes;
          if (res.data === 1) {
            this.setState({
              voted: true
            });
          }
        });
    }
  };

  upVote = () => {
    axios
      .get(
        "https://www.indietune.net/controllers/upVote.php?id=" +
          this.props.dataObject.id,
        { withCredentials: true }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.votes = parseInt(this.props.dataObject.votes) + 1;
    document.getElementById("vote").disabled = true;
    this.setState({
      voted: true
    });
  };

  increment = () => {
    return parseInt(this.props.dataObject.votes) + 1;
  };

  render() {
    this.checkIfAlreadyVoted();
    if (this.props.mode === "shuffle") {
      if (this.state.voted === false) {
        return (
          <div className="votes">
            <p>Głosów:</p>
            <h2>{this.props.dataObject.votes}</h2>
            <button
              id="vote"
              className="btn"
              type="button"
              onClick={this.upVote}
            >
              Zagłosuj
            </button>
          </div>
        );
      } else {
        return (
          <div className="votes">
            <p>Głosów:</p>
            <h2>{this.votes}</h2>
            <button id="vote" className="btn" type="button" disabled>
              Oddano głos
            </button>
          </div>
        );
      }
    } else {
      return (
        <div className="votes">
          <p>Głosów:</p>
          <h2>{this.props.dataObject.votes}</h2>
        </div>
      );
    }
  }
}

export default Votes;
