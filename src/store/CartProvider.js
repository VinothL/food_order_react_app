import React, { useReducer } from "react";
import CartContext from "./cart-context";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;

      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    default:
      return defaultCartState;
  }
}

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function CartProvider(props) {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemtoCartHandler(item) {
    dispatchCartState({
      type: "ADD",
      item: item,
    });
  }

  function removeItemFromCartHandler(id) {
    dispatchCartState({
      type: "REMOVE",
      id: id,
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount * 1,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
