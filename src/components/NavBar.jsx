import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/users" className="nav-item">Users</NavLink > /
      <NavLink to="/products" className="nav-item">Products</NavLink>
    </nav>
  );
};

export default NavBar;
