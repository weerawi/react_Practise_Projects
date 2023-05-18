import React from "react";
import "./HeaderCartButton.css";
const HeaderCartButton = () => {
  return (
    <button className="button">
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};

export default HeaderCartButton;
