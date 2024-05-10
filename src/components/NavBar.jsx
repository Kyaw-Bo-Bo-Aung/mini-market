import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/users" className="nav-item">Users</Link > /
      <Link to="/products" className="nav-item">Products</Link>
    </nav>
  );
};

export default NavBar;
