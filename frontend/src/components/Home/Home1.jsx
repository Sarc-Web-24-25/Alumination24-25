import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "./Home1.css";
import dragon from "./photos24/dragon.png";
import castle from "./photos24/CASTLE.png";
import moon from "./photos24/moon.png";

function Home1() {
  return (
    <div className="newhome">
      {/* <img src={castle} className="castleHome" alt="" /> */}
      {/* <img src={moon} className="moonHome" alt="" /> */}
      <div className="mainHome">
        {/* Realistic flame element */}
        {/* <div className="realistic-flame"></div> */}

        {/* Semicircle moon effect */}
        <div className="semicircle-moon1">1</div>
        <div className="semicircle-moon2">2</div>
        <div className="semicircle-moon3">3</div>
        <div className="semicircle-moon4">4</div>
        <div className="semicircle-moon5">5</div>
        <div className="semicircle-moon6">6</div>
        <div className="semicircle-moon7">7</div>
        <div className="semicircle-moon8">8</div> 
        



        <div className="upperMainHome">
          
          <div className="dragonHome">
            {/* Use motion.img to animate the dragon */}
            {/* <motion.img
              src={dragon}
              alt=""
              animate={{ y: [0, -20, 0] }} // Move up and down
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }} // Smooth transition
              style={{ width: "300px", height: "auto" }} // Adjust size as needed
            /> */}
          </div>
          <div
            className="headingHome"
            style={{
              fontSize: "35px",
              position: "relative",
              right: "-55%",
              top: "69%",
            }}
          >
            <div style={{ paddingLeft: "5%" }}>SARC PRESENTS</div>
            <div style={{ fontSize: "70px", color: "#700815" }}>
              ALUMINATION
            </div>
          </div>
        </div>
        <div className="lowerMainHome">
          <div
            className="registerHome"
            style={{ fontSize: "25px", color: "#700815" }}
          >
            REGISTER
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;