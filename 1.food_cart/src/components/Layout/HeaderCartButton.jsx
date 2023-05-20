import React from "react";
import "./HeaderCartButton.css";
import { icons } from "../../constants";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);

  const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className="button" onClick={props.onClick}>
      <img className="icon" src={icons.search} alt="" />

      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
