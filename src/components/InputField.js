import React from "react";
import "../InputField.scss";

function InputField(props) {
  if (props.type === "textarea") {
    return (
      <div className={"InputField " + props.additionalClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea rows="8" cols="80" id={props.id} />
      </div>
    );
  } else {
    if (props.validate === "true") {
      return (
        <div className={"InputField " + props.additionalClass}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            onChange={() => props.validateField(props.id)}
            type={props.type}
            id={props.id}
          />
        </div>
      );
    } else {
      return (
        <div className={"InputField " + props.additionalClass}>
          <label htmlFor={props.id}>{props.label}</label>
          <input type={props.type} id={props.id} />
        </div>
      );
    }
  }
}

export default InputField;
