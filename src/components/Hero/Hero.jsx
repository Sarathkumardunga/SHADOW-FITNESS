import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.jpg";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion";
import NumberCounter from "number-counter";
import {Link} from "react-scroll";

const Hero = () => { 
    //defining state of the transition
    const transition = {type: "spring", duration: 3};
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">
        <div className="blur hero-blur">
    
        </div>
        <div className="left-h">
            <Header/>
{/*   The best add section */}
            <div className="the-best-ad">
                <motion.div className="div"
                    initial = {{left: mobile ? "160px":'238px'}}
                    whileInView= {{left: '8px'}}
                    transition={{...transition, type: "tween"}}
                ></motion.div>
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
                        in here we help you to shape and build your <br/> ideal body and live up
                     your life to fullest
                    </span>
                </div>
            </div>

{/*     Figures  */}
            <div className='figures'>
                <div>
                    <span>
                        <NumberCounter end={882} start={750} delay='4' preFix="+" />
                    </span>
                    <span>Followers</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={50} start={0} delay='4' preFix="+" />
                    </span>
                    <span>Fitness<br />Programs</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={12} start={0} delay='4' preFix="+" />
                    </span>
                    <span>Advisors</span>
                </div>
            </div>
{/*     Buttons   */}
            <div className="hero-buttons">
                <a href="https://github.com/Sarathkumardunga/Real-Chat" target='_blank' rel="noreferrer"><buttons className='btn' id="getStarted">Get Stated</buttons></a>
                <a href="https://debugg-dot.github.io/Shadow_fiitness/" target='_blank' rel="noreferrer"><buttons className='btn' id="learnMore">Learn More</buttons></a>
            </div>
        </div>

        <div className="right-h">
            <button className="btn" id="Jnow"><Link
               to="email"
               spy={true}
               smooth={true}
              >Join Now</Link></button>

            <motion.div
             initial = {{right: '-1rem'}}
             whileInView= {{right: '8rem'}}
             transition={transition}
             className="heart-rate">
                <img src={Heart} alt="Heart" />
                <span>Heart Rate</span>
                <span>112 Bpm</span>
            </motion.div>

            {/* Hero images */}
            <img src={hero_image} alt="" className='hero-image' />
            <motion.img
             initial = {{right: '11rem'}}
             whileInView= {{right: '20rem'}}
             transition={transition}
             src={hero_image_back} alt="" className='hero-image-back' />
            {/* Calories */}
            <motion.div
             initial = {{right: '60rem'}}
             whileInView= {{right: '50rem'}}
             transition={transition}
             className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span> Calories Burned</span>
                    <span>330 kcal</span>
                </div>
            </motion.div> 
        </div>
    </div>
  )
}

export default Hero