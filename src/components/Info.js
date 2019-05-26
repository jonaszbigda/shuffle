import React from "react";
import Social from "./Social";

function Info(props) {
  return (
    <div className="mainInfo">
      <h1>{props.dataObject.title}</h1>
      <h3>{props.dataObject.artist}</h3>
      <h3>Genre: {props.dataObject.genre}</h3>
      <Social />
    </div>
  );
}

export default Info;
