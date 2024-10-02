'use client';
import React, { useState, useRef, useEffect } from "react";
import { Parallax } from "react-parallax"; 
import { motion } from "framer-motion"; // Import framer-motion
import "./Home1.css";
import "./Petal.css"; 
import layer1 from "./photos24/layer1.png"; 
import layer2 from "./photos24/layer2.png";
import Character from './Character'
import dragon from './photos24/dragon.png';
import cloud1 from './photos24/Cloud1.png';
import cloud2 from './photos24/Clouds2.png';
import cloud3 from './photos24/Clouds3.png';
import Petal from './Petal'; 
import backgroundMusic from './photos24/bgm.mp3'; 
import flagIcon from './photos24/flag.png';

const paragraph = 'A Student run organisation at IIT Bombay, Connecting 60k+ Alumni and 12k+ Students Actively strengthens Student alumni relations through robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student - alumni Community since 2008.'
function Home1() {
  const [isMuted, setIsMuted] = useState(false); 
    const [isLayer2Visible, setIsLayer2Visible] = useState(false); // To track Layer 2 visibility
    const audioRef = useRef(new Audio(backgroundMusic));
    useEffect(() => {
      const handleScroll = () => {
          const layer2Position = document.querySelector('.layer2').getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          setIsLayer2Visible(layer2Position < windowHeight / 2); // Check if Layer 2 is half-visible
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      const handleEnded = () => {
          audioRef.current.currentTime = 0; 
          if (!isMuted) {
              audioRef.current.play().catch((error) => {
                  console.error("Audio playback failed:", error);
              });
          }
      };

      audioRef.current.addEventListener("ended", handleEnded);

      if (!isMuted) {
          audioRef.current.play().catch((error) => {
              console.error("Audio autoplay failed:", error);
          });
      }
      return () => {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", handleEnded);
    };
}, [isMuted]);

const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (isMuted) {
        audioRef.current.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });
    } else {
        audioRef.current.pause();
    }
};

const petals = Array.from({ length: 30 }).map((_, index) => <Petal key={index} />);
  return (
    <div className="newhome">
       <button
                className="mute-button"
                onClick={toggleMute}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '2px solid #000',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img
                    src={flagIcon}
                    alt={isMuted ? "Unmute" : "Mute"}
                    style={{ width: '30px', height: '30px' }}
                />
                <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    {isMuted ? "Unmute" : "Mute"}
                </span>
            </button>
            <Parallax bgImage={layer1} strength={300}>
      <div>
            <div 
                    className={`mainHome ${isLayer2Visible ? 'moveDown' : ''}`} 
                    style={{ height: "100vh", position: 'relative' }}
                >
                    {petals}
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
      </Parallax>
      <Parallax bgImage={layer2} strength={200}>
        <div className='layer2'>
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
      </Parallax>
      
    </div>
  );
}

export default Home1;
