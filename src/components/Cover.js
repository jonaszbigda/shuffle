import React from "react";

function Cover(props) {
  let coverUrl = props.coverUrl;

  return (
    <div
      className="coverBox"
      style={{ backgroundImage: "url(" + coverUrl + ")" }}
    />
  );
}

export default Cover;
