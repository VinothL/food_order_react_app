import React from "react";
import cssClasses from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <section className={cssClasses.summary}>
      <h2> Delicious Food, Delivered to you</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
      <p>
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
      </p>
    </section>
  );
}

export default MealsSummary;
