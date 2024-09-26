'use client';
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Character from './Character';
import "./Home1.css";

import dragon from './photos24/dragon.png';
import cloud1 from './photos24/Cloud1.png';
import cloud2 from './photos24/Clouds2.png';
import cloud3 from './photos24/Clouds3.png';
import Alumni from './Alumni/Alumni.jsx';
import Count from './count/Count.jsx';
const paragraph = 'A Student run organisation at IIT Bombay, Connecting 60k+ Alumni and 12k+ Students Actively strengthens Student alumni relations through robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student - alumni Community since 2008.'

function Home1() {
  return (
    <div className="newhome">
      <div>
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
          <div className="count_k" >
            <Count />
          </div>
        </div>
      </div>
      
      <div className='clouds'>
        <img src={cloud1} alt="cloud1" className="cloud" style={{ '--i': 1 }} />
        <img src={cloud2} alt="cloud2" className="cloud" style={{ '--i': 2 }} />
        <img src={cloud3} alt="cloud3" className="cloud" style={{ '--i': 3 }} />
        <img src={cloud1} alt="cloud1" className="cloud" style={{ '--i': 4 }} />
        <img src={cloud1} alt="cloud1" className="cloud" style={{ '--i': 5}} />
        <img src={cloud2} alt="cloud2" className="cloud" style={{ '--i': 2}} />
        <img src={cloud3} alt="cloud3" className="cloud" style={{ '--i': 4 }} />
      </div>

      <div className='About'>
        <h1>About us</h1>
      <Character paragraph={paragraph} />
      </div>
      <Count />
      
      </div>

      {/* <Alumni /> */}
      
    </div>
    
  );
}

export default Home1;
