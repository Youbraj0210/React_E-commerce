import React from 'react'
import "./Footer.css"
import footer_logo from "../assets/logo_big.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-socials-icons">
            <div className="footer-icon-container">
                <InstagramIcon/>
            </div>
            <div className="footer-icon-container">
                <PinterestIcon/>
            </div>
            <div className="footer-icon-container">
                <WhatsAppIcon/>
            </div>
        </div>
        <div className="footer-copy">
            <hr />
            <p>Copyright @ 2024 - ALL RIGHTS RESERVED</p>
        </div>
    </div>

  )
}

export default Footer