import './chocolateList.css';
import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";

const ChoclateList = (props) => {
  const cartCtx = useContext(CartContext);

  const [chocolateAmounts, setChocolateAmounts] = useState({});

  const addtoCart = (id, name, price) => {
    const amount = chocolateAmounts[id] || 1;
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  const amountChangeHandler = (event, id) => {
    const newAmount = +event.target.value;
    setChocolateAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: newAmount,
    }));
  };

  return (
    <div className="chocolate-list">
    <h2>ChoclateList</h2>
    <ul>
      {props.chocolates.map((item, index) => (
        <li key={item.id} className="chocolate-item">
          <div className="chocolate-details">
            <strong className="chocolate-name">Name: </strong> {item.name}
            <p className="chocolate-description">Description: {item.describe}</p>
            <span className="chocolate-price">Price: {item.price}</span>
          </div>
          <input
            className="chocolate-quantity"
            type="number"
            min="1"
            value={chocolateAmounts[item.id] || 1}
            onChange={(event) => amountChangeHandler(event, item.id)}
          />
          <button
            className="chocolate-button"
            onClick={() => addtoCart(item.id, item.name, item.price)}
          >
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ChoclateList;