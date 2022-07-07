import React from "react";

// components
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import "./Hero.css";

import { motion } from "framer-motion";
import NumberCounter from "number-counter";


const Hero = () => {

  const transition = {type: "spring", duration: 3};
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      {/* hero left section */}
      <div className="left-h">
        <Header />
        {/* quote animation */}
        <div className="the-best-ad">
          <motion.div
          initial= {{left: mobile ?'160px':'238px'}} 
          whileInView= {{left: '8px'}}
          transition= {{...transition, type : "tween"}}></motion.div>
          <span>The Best Fitness Club In The Town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter start={100} end= {140} delay= '4' preFix= '+'/></span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter start={900} end= {978} delay= '4' preFix= '+'/></span>
            <span>Members Joined</span>
          </div>
          <div>
            <span><NumberCounter start={20} end= {50} delay= '4' preFix= '+'/></span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* hero right section */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
        initial={{right: '-16px'}}
        whileInView={{right: '64px'}}
         transition={transition}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial= {{right: "168px"}}
        whileInView= {{right: "320px"}}
        transition= {transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}
        <motion.div
        initial= {{right : "592px"}}
        whileInView= {{right: "448px"}}
        transition= {transition}
        className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
