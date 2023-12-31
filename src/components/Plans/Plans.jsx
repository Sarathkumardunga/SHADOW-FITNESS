import React from 'react';
import "./Plans.css";
import { plansData } from '../../data/plansData';
import whiteTick from "../../assets/whiteTick.png"

const handleJoin=()=>{
    window.alert(" Please provide your Email.\nWe will reach you soon..");
}

const Plans = () => {
  return (
    <div className="Plans-container">
        <div className="blur plans-blur-1">
        
        </div>
        <div className="blur plans-blur-2">
        
        </div>
        <div className="programs-header" style={{gap: "2rem"}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* Plans card */}
        <div className="plans">
            {plansData.map((plan, j)=>(
                <div className='plan' key={j}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>Rs. {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benifits -{'>'}</span>
                    </div>
                    <button className="btn" onClick={handleJoin}>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans