import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import cssClasses from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const quantityInputRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = enteredQuantity * 1;
    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantityNumber);
  }
  return (
    <>
      <form className={cssClasses.form} onSubmit={onSubmitHandler}>
        <Input
          label="Quantity"
          ref={quantityInputRef}
          input={{
            id: "quantity " + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button> + Add</button>
        {!amountIsValid && <p>Please enter the quantity between 1 and 5 !</p>}
      </form>
    </>
  );
}

export default MealItemForm;
