import React, { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartProvider from "./store/cartProvider";
import Input from "./components/Input";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [chocolates, setChocolates] = useState([]); 

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Input chocolates={chocolates} setChocolates={setChocolates} />
    </CartProvider>
  );
}

export default App;