import React from "react";
import Social from "./Social";

function Info(props) {
  return (
    <div className="mainInfo">
      <h1>{props.dataObject.title}</h1>
      <h3>Artist: {props.dataObject.artist}</h3>
      <h3>Genre: {props.dataObject.genre}</h3>
      <h3>Views: {props.dataObject.views}</h3>
      <Social
        www={props.dataObject.www}
        sc={props.dataObject.sc}
        fb={props.dataObject.fb}
      />
    </div>
  );
}

export default Info;
