import React from "react";

function Info(props) {
  return (
    <div className="mainInfo">
      <h1>{props.dataObject.title}</h1>
      <h3>Autor: {props.dataObject.autor}</h3>
    </div>
  );
}

export default Info;
