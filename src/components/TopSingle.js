import React from "react";
import Social from "./Social";

class Top10Single extends React.Component {
  render() {
    let {
      title,
      artist,
      img_url,
      audio_url,
      fb,
      sc,
      www,
      votes
    } = this.props.dataObject;

    return (
      <div className="top-element">
        <div className="cover-info">
          <div>
            <h2>{this.props.number}</h2>
          </div>
          <img src={img_url} alt="cover" className="avatar-image" />
          <div className="li-info">
            <h3>{title}</h3>
            <p>by: {artist}</p>
            <p>Votes: {votes}</p>
          </div>
        </div>
        <Social www={www} sc={sc} fb={fb} />
      </div>
    );
  }
}

export default Top10Single;
