import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "sushi", amount: "2", price: "12.22" }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.23</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          close
        </button>
        <button className="order ">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
