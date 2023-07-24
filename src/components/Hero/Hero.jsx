import React,{useState} from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.jpg";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion";

const Hero = () => { 
    //defining state of the transition
    const transition = {type: "spring", duration: 3};
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero">
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

        <div className="right-h">
            <button className="btn">Join now</button>

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