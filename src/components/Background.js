import React from "react";

function Background(props) {
  var url;

  if (props.mode === "shuffle" || props.mode === "mySong") {
    url = props.dataObject.img_url;
  } else {
    url = "http://localhost/img/bg.jpg";
  }

  let bgImage = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + url + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "fixed",
    filter: "blur(15px)",
    margin: "0",
    padding: "0",
    zIndex: "-100"
  };

  return <div style={bgImage} />;
}

export default Background;
