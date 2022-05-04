import React from "react";

import cssClasses from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <section className={cssClasses.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}></input>
      </section>
    </div>
  );
});

export default Input;
