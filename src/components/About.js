import React from "react";
import "../About.scss";

function About(props) {
  return (
    <div className="about-container">
      <h1>About IndieTune</h1>
      <hr width="100%" />
      <p>
        IndieTune is meant to help indie artists and bands get discovered.{" "}
        <br />
        Every time you press the shuffle button or reload the page, you get an
        randomly picked song.
        <br />
        <br /> In order to upload your song, you have to create an account.
        Please do not create multiple accounts - be fair :)
        <br />
        All music copyrights belong to the autors. We do not take any
        responsibility for the materials uploaded.
        <br />
      </p>
      <hr width="100%" />
      <p>
        {" "}
        NOTE: this is a beta version of the app. Please send any bug-reports and
        feedback to: <br />
        jonasz787@gmail.com <br />
        <br />
        Thank you :)
      </p>
    </div>
  );
}

export default About;
