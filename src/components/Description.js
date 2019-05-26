import React from "react";

function Description(props) {
  return (
    <div className="description">
      <p>{props.dataObject.about}</p>
    </div>
  );
}

export default Description;
