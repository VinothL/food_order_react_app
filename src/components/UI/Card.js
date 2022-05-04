import React from "react";
import cssClasses from "./Card.module.css";

function Card(props) {
  const cardClassName = cssClasses.card + " " + props.className;
  console.log(cardClassName);
  return <div className={cardClassName}>{props.children}</div>;
}

export default Card;
