import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {

    const [menu, setMenu] = useState("shop")
  return (
    <div className='Navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li style={menu=="shop" ? {color:"#ff4141"}:{}} onClick={()=>setMenu("shop")}>Shop</li>
            <li style={menu=="men" ? {color:"#ff4141"}:{}} onClick={()=>setMenu("men")}>Men</li>
            <li style={menu=="women" ? {color:"#ff4141"}:{}} onClick={()=>setMenu("women")}>Women</li>
            <li style={menu=="kids" ? {color:"#ff4141"}:{}} onClick={()=>setMenu("kids")}>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon/>
            </Badge>
        </div>
    </div>
  )
}
