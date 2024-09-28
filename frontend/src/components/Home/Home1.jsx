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
      
      
      </div>

      {/* <Alumni /> */}
      
{/* import React, { useEffect, useState, useRef } from 'react';
import './Home1.css';
import Trailer from './footerex';
import footimg from './photos24/footerimg.png';
import footerimg2 from './photos24/footerimg2.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home1() {
  const footerImgRef = useRef(null);
  const whiteFadeRef = useRef(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const footerImg = footerImgRef.current;
    const whiteFade = whiteFadeRef.current;

    // GSAP ScrollTrigger for zoom and transitions
    const zoomEffect = ScrollTrigger.create({
      trigger: footerImg,
      start: 'top 80%', // Trigger zoom when the top of the image is near the viewport bottom
      end: 'top 20%',   // End the effect as it nears the top
      scrub: true, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // Scroll progress from 0 to 1

        // Apply zoom effect on the footer image
        gsap.to(footerImg, {
          scale: 1 + progress * 1.5, // Increase scale progressively
          ease: 'none',
        });

        // Apply white fade when scrolling past a threshold
        if (progress > 0.5) {
          gsap.to(whiteFade, {
            opacity: 1, // Fade in white overlay
            duration: 0.5,
          });

          // Show Trailer component
          if (!showTrailer) {
            setShowTrailer(true); // Display the Trailer component immediately
          }
        } else {
          // Fade out white overlay and hide Trailer when scrolling up
          gsap.to(whiteFade, {
            opacity: 0,
            duration: 0.5,
          });
          if (showTrailer) {
            setShowTrailer(false); // Hide the Trailer component when scrolling back up
          }
        }
      },
    });

    return () => {
      zoomEffect.kill(); // Cleanup on component unmount
    };
  }, [showTrailer]);

  return (
    <div className="newhome">
      <div className="Landingpage">Alumination</div>
      <div className="About">About</div>
      <div className="footer">
        <img
          ref={footerImgRef}
          className="footerimg"
          src={footimg}
          alt="Footer Image"
        />
        <div
          ref={whiteFadeRef}
          className="white-fade"
        ></div>
        {showTrailer && <Trailer />} {/* Conditionally render Trailer 
      </div>
    </div>*/}
    </div>
//   );
// }

  );
}

export default Home1; 

