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
                <a href="https://www.instagram.com/fitness_zer09/" target='_blank'><img src={Instagram} alt="" /></a>
                <a href="https://www.linkedin.com/in/sarath-kumar-dunga-7083021a0/" target="_blank"><img src={Linkedin} alt="" /></a>
                <a href="https://github.com/Sarathkumardunga" target='_blank'><img src={Github} alt="" /></a>
            </div>
        
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>
        
        <div className="blur f-blur-1"></div>
    </div>
  )
}

export default Footer