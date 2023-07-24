import React from 'react';
import "./Programs.css";
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs" >
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to Shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((program,i) =>  (
                <div className="category" key={i}>
                   {program.image}
                   <span>{program.heading}</span>
                   <span>{program.details}</span> 
                   <div className="join-now">
                    <a href={program.link} target='_blank'><span id="Read">Read More</span></a>
                    <img src={RightArrow} alt="" /></div>
                </div>
            ))} 
        </div>
    </div>
  )
}

export default Programs