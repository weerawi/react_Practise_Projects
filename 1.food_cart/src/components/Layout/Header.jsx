import { Fragment } from "react";
import "./Header.css";
import asia from "../../assets/asia.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={asia} alt="main image example"></img>
      </div>
    </Fragment>
  );
};

export default Header;
