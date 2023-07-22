import React from 'react'
import './Hero.css';
import Header from '../Header/Header';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
{/*   The best add section */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>

{/*    Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className="stroke-text">Sculpt </span>
                    <span>Your</span>
                </div>

                <div>
                    <span>dream physique</span>
                </div>

                <div>
                    <span>
                        in here we help you to shape and build your ideal body and live up
                     your life to fullest
                    </span>
                </div>
            </div>

{/*     Figures  */}
            <div className='figures'>
                <div>
                    <span>+882</span>
                    <span>Followers</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Fitness<br />Programs</span>
                </div>
                <div>
                    <span>+12</span>
                    <span>Advisors</span>
                </div>
            </div>
{/*     Buttons   */}
            <div className="hero-buttons">
                <buttons className='btn'>Get Stated</buttons>
                <buttons className='btn'>Learn More</buttons>
            </div>
        </div>
        <div className="right-h">Right side</div>
    </div>
  )
}

export default Hero