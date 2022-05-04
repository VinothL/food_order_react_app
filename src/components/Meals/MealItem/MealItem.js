import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import cssClasses from "./MealItem.module.css";

function MealItem(props) {
  const cntxtCart = useContext(CartContext);

  const price = `$${props.meal.price.toFixed(2)}`;

  function addToCartHandler(enteredQuantity) {
    cntxtCart.addItem({
      id: props.meal.id,
      name: props.meal.name,
      quantity: enteredQuantity,
      price: props.meal.price,
    });
  }

  return (
    <li className={cssClasses.meal}>
      <div id={"item " + props.meal.id}>
        <h3>{props.meal.name}</h3>
        <div className={cssClasses.description}>{props.meal.description}</div>
        <div className={cssClasses.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
