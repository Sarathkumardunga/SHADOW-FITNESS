import React from 'react';
import "./Footer.css"
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Logo from "../../assets/logo.png"


const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className='social-media'>
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Github} alt="" />
            </div>
        
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer