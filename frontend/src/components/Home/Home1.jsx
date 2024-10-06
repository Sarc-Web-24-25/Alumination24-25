import React, { useEffect, useState, useRef, useLayoutEffect} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Character from "./Character";
import "./Home1.css";
import "./Home1mobile.css";
import "./Footer.css";
import axios from "axios";
import dragon from "./photos24/dragon.png";
import cloud1 from "./photos24/Cloud1.png";
import cloud2 from "./photos24/Clouds2.png";
import cloud3 from "./photos24/Clouds3.png";
// import Alumni from './Alumni/Alumni.jsx';
import Count from "./count/Count.jsx";
import Trailer from "./footerex";
import footimg from "./photos24/footerimg.png";
// import footerimg2 from './photos24/footerimg2.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Alumni from "./Alumni2/Alumni2.jsx";
// import Alumni2 from "./Alumni2/Alumni2.jsx";
import Alumni3 from "./Alumni3/Alumni3.jsx";
import Sponsor from "./Sponsor/Sponsor.jsx";
import backgroundMusic from "./photos24/videos/back.mp3";
import Petal from "./Petal.js";
import './Petal.css'
import flagIcon from "./photos24/flag.png";


gsap.registerPlugin(ScrollTrigger);

const paragraph =
  "A Student run organisation at IIT Bombay, Connecting 60k+ Alumni and 12k+ Students Actively strengthens Student alumni relations through robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student - alumni Community since 2008.";

function Home1() {
  const footerImgRef = useRef(null);
  const whiteFadeRef = useRef(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [sponsors, setSponsors] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State to track screen size
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));
  const navigate = useNavigate(); // Initialize the navigate function


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update isMobile when screen width changes
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

  useEffect(() => {
    const footerImg = footerImgRef.current;
    const whiteFade = whiteFadeRef.current;

    const zoomEffect = ScrollTrigger.create({
      trigger: ".footer",
      start: "top 20%",
      end: "top -20%",
      scrub: true,

      onUpdate: (self) => {
        const progress = self.progress;
        const scaledProgress = Math.pow(self.progress, 0.1);
        console.log("progress :", progress);
        console.log("Scaled Progress :", scaledProgress);

        gsap.to(footerImg, {
          scale: 1 + scaledProgress * 2.0,
          ease: "none",
          transformOrigin: "50% 75%",
        });

        if (scaledProgress > 0.95) {
          if (!showTrailer) {
            setShowTrailer(true);
            setShowFooter(false);
          }
        } else {
          if (showTrailer) {
            setShowTrailer(false);
            setShowFooter(true);
          }
        }
      },
      // markers: true,
    });

    return () => {
      zoomEffect.kill();
    };
  }, [showTrailer]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/sponsors/")
      .then((response) => {
        const sponsor_list = [...response.data];
        let sponsors = [];
        sponsor_list.forEach((sponsor) => {
          sponsors.push({ image: `http://127.0.0.1:8000${sponsor.image}` });
        });

        setSponsors(sponsors);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleNavClick = (route) => {

    navigate(route); // Navigate to the specified route
  };


  const petals = Array.from({ length: 30 }).map((_, index) => (
    <Petal key={index} />
  ));

  return (
    <>
      {isMobile ? (
        <div className="newhome">

<button
        className="mute-button"
        onClick={toggleMute}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "rgba(255, 255, 255, 0.8)",
          border: "2px solid #000",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={flagIcon}
          alt={isMuted ? "Unmute" : "Mute"}
          style={{ width: "30px", height: "30px" }}
        />
        <span style={{ marginLeft: "10px", fontWeight: "bold" ,display: 'flex', alignItems: 'center',height: '30px',fontSize: '20px'}}>
          {isMuted ? "Unmute" : "Mute"}
        </span>
      </button>
          <div>
            <div className="mainHome">
          {petals}

              <div className="upperMainHome">
                {/*<div className="dragonHome">
                  <motion.img
                    src={dragon}
                    alt=""
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{ width: "300px", height: "auto" }}
                  />
                </div>*/}
                <div
                  className="headingHome"
                  style={{
                    fontSize: "35px",
                    position: "relative",
                    right: "-55%",
                    top: "69%",
                  }}
                >
                  {/* <div style={{ paddingLeft: "5%" }}>SARC PRESENTS</div> */}
                  <div style={{ fontSize: "70px", color: "#700815" }}>
                    {/* ALUMINATION */}
                  </div>
                </div>
              </div>

              <div className="lowerMainHome">
                <div
                  className="registerHome"
                  style={{ fontSize: "25px", color: "#700815" }}
                  onClick={() => handleNavClick( '/signup')}
                >
                  REGISTER
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

            {/* <div style={{ height: "50vh" }}></div> */}
            <div className="count_k" style={{height: '290vh'}}>
                  <Count />
                </div>

            <div className="alumniHomeContainer" >
              <Alumni3 />
            </div>

            <Sponsor sponsors={sponsors} />
          </div>
        </div>
      ) : (
        <div className="newhome">

<button
        className="mute-button"
        onClick={toggleMute}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "rgba(255, 255, 255, 0.8)",
          border: "2px solid #000",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={flagIcon}
          alt={isMuted ? "Unmute" : "Mute"}
          style={{ width: "30px", height: "30px" }}
        />
        <span style={{ marginLeft: "10px", fontWeight: "bold" ,display: 'flex', alignItems: 'center',height: '30px',fontSize: '20px'}}>
          {isMuted ? "Unmute" : "Mute"}
        </span>
      </button>
          <div>
            
          <div
          className={`mainHome `}
          style={{ height: "100vh", position: "relative" }}
         // Add ref for scroll detection
        >
          {/* Realistic flame element */}
          <div className="realistic-flame"></div>

          {/* Semicircle moon effect */}
          <div className="semicircle-moon1"></div>
          <div className="semicircle-moon2"></div>
          <div className="semicircle-moon3"></div>
          <div className="semicircle-moon4"></div>
          <div className="semicircle-moon5"></div>
          <div className="semicircle-moon6"></div>
          <div className="semicircle-moon7"></div>
          <div className="semicircle-moon8"></div>
          <div className="semicircle-moon9"></div>
          <div className="semicircle-moon10"></div>
          <div className="semicircle-moon11"></div>
          <div className="semicircle-moon12"></div>
          <div className="semicircle-moon13"></div>

          {petals}

          <div className="upperMainHome">
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
              onClick={() => handleNavClick( '/login')}
            >
              REGISTER
            </div>
          </div>
        </div>

            <div className="count_k">
                  <Count />
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

            <div style={{ height: "190vh" }}></div>

            <div
              className="alumniHomeContainer"
              style={{ height: "fit-content" }}
            >
              <Alumni3 />
            </div>

            <Sponsor sponsors={sponsors} />
          </div>

          
        </div>
      )}
    </>
  );
}

export default Home1;
