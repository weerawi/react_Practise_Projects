import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li className="meal">
      <div>
        <h3>{props.meal.name}</h3>
        <div className="descriotion">{props.meal.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
