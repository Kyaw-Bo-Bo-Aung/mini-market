import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/users">Users</Link>
      <Link to="/products">Products</Link>
    </>
  );
};

export default NavBar;
