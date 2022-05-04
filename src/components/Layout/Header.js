import React from "react";
import cssClasses from "./Header.module.css";
import mealsMain from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={cssClasses.header}>
        <h1> React Meals</h1>
        <HeaderCartButton onClick={props.onCartClick} />
      </header>
      <div>
        <img
          src={mealsMain}
          alt="food-assortment"
          className={cssClasses["main-image"]}
        ></img>
      </div>
    </>
  );
}

export default Header;
