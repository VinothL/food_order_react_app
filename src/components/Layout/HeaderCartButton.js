import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import cssClasses from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cntxtCart = useContext(CartContext);
  const { items } = cntxtCart;

  const numOfCartItems = items.reduce((curQuantity, item) => {
    return curQuantity + item.quantity;
  }, 0);

  const btnClasses = `${cssClasses.button} ${
    btnIsHighlighted ? cssClasses.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={cssClasses.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={cssClasses.badge}>{numOfCartItems}</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
