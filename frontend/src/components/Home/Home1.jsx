import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "./Home1.css";
import dragon from './photos24/dragon.png';

function Home1() {
  return (
    <div className="newhome">
      <div className="mainHome">
        <div className="upperMainHome">
          <div className="dragonHome">
            {/* Use motion.img to animate the dragon */}
            <motion.img 
              src={dragon} 
              alt="" 
              animate={{ y: [0, -20, 0] }} // Move up and down
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} // Smooth transition
              style={{ width: '300px', height: 'auto' }} // Adjust size as needed
            />
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
            <div style={{ paddingLeft: '5%' }}>SARC PRESENTS</div>
            <div style={{ fontSize: "70px", color: '#700815' }}>ALUMINATION</div>
          </div>
        </div>
        <div className="lowerMainHome">
          <div className="registerHome" style={{ fontSize: "25px", color: '#700815' }}>
            REGISTER
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
