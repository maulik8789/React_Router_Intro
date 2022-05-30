import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact="true" to="/">
        Home
      </NavLink>
      <NavLink exact="true" to="/chocolate">
        Eat chocolate
      </NavLink>
      <NavLink exact="true" to="/softDrink">
        SoftDrink
      </NavLink>
      <NavLink exact="true" to="/milk">
        Drink Milk
      </NavLink>
    </nav>
  );
}

export default NavBar;
