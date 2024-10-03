import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Character from "./Character";
import "./Home1.css";
import "./Footer.css";
import axios from 'axios';
import dragon from './photos24/dragon.png';
import cloud1 from './photos24/Cloud1.png';
import cloud2 from './photos24/Clouds2.png';
import cloud3 from './photos24/Clouds3.png';
// import Alumni from './Alumni/Alumni.jsx';
import Count from './count/Count.jsx';
import Trailer from './footerex';
import footimg from './photos24/footerimg.png';
// import footerimg2 from './photos24/footerimg2.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Alumni from "./Alumni2/Alumni2.jsx";
// import Alumni2 from "./Alumni2/Alumni2.jsx";
import Alumni3 from "./Alumni3/Alumni3.jsx";
import Sponsor from "./Sponsor/Sponsor.jsx";

gsap.registerPlugin(ScrollTrigger);

const paragraph = "A Student run organisation at IIT Bombay, Connecting 60k+ Alumni and 12k+ Students Actively strengthens Student alumni relations through robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student - alumni Community since 2008.";

function Home1() {
  const footerImgRef = useRef(null);
  const whiteFadeRef = useRef(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    
    const footerImg = footerImgRef.current;
    const whiteFade = whiteFadeRef.current;
    
    // GSAP ScrollTrigger for zoom and transitions
    const zoomEffect = ScrollTrigger.create({
      
      trigger: '.footer',
      start: 'top 20%', // Trigger zoom when the top of the image is near the viewport bottom
      end: 'top -20%',   // End the effect as it nears the top
      scrub: true, // Smooth scrubbing
      
      onUpdate: (self) => {
        
        const progress = self.progress; // Scroll progress from 0 to 1
        const scaledProgress = Math.pow(self.progress, 0.1);
        console.log('progress :', progress);
        console.log('Scaled Progress :', scaledProgress);

        // Apply zoom effect on the footer image
        gsap.to(footerImg, {
          scale: 1 + scaledProgress * 2.0, // Increase scale progressively
          ease: 'none',
          transformOrigin: '50% 75%'
        });

        // Apply white fade when scrolling past a threshold
        // if(progress === 1){
        //   self.progress = 0;
        // }
        if (scaledProgress > 0.95) {
          // gsap.fromTo(trailerRef, {
          //   // opacity: 1, // Fade in white overlay
          //   // duration: 0.3,
            
          // });


          // Show Trailer component
          if (!showTrailer) {
            console.log("inside if", showTrailer);
            setShowTrailer(true); // Display the Trailer component immediately
            setShowFooter(false);
          }
        } 
        
        else if(scaledProgress > 0.95) {
            gsap.fromTo(whiteFade, 
            { opacity: 0 },  // Starting at opacity 0
            { opacity: 1, duration: 0.5, repeat: 1, yoyo: true })
        }
        else {
          console.log("inside else", showTrailer);
          
          // Fade out white overlay and hide Trailer when scrolling up
          // gsap.fromTo(whiteFade, 
          //   { opacity: 0 },  // Starting at opacity 0
          //   { opacity: 1, duration: 0.5, repeat: 1, yoyo: true }
          // );

          // Revert to showing Footer and hiding Trailer when scrolling up
        if (showTrailer) {
          setShowTrailer(false);  // Hide the Trailer component
          setShowFooter(true);    // Show the Footer component
        }
          // if (showTrailer) {
          //   setShowTrailer(false); // Hide the Trailer component when scrolling back up
          // }
        }
      },
      markers: true
    });
    
    return () => {
      zoomEffect.kill();
    };
  }, [showTrailer]);

  useEffect(() => {
    axios
        .get('http://127.0.0.1:8000/api/sponsors/')
        .then((response) => {
            const sponsor_list = [...response.data]; // Create a copy of the events array

            let sponsors = []
            sponsor_list.forEach((sponsor) => {
              sponsors.push({image: `http://127.0.0.1:8000${sponsor.image}`});
            });
        
            setSponsors(sponsors); // Update the state with the sorted array
          

            console.log(sponsors);
            
        })
        .catch((error) => {
            console.error(error);
        });
  }, []);

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
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }} // Smooth transition
                style={{ width: "300px", height: "auto" }} // Adjust size as needed
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

            <div className="count_k">
              <Count />
            </div>
          </div>
        </div>

        <div className="clouds">
          <img
            src={cloud1}
            alt="cloud1"
            className="cloud"
            style={{ "--i": 1 }}
          />
          <img
            src={cloud2}
            alt="cloud2"
            className="cloud"
            style={{ "--i": 2 }}
          />
          <img
            src={cloud3}
            alt="cloud3"
            className="cloud"
            style={{ "--i": 3 }}
          />
          <img
            src={cloud1}
            alt="cloud1"
            className="cloud"
            style={{ "--i": 4 }}
          />
          <img
            src={cloud1}
            alt="cloud1"
            className="cloud"
            style={{ "--i": 5 }}
          />
          <img
            src={cloud2}
            alt="cloud2"
            className="cloud"
            style={{ "--i": 2 }}
          />
          <img
            src={cloud3}
            alt="cloud3"
            className="cloud"
            style={{ "--i": 4 }}
          />
        </div>

        <div className="About">
          <h1>About us</h1>
          <Character paragraph={paragraph} />
        </div>

        <div style={{height: "190vh"}}></div>

        <div className="alumniHomeContainer" style={{ height: "1000px" }}>
          <Alumni3 />
        </div>

        <Sponsor sponsors={sponsors}/>    
      </div>

      <div className="footer">
      {showFooter && (
    <img
      ref={footerImgRef}
      className="footerimg"
      src={footimg}
      alt="Footer Image"
    />
  )}
        {/* <img
          ref={footerImgRef}
          className="footerimg"
          src={footimg}
          alt="Footer Image"
        /> */}
        <div
          ref={whiteFadeRef}
          className="white-fade"
        ></div>
        {/* <Trailer /> */}
        {showTrailer && <Trailer/>} 
      </div>
      
      {/* <Alumni /> */}
      
      
    </div>
  );
}

export default Home1;
