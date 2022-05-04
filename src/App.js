import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartStatus, setCartStatus] = useState(false);

  function onCartCloseHandler() {
    setCartStatus(false);
  }

  function onCartShoweHandler() {
    setCartStatus(true);
  }

  return (
    <CartProvider>
      <div>
        {cartStatus && <Cart onCartClose={onCartCloseHandler}></Cart>}
        <Header onCartClick={onCartShoweHandler}></Header>
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
