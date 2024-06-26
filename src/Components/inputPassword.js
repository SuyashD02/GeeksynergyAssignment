import React from "react";

import Classes from "./inputSection.module.css";

function InputPassword(props) {
  return (
    <div className={Classes.container}>
      {props.label && <label>{props.label}</label>}
      <input type="password" {...props} />
    </div>
  );
}

export default InputPassword;