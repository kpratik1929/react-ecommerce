import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-logo">
          <img className="logo-img" src="" alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className="nav-cart">
          <div className="nav-icon">
            <Link to="/cart">
              Cart
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
