import React from "react";
import axios from "axios";
import TopSingle from "./TopSingle";
import "../Top.scss";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObject: []
    };
  }

  fetchTopSongs = () => {
    axios
      .get("https://www.indietune.net/controllers/top5.php")
      .then(response => {
        this.setState({
          dataObject: response.data
        });
        console.log(this.state.dataObject);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentWillMount() {
    this.fetchTopSongs();
  }

  render() {
    const listItems = this.state.dataObject.map((element, index) => (
      <li key={index}>
        <TopSingle number={index + 1} dataObject={element} />
      </li>
    ));

    return (
      <div className="top-container">
        <h1>Top 5</h1>
        <hr width="100%" />
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Top;
