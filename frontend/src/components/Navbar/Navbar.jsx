import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ({ checkoutItems }) => {
  return (
    <div className="Navbar-Items">
      <p><Link className="logo" to="/">LG</Link></p>
      <p>
        <Link to="/item/checkout">Cart: {checkoutItems.length}</Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Navbar;
