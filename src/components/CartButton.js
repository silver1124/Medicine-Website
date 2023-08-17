import React from "react";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import "./cartButton.css"; 

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className="cart-button" onClick={props.onClick}>
      <span className="cart-icon">🛒</span>
      <span className="cart-items">{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;