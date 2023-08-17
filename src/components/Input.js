import React, { useState } from "react";
import ChoclateList from "./ChoclateList";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import "./input.css"; 

const Input = () => {
  const cartCtx = useContext(CartContext);

  const [chocolates, setChocolates] = useState([]);

  const [cname, setCname] = useState("");
  const [describe, setdescribe] = useState("");
  const [price, setPrice] = useState("");

  const nameHandler = (event) => {
    setCname(event.target.value);
  };

  const DescribeHandler = (event) => {
    setdescribe(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newChocolate = {
      id: Math.random().toString(),
      name: cname,
      describe: describe,
      price: price,
      amount: 0,
    };

    cartCtx.addItem({
      id: newChocolate.id,
      name: newChocolate.name,
      price: newChocolate.price,
      amount: newChocolate.amount,
    });
    setChocolates((prevChocolates) => [...prevChocolates, newChocolate]);
    setCname("");
    setdescribe("");
    setPrice("");
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <label className="form-label" htmlFor="ChoclateName">
          Medicine Name:
        </label>
        <input
          className="form-input"
          id="ChoclateName"
          type="text"
          value={cname}
          onChange={nameHandler}
        />
        <label className="form-label" htmlFor="CDescription">
          Description:
        </label>
        <input
          className="form-input"
          id="CDescription"
          type="text"
          value={describe}
          onChange={DescribeHandler}
        />
        <label className="form-label" htmlFor="ChoclatePrice">
          Price:
        </label>
        <input
          className="form-input"
          id="ChoclatePrice"
          type="number"
          value={price}
          onChange={priceHandler}
        />
        <button className="form-button" type="submit">
          Add to List
        </button>
      </form>
      <ChoclateList chocolates={chocolates} />
    </div>
  );
};

export default Input;