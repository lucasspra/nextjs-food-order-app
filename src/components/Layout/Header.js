import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

export default function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>iFood</h1>
        <HeaderCartButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
}
