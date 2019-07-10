import React from "react";

function Social(props) {
  if (props.fb !== "" && props.sc !== "" && props.www !== "") {
    return (
      <div className="social">
        <a href={props.sc}>
          <i className="fab fa-soundcloud fa-2x" />
        </a>
        <a href={props.fb}>
          <i className="fab fa-facebook-f fa-2x" />
        </a>
        <a href={props.www}>
          <i className="fas fa-globe-europe fa-2x" />
        </a>
      </div>
    );
  }
  if (props.fb !== "" && props.sc !== "") {
    return (
      <div className="social">
        <a href={props.sc}>
          <i className="fab fa-soundcloud fa-2x" />
        </a>
        <a href={props.fb}>
          <i className="fab fa-facebook-f fa-2x" />
        </a>
      </div>
    );
  }
  if (props.fb !== "" && props.www !== "") {
    return (
      <div className="social">
        <a href={props.fb}>
          <i className="fab fa-facebook-f fa-2x" />
        </a>
        <a href={props.www}>
          <i className="fas fa-globe-europe fa-2x" />
        </a>
      </div>
    );
  }
  if (props.sc !== "" && props.www !== "") {
    return (
      <div className="social">
        <a href={props.sc}>
          <i className="fab fa-soundcloud fa-2x" />
        </a>
        <a href={props.www}>
          <i className="fas fa-globe-europe fa-2x" />
        </a>
      </div>
    );
  }
  if (props.fb !== "") {
    return (
      <div className="social">
        <a href={props.fb}>
          <i className="fab fa-facebook-f fa-2x" />
        </a>
      </div>
    );
  }
  if (props.sc !== "") {
    return (
      <div className="social">
        <a href={props.sc}>
          <i className="fab fa-soundcloud fa-2x" />
        </a>
      </div>
    );
  }
  if (props.www !== "") {
    return (
      <div className="social">
        <a href={props.www}>
          <i className="fas fa-globe-europe fa-2x" />
        </a>
      </div>
    );
  } else {
    return <div className="social" />;
  }
}

export default Social;
