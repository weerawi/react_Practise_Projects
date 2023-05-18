import React from "react";
import "./HeaderCartButton.css";
import { icons } from "../../constants";
const HeaderCartButton = () => {
  return (
    <button className="button">
      <img className="icon" src={icons.search} alt="" />

      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};

export default HeaderCartButton;