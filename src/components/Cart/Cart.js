import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import cssClasses from "./Cart.module.css";

function Cart(props) {
  const cntxtCart = useContext(CartContext);
  console.log(cntxtCart.totalAmount);
  const totalAmount = `$${cntxtCart.totalAmount.toFixed(2)}`;
  const hasItems = cntxtCart.items.length > 0;

  function removeItemHandler(id) {
    cntxtCart.removeItem(id);
  }

  function addItemHandler(item) {
    cntxtCart.addItem({ ...item, quantity: 1 });
  }

  const cartItems = (
    <ul className={cssClasses["cart-items"]}>
      {cntxtCart.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          description={item.description}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  function cartCloseHandler() {
    props.onCartClose(false);
  }

  return (
    <Modal onClick={cartCloseHandler}>
      {cartItems}
      <div className={cssClasses.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={cssClasses.actions}>
        <button
          className={cssClasses["button--alt"]}
          onClick={cartCloseHandler}
        >
          Close
        </button>
        {hasItems && <button className={cssClasses.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
