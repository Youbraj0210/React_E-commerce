import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          style={menu == "shop" ? { color: "#ff4141" } : {}}
          onClick={() => setMenu("shop")}
        >
          <Link style={{textDecoration:"none"}} to="/">Shop</Link>
        </li>
        <li
          style={menu == "men" ? { color: "#ff4141" } : {}}
          onClick={() => setMenu("men")}
        >
          <Link style={{textDecoration:"none"}} to="/men">Men</Link>
        </li>
        <li
          style={menu == "women" ? { color: "#ff4141" } : {}}
          onClick={() => setMenu("women")}
        >
          <Link style={{textDecoration:"none"}} to="/women">Women</Link>
        </li>
        <li
          style={menu == "kids" ? { color: "#ff4141" } : {}}
          onClick={() => setMenu("kids")}
        >
          <Link style={{textDecoration:"none"}} to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration:"none"}} to="/login">
          <button>Login</button>
        </Link>
        <Badge badgeContent={4} color="primary">
          <Link style={{textDecoration:"none"}} to="/cart">
            <ShoppingCartIcon />
          </Link>
        </Badge>
      </div>
    </div>
  );
};
