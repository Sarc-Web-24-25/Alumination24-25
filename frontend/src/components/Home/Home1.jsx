import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import "./Home1.css";
import "./Petal.css";
import layer1 from "./photos24/layer1.png";
import layer1PH from "./photos24/parallaxLandingPH.jpg";
import layer2 from "./photos24/layer2.png";
import layer3 from "./photos24/layer3.png";
import layer3PH from "./photos24/coinParallaxPH.jpg";
import layer4 from "./photos24/layer4.png"; // New layer
import layer5 from "./photos24/layer5.png"; // New layer
import dragon from "./photos24/dragon.png";
import cloud1 from "./photos24/Cloud1-removebg.png";
import cloud2 from "./photos24/Clouds2-removebg.png";
import cloud3 from "./photos24/Clouds3-removebg.png";
import Petal from "./Petal";
import backgroundMusic from "./photos24/bgm.mp3";
import flagIcon from "./photos24/flag.png";
import SoundOn from "./photos24/sound_on.png";
import SoundOff from "./photos24/sound_off.png";
import Count from "./count/Count";
import Character from "./Character";
import Alumni3 from "./Alumni3/Alumni3.jsx";
import Sponsor2 from "./Sponsor2/Sponsor2.jsx";
import Footer from "./Footer.jsx";
import Aluminatiom from "./photos24/AluminationLogo.png";
import layyer2 from "./photos24/layer1-removebg.png";

import mute from "./photos24/mute.png";
import unmute from "./photos24/speaker.png";
import { gsap } from "gsap";

export default function Home1() {
  const leafContainerRef = useRef(null);

  useEffect(() => {
    const LeafScene = function (el) {
      this.viewport = el;
      this.world = document.createElement("div");
      this.leaves = [];

      this.options = {
        numLeaves: 10,
        wind: {
          magnitude: 1.2,
          maxSpeed: 8,
          duration: 300,
          start: 0,
          speed: 0,
        },
      };

      this.width = this.viewport.offsetWidth;
      this.height = this.viewport.offsetHeight;

      this.timer = 0;

      this._resetLeaf = function (leaf) {
        leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
        leaf.y = -10;
        leaf.z = Math.random() * 200;

        if (leaf.x > this.width) {
          leaf.x = this.width + 10;
          leaf.y = (Math.random() * this.height) / 2;
        }

        if (this.timer === 0) {
          leaf.y = Math.random() * this.height;
        }

        leaf.rotation.speed = Math.random() * 10;
        const randomAxis = Math.random();
        if (randomAxis > 0.5) {
          leaf.rotation.axis = "X";
        } else if (randomAxis > 0.25) {
          leaf.rotation.axis = "Y";
          leaf.rotation.x = Math.random() * 180 + 90;
        } else {
          leaf.rotation.axis = "Z";
          leaf.rotation.x = Math.random() * 360 - 180;
          leaf.rotation.speed = Math.random() * 3;
        }

        leaf.xSpeedVariation = Math.random() * 0.4 - 0.2;
        leaf.ySpeed = Math.random() + 1.5;

        return leaf;
      };

      this._updateLeaf = function (leaf) {
        const leafWindSpeed = this.options.wind.speed(
          this.timer - this.options.wind.start,
          leaf.y
        );
        const xSpeed = leafWindSpeed + leaf.xSpeedVariation;
        leaf.x -= xSpeed;
        leaf.y += leaf.ySpeed;
        leaf.rotation.value += leaf.rotation.speed;

        const fadeStart = 0.75 * this.height;
        let opacity = 1;

        if (leaf.y > fadeStart) {
          opacity = Math.max(
            0,
            1 - (leaf.y - fadeStart) / (this.height - fadeStart)
          );
        }

        let t = `translateX(${leaf.x}px) translateY(${leaf.y}px) translateZ(${leaf.z}px) rotate${leaf.rotation.axis}(${leaf.rotation.value}deg)`;
        if (leaf.rotation.axis !== "X") {
          t += ` rotateX(${leaf.rotation.x}deg)`;
        }

        leaf.el.style.webkitTransform = t;
        leaf.el.style.MozTransform = t;
        leaf.el.style.oTransform = t;
        leaf.el.style.transform = t;

        // Apply opacity
        leaf.el.style.opacity = opacity;

        if (leaf.x < -10 || leaf.y > this.height + 10) {
          this._resetLeaf(leaf);
        }
      };

      this._updateWind = function () {
        if (
          this.timer === 0 ||
          this.timer > this.options.wind.start + this.options.wind.duration
        ) {
          this.options.wind.magnitude =
            Math.random() * this.options.wind.maxSpeed;
          this.options.wind.duration =
            this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
          this.options.wind.start = this.timer;

          const screenHeight = this.height;
          this.options.wind.speed = function (t, y) {
            const a =
              ((this.magnitude / 2) * (screenHeight - (2 * y) / 3)) /
              screenHeight;
            return (
              a *
                Math.sin(
                  ((2 * Math.PI) / this.duration) * t + (3 * Math.PI) / 2
                ) +
              a
            );
          };
        }
      };
    };

    LeafScene.prototype.init = function () {
      for (let i = 0; i < this.options.numLeaves; i++) {
        const leaf = {
          el: document.createElement("div"),
          x: 0,
          y: 0,
          z: 0,
          rotation: {
            axis: "X",
            value: 0,
            speed: 0,
            x: 0,
          },
          xSpeedVariation: 0,
          ySpeed: 0,
        };
        this._resetLeaf(leaf);
        this.leaves.push(leaf);
        this.world.appendChild(leaf.el);
      }

      this.world.className = "leaf-scene";
      this.viewport.appendChild(this.world);

      this.world.style.perspective = "400px";

      window.onresize = () => {
        this.width = this.viewport.offsetWidth;
        this.height = this.viewport.offsetHeight;
      };
    };

    LeafScene.prototype.render = function () {
      this._updateWind();
      for (let i = 0; i < this.leaves.length; i++) {
        this._updateLeaf(this.leaves[i]);
      }
      this.timer++;
      requestAnimationFrame(this.render.bind(this));
    };

    const leafContainer = leafContainerRef.current;
    const leaves = new LeafScene(leafContainer);
    leaves.init();
    leaves.render();
  }, []);


  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));
  const speakerRef = useRef(null);
  const tlMute = useRef(gsap.timeline({ paused: true }));
  const tlUnmute = useRef(gsap.timeline({ paused: true }));

  const [isLayer2Visible, setIsLayer2Visible] = useState(false);
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    // Set up GSAP animations for mute/unmute buttons without DrawSVGPlugin
    const speaker = speakerRef.current;

    // Manual SVG path animation using strokeDashoffset and strokeDasharray
    tlMute.current
      .to("#large-curve", { duration: 0.3, strokeDashoffset: 100 })
      .to("#small-curve", { duration: 0.3, strokeDashoffset: 100 }, "-=0.15")
      .to("#dark-line", { duration: 0.2, opacity: 1, strokeDashoffset: 0 })
      .to("#light-line", { duration: 0.2, opacity: 1, strokeDashoffset: 0 });

    tlUnmute.current
      .to("#large-curve", { duration: 0.3, strokeDashoffset: 0 })
      .to("#small-curve", { duration: 0.3, strokeDashoffset: 0 }, "-=0.15")
      .to("#dark-line", { duration: 0.2, opacity: 0 })
      .to("#light-line", { duration: 0.2, opacity: 0 });

    // Audio handling logic
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

  // Scroll ref for parallax sections
  const layerRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const previousScrollY = useRef(0); // To track the previous scroll position

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     const direction = currentScrollY > previousScrollY.current ? "down" : "up"; // Determine scroll direction
  //     previousScrollY.current = currentScrollY;

  //     for (let i = 0; i < layerRefs.length; i++) {
  //       const layer = layerRefs[i].current;
  //       const layerPosition = layer.getBoundingClientRect().top;
  //       const layerHeight = layer.offsetHeight;
  //     for (let i = 0; i < layerRefs.length; i++) {
  //       const layer = layerRefs[i].current;
  //       const layerPosition = layer.getBoundingClientRect().top;
  //       const layerHeight = layer.offsetHeight;

  //       // Check if 10% of the layer is visible
  //       const isLayerVisible = layerPosition <= window.innerHeight * 0.9 && layerPosition >= -layerHeight * 0.1;
  //       // Check if 10% of the layer is visible
  //       const isLayerVisible = layerPosition <= window.innerHeight * 0.9 && layerPosition >= -layerHeight * 0.1;

  //       // If scrolling down and the layer below is visible, or scrolling up and the layer above is visible
  //       if (isLayerVisible && ((direction === "down" && layerPosition >= 0) || (direction === "up" && layerPosition <= 0))) {
  //         window.scrollTo({
  //           top: window.scrollY + layerPosition,
  //           behavior: "smooth",
  //         });
  //         break;
  //       }
  //     }
  //   };
  //       // If scrolling down and the layer below is visible, or scrolling up and the layer above is visible
  //       if (isLayerVisible && ((direction === "down" && layerPosition >= 0) || (direction === "up" && layerPosition <= 0))) {
  //         window.scrollTo({
  //           top: window.scrollY + layerPosition,
  //           behavior: "smooth",
  //         });
  //         break;
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   const debounce = (func, wait) => {
  //     let timeout;
  //     return (...args) => {
  //       const later = () => {
  //         clearTimeout(timeout);
  //         func(...args);
  //       };
  //       clearTimeout(timeout);
  //       timeout = setTimeout(later, wait);
  //     };
  //   };

  //   const handleScroll = debounce(() => {
  //     const currentScrollY = window.scrollY;
  //     const direction =
  //       currentScrollY > previousScrollY.current ? "down" : "up";
  //     previousScrollY.current = currentScrollY;

  //     for (let i = 0; i < layerRefs.length; i++) {
  //       const layer = layerRefs[i].current;
  //       const layerPosition = layer.getBoundingClientRect().top;
  //       const layerHeight = layer.offsetHeight;

  //       // Check if 25% of the layer is visible
  //       const isLayerVisible =
  //         layerPosition <= window.innerHeight * 0.75 &&
  //         layerPosition >= -layerHeight * 0.25;

  //       if (
  //         isLayerVisible &&
  //         ((direction === "down" && layerPosition >= 0) ||
  //           (direction === "up" && layerPosition <= 0))
  //       ) {
  //         window.scrollTo({
  //           top: window.scrollY + layerPosition,
  //           behavior: "smooth",
  //         });
  //         break;
  //       }
  //     }
  //   }, 20); // Adjust the delay to 100ms for debouncing

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/sponsors/")
      .then((response) => {
        const sponsor_list = [...response.data];
        let sponsors = [];
        sponsor_list.forEach((sponsor) => {
          sponsors.push({
            image: `http://127.0.0.1:8000${sponsor.image}`,
            url: sponsor.url,
          });
        });
        setSponsors(sponsors);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const petals = Array.from({ length: 30 }).map((_, index) => (
    <Petal key={index} />
  ));

  const paragraph =
    "A Student run organisation at IIT Bombay, Connecting 60k+ Alumni and 12k+ Students Actively strengthens Student alumni relations through robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student - alumni Community since 2008.";

  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bgImage1, setBgImage1] = useState(layer1); // Default background image
  const [bgImage3, setBgImage3] = useState(layer3); // Default background image
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [cloudStyles, setCloudStyles] = useState({}); // To store dynamic cloud positions

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);

  //     // Background image logic for smaller screens
  //     if (window.innerWidth < 786) {
  //       setBgImage1(layer1PH); // Use small image for screens smaller than 786px
  //       setBgImage3(layer3PH); // Use small image for screens smaller than 786px
  //       setIsSmallScreen(true);
  //     } else {
  //       setBgImage1(layer1); // Use default image for larger screens
  //       setBgImage3(layer3); // Use default image for larger screens
  //       setIsSmallScreen(false);
  //     }

  //     // Dynamic cloud position based on window width
  //     let styles = {};
  //     if (windowWidth >= 1286) {
  //       styles = {
  //         clouds1: { top: '12.5%' },
  //         clouds2: { top: '27%' },
  //         clouds3: { top: '49%' },
  //         clouds4: { top: '80%' }
  //       };
  //     } else if (windowWidth < 1286 && windowWidth >= 1025) {
  //       styles = {
  //         clouds1: { top: '7%' },
  //         clouds2: { top: '28%' },
  //         clouds3: { top: '49%' },
  //         clouds4: { top: '79%' }
  //       };
  //     } else if (windowWidth < 1025 && windowWidth >= 970) {
  //       styles = {
  //         clouds1: { top: '6%' },
  //         clouds2: { top: '24%' },
  //         clouds3: { top: '41%' },
  //         clouds4: { top: '82.5%' }
  //       };
  //     } else if (windowWidth < 970 && windowWidth >= 855) {
  //       styles = {
  //         clouds1: { top: '6.5%' },
  //         clouds2: { top: '24%' },
  //         clouds3: { top: '42%' },
  //         clouds4: { top: '83.5%' }
  //       };
  //     }
  //       else if (windowWidth < 855 && windowWidth >= 810) {
  //         styles = {
  //           clouds1: { top: '7%' },
  //           clouds2: { top: '25%' },
  //           clouds3: { top: '42%' },
  //           clouds4: { top: '84.5%' }
  //         };
  //       }

  //       else if (windowWidth < 810 && windowWidth >= 786) {
  //         styles = {
  //           clouds1: { top: '7%' },
  //           clouds2: { top: '25.5%' },
  //           clouds3: { top: '43%' },
  //           clouds4: { top: '84.5%' }
  //         };
  //       }
  //     else if (windowWidth < 786 && windowWidth >= 710) {
  //       styles = {
  //         clouds1: { top: '8%' },
  //         clouds2: { top: '25.5%' },
  //         clouds3: { top: '43%' },
  //         clouds4: { top: '84.5%' }
  //       };
  //     } else if (windowWidth < 710 && windowWidth >= 640) {
  //       styles = {
  //         clouds1: { top: '8.5%' },
  //         clouds2: { top: '25.5%' },
  //         clouds3: { top: '43.5%' },
  //         clouds4: { top: '85.5%' }
  //       };
  //     } else if (windowWidth < 640 && windowWidth >= 607) {
  //       styles = {
  //         clouds1: { top: '6.5%' },
  //         clouds2: { top: '20.5%' },
  //         clouds3: { top: '34%' },
  //         clouds4: { top: '88.5%' }
  //       };
  //     } else if (windowWidth < 607 && windowWidth >= 550) {
  //       styles = {
  //         clouds1: { top: '6.3%' },
  //         clouds2: { top: '20.5%' },
  //         clouds3: { top: '34%' },
  //         clouds4: { top: '88.5%' }
  //       };
  //     } else if (windowWidth < 550 && windowWidth >= 490) {
  //       styles = {
  //         clouds1: { top: '7.3%' },
  //         clouds2: { top: '20.5%' },
  //         clouds3: { top: '34%' },
  //         clouds4: { top: '89.5%' }
  //       };

        
  //     }
  //     else if (windowWidth < 490 && windowWidth >= 450) {
  //       styles = {
  //         clouds1: { top: '7.5%' },
  //         clouds2: { top: '21%' },
  //         clouds3: { top: '34%' },
  //         clouds4: { top: '89.5%' }
  //       };

        
  //     }

  //     else if (windowWidth < 450 && windowWidth >= 400) {
  //       styles = {
  //         clouds1: { top: '8.5%' },
  //         clouds2: { top: '22.4%' },
  //         clouds3: { top: '36.5%' },
  //         clouds4: { top: '89.5%' }
  //       };

        
  //     }
  //     else if (windowWidth < 400 && windowWidth >= 340) {
  //       styles = {
  //         clouds1: { top: '8%' },
  //         clouds2: { top: '21.4%' },
  //         clouds3: { top: '34.5%' },
  //         clouds4: { top: '89.5%' }
  //       };

        
  //     }
  //     setCloudStyles(styles);
  //   };

  //   // Call handleResize on initial load and window resize events
  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Background image logic for smaller screens
      if (window.innerWidth < 786) {
        setBgImage1(layer1PH); // Use small image for screens smaller than 786px
        setBgImage3(layer3PH); // Use small image for screens smaller than 786px
        setIsSmallScreen(true);
      } else {
        setBgImage1(layer1); // Use default image for larger screens
        setBgImage3(layer3); // Use default image for larger screens
        setIsSmallScreen(false);
      }

      // Dynamic cloud position based on window width
      let styles = {};
      if (windowWidth >= 1286) {
        styles = {
          clouds1: { top: '12.5%' },
          clouds2: { top: '33.5%' },
          clouds3: { top: '55%' },
          clouds4: { top: '80%' }
        };
      } else if (windowWidth < 1286 && windowWidth >= 1025) {
        styles = {
          clouds1: { top: '12.5%' },
          clouds2: { top: '35%' },
          clouds3: { top: '57%' },
          clouds4: { top: '79%' }
        };
      } else if (windowWidth < 1025 && windowWidth >= 970) {
        styles = {
          clouds1: { top: '14%' },
          clouds2: { top: '39%' },
          clouds3: { top: '62.5%' },
          clouds4: { top: '82.5%' }
        };
      } else if (windowWidth < 970 && windowWidth >= 855) {
        styles = {
          clouds1: { top: "6.5%" },
          clouds2: { top: "24%" },
          clouds3: { top: "42%" },
          clouds4: { top: "83.5%" },
        };
      }
        else if (windowWidth < 855 && windowWidth >= 821) {
          styles = {
            clouds1: { top: '7%' },
            clouds2: { top: '25%' },
            clouds3: { top: '42%' },
            clouds4: { top: '84.5%' }
          };
        }

        else if (windowWidth < 821 && windowWidth >= 786) {
          styles = {
            clouds1: { top: '13%' },
            clouds2: { top: '32.5%' },
            clouds3: { top: '53%' },
            clouds4: { top: '84.5%' }
          };
        }
      else if (windowWidth < 786 && windowWidth >= 710) {
        styles = {
          clouds1: { top: '12.5%' },
          clouds2: { top: '31.5%' },
          clouds3: { top: '50%' },
          clouds4: { top: '84.5%' }
        };
      } else if (windowWidth < 710 && windowWidth >= 640) {
        styles = {
          clouds1: { top: "8.5%" },
          clouds2: { top: "25.5%" },
          clouds3: { top: "43.5%" },
          clouds4: { top: "85.5%" },
        };
      } else if (windowWidth < 640 && windowWidth >= 607) {
        styles = {
          clouds1: { top: "6.5%" },
          clouds2: { top: "20.5%" },
          clouds3: { top: "34%" },
          clouds4: { top: "88.5%" },
        };
      } else if (windowWidth < 607 && windowWidth >= 550) {
        styles = {
          clouds1: { top: "6.3%" },
          clouds2: { top: "20.5%" },
          clouds3: { top: "34%" },
          clouds4: { top: "88.5%" },
        };
      } else if (windowWidth < 550 && windowWidth >= 490) {
        styles = {
          clouds1: { top: "7.3%" },
          clouds2: { top: "20.5%" },
          clouds3: { top: "34%" },
          clouds4: { top: "89.5%" },
        };
      } else if (windowWidth < 490 && windowWidth >= 450) {
        styles = {
          clouds1: { top: '7.5%' },
          clouds2: { top: '21%' },
          clouds3: { top: '34%' },
          clouds4: { top: '89.5%' }
        };

        
      }

      else if (windowWidth < 450 && windowWidth >= 400) {
        styles = {
          clouds1: { top: '8.5%' },
          clouds2: { top: '23.4%' },
          clouds3: { top: '38%' },
          clouds4: { top: '89.5%' }
        };

        
      }
      else if (windowWidth < 400 && windowWidth >= 376) {
        styles = {
          clouds1: { top: '8.5%' },
          clouds2: { top: '22.75%' },
          clouds3: { top: '36%' },
          clouds4: { top: '89.5%' }
        };
      }
      else if (windowWidth < 376 && windowWidth >= 359) {
          styles = {
            clouds1: { top: '7%' },
            clouds2: { top: '19.5%' },
            clouds3: { top: '31.5%' },
            clouds4: { top: '89.5%' }
          };
  
        
      }
      setCloudStyles(styles);
    };

    // Call handleResize on initial load and window resize events
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="newhome">
      <div className="falling-leaves" ref={leafContainerRef}></div>
      {/* Mute Button */}

      {isSmallScreen ? (
        <button
          className="mute-button"
          onClick={toggleMute}
          style={{
            position: "absolute",
            top: "80px",
            left: "7px",
            background: "rgba(255, 255, 255, 0.6)",
            border: "0px solid #000",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
          }}
        >
          {isMuted ? (
            <img src={mute} alt="" style={{ width: "22px", height: "22px" }} />
          ) : (
            <img
              src={unmute}
              alt=""
              style={{ width: "22px", height: "22px" }}
            />
          )}
        </button>
      ) : (
        <button
          className="mute-button"
          onClick={toggleMute}
          style={{
            position: "absolute",
            top: "10px",
            left: "110px",
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
            // src={flagIcon}
            src={isMuted ? SoundOff : SoundOn}
            alt={isMuted ? "Unmute" : "Mute"}
            style={{ width: "30px", height: "30px" }}
          />
          <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
            {isMuted ? "Unmute" : "Mute"}
          </span>
        </button>
      )}

      {/* Parallax Layer 1 */}
      <Parallax bgImage={bgImage1} strength={200}>
        <div
          className={`mainHome ${isLayer2Visible ? "moveDown" : ""}`}
          style={{ height: "100vh", position: "relative" }}
          ref={layerRefs[0]} // Add ref for scroll detection
        >
          {/* Realistic flame element */}
          <div className="realistic-flame"></div>

          {/* Semicircle moon effect */}
          <div className="semicircle-moon1">1</div>
          <div className="semicircle-moon2">2</div>
          <div className="semicircle-moon3">3</div>
          <div className="semicircle-moon4">4</div>
          <div className="semicircle-moon5">5</div>
          <div className="semicircle-moon6">6</div>
          <div className="semicircle-moon7">7</div>
          <div className="semicircle-moon8">8</div>
          <div className="semicircle-moon9">9</div>
          <div className="semicircle-moon10">10</div>
          <div className="semicircle-moon11">11</div>
          <div className="semicircle-moon12">12</div>
          <div className="semicircle-moon13">13</div>

          {/* {petals} */}

          <div className="upperMainHome">
            <div className="headingHome">
              <img src={Aluminatiom} alt="" />
              <div className="noren">Noren of Nostalgia</div>
            </div>
          </div>

          <div className="lowerMainHome">
            <div
              className="registerHome"
              style={{ fontSize: "25px", color: "#700815", cursor: "pointer" }}
              onClick={() => handleNavClick("/signup")}
            >
              REGISTER
            </div>
          </div>
        </div>
      </Parallax>

      <div className="clouds1always" ><img src={cloud1} alt="" /></div>
      <div className="clouds2always" ><img src={cloud1} alt="" /></div>
      <div className="clouds3always" ><img src={cloud1} alt="" /></div>
      <div className="clouds1always" ><img src={cloud1} alt="" /></div>
      <div className="clouds2always" ><img src={cloud1} alt="" /></div>
      <div className="clouds3always" ><img src={cloud1} alt="" /></div>
      <div className="clouds1always" ><img src={cloud1} alt="" /></div>
      <div className="clouds2always" ><img src={cloud1} alt="" /></div>
      <div className="clouds3always" ><img src={cloud1} alt="" /></div>

      <div className="clouds1" style={cloudStyles.clouds1}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
      </div>

          
      {/* </div> */}

      {/* Parallax Layer 2 */}
      <Parallax bgImage={layer2} strength={200} zIndex={1000}>
        <div className="layer2" style={{ height: "100vh" }} ref={layerRefs[1]}>
          {/* <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 2 Content</h1> */}

          {/* About Us Section */}
          <div className="About">
            <div className="About_Heading">
              <p>About us</p>
            </div>
            <div className="About_Paragraph">
              <Character paragraph={paragraph} />
            </div>
          </div>
        </div>

        {/* Clouds above Layer 2 */}
      </Parallax>

      <div className="clouds2" style={cloudStyles.clouds2}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds2" style={{...cloudStyles.clouds2, left:'-25vw'}}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds2" style={{...cloudStyles.clouds2, left:'25vw'}}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds2" style={{...cloudStyles.clouds2, left:'-15vw'}}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds2" style={{...cloudStyles.clouds2, left:'15vw'}}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>


    
      {/* </div> */}

      {/* Parallax Layer 3 */}
      <Parallax bgImage={bgImage3} strength={150}>
        <div className="layer3" style={{ height: "130vh" }} ref={layerRefs[2]}>
          {/* <h1 style={{ textAlign: "center", color: "#fff" }}>
            Layer 3 Content
          </h1> */}

          <Count />
        </div>
      </Parallax>

      <div className="clouds3" style={cloudStyles.clouds3}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds3" style={{...cloudStyles.clouds3, left:'-20vw'}}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds3" style={{...cloudStyles.clouds3, left:'20vw'}}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds3" style={cloudStyles.clouds3}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds3" style={cloudStyles.clouds3}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds3" style={cloudStyles.clouds3}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>

      <div className="clouds3" style={cloudStyles.clouds3}>
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div>
      {/* </div> */}

      {/* Parallax Layer 4 */}
      <Parallax bgImage={layer4} strength={100}>
        <div
          className="layer4"
          style={{ height: "fit-content" }}
          ref={layerRefs[3]}
        >
          <div style={{ height: "20vh" }}></div>
          <Alumni3 />
          <div style={{ height: "10vh" }}></div>
          <div style={{ height: "10vh" }}></div>
          <div style={{ height: sponsors.length === 0 ? "40vh" : "130vh" }}>
            <Sponsor2 sponsors={sponsors} />
          </div>
          <Footer />
        </div>
      </Parallax>

      {/* <div className="clouds4">
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud2} alt="cloud3" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
      </div> */}
      {/* </div> */}

      {/* Parallax Layer 5 */}
      {/* <Parallax bgImage={layer5} strength={50}>
        <div
          className="layer5"
          ref={layerRefs[4]}
          style={{ height: sponsors.length === 0 ? "80vh" : "130vh" }}
        >
          <Sponsor2 sponsors={sponsors} />

          <Footer />
        </div>
      </Parallax> */}
    </div>
  );
}

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Parallax } from "react-parallax";
// import "./Home1.css";
// import "./Petal.css";
// import layer1 from "./photos24/layer1.png";
// import layer2 from "./photos24/layer2.png";
// import layer3 from "./photos24/layer3.png";
// import layer4 from "./photos24/layer4.png";
// import layer5 from "./photos24/layer5.png";
// import Petal from "./Petal";
// import backgroundMusic from "./photos24/bgm.mp3";
// import flagIcon from "./photos24/flag.png";
// import Count from "./count/Count";
// import Character from "./Character";

// function Home1() {
//   const [isMuted, setIsMuted] = useState(false);
//   const audioRef = useRef(new Audio(backgroundMusic));

//   // Layer references for scroll detection
//   const layerRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
//   const previousScrollY = useRef(0); // To track the previous scroll position

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const direction = currentScrollY > previousScrollY.current ? "down" : "up"; // Determine scroll direction
//       previousScrollY.current = currentScrollY;

//       for (let i = 0; i < layerRefs.length; i++) {
//         const layer = layerRefs[i].current;
//         const layerPosition = layer.getBoundingClientRect().top;
//         const layerHeight = layer.offsetHeight;

//         // Check if 10% of the layer is visible
//         const isLayerVisible = layerPosition <= window.innerHeight * 0.9 && layerPosition >= -layerHeight * 0.1;

//         // If scrolling down and the layer below is visible, or scrolling up and the layer above is visible
//         if (isLayerVisible && ((direction === "down" && layerPosition >= 0) || (direction === "up" && layerPosition <= 0))) {
//           window.scrollTo({
//             top: window.scrollY + layerPosition,
//             behavior: "smooth",
//           });
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleEnded = () => {
//       audioRef.current.currentTime = 0;
//       if (!isMuted) {
//         audioRef.current.play().catch((error) => {
//           console.error("Audio playback failed:", error);
//         });
//       }
//     };

//     audioRef.current.addEventListener("ended", handleEnded);

//     if (!isMuted) {
//       audioRef.current.play().catch((error) => {
//         console.error("Audio autoplay failed:", error);
//       });
//     }

//     return () => {
//       audioRef.current.pause();
//       audioRef.current.removeEventListener("ended", handleEnded);
//     };
//   }, [isMuted]);

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//     if (isMuted) {
//       audioRef.current.play().catch((error) => {
//         console.error("Audio playback failed:", error);
//       });
//     } else {
//       audioRef.current.pause();
//     }
//   };

//   const petals = Array.from({ length: 30 }).map((_, index) => (
//     <Petal key={index} />
//   ));

//   const paragraph =
//     "A Student run organisation at IIT Bombay, Connecting 60k+ Alumni and 12k+ Students Actively strengthens Student alumni relations through robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student - alumni Community since 2008.";

//   return (
//     <div className="newhome">
//       {/* Mute Button */}
//       <button
//         className="mute-button"
//         onClick={toggleMute}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           background: "rgba(255, 255, 255, 0.8)",
//           border: "2px solid #000",
//           borderRadius: "5px",
//           padding: "10px",
//           cursor: "pointer",
//           zIndex: 1000,
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src={flagIcon}
//           alt={isMuted ? "Unmute" : "Mute"}
//           style={{ width: "30px", height: "30px" }}
//         />
//         <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
//           {isMuted ? "Unmute" : "Mute"}
//         </span>
//       </button>

//       {/* Parallax Layer 1 */}
//       <Parallax bgImage={layer1} strength={300}>
//         <div
//           className="mainHome"
//           style={{ height: "100vh", position: "relative" }}
//           ref={layerRefs[0]} // Add ref for scroll detection
//         >
//           <div className="realistic-flame"></div>
//           <div className="semicircle-moon1">1</div>
//           {petals}
//           <div className="upperMainHome">
//             <div
//               className="headingHome"
//               style={{
//                 fontSize: "35px",
//                 position: "relative",
//                 right: "-55%",
//                 top: "69%",
//               }}
//             >
//               <div style={{ paddingLeft: "5%" }}>SARC PRESENTS</div>
//               <div style={{ fontSize: "70px", color: "#700815" }}>
//                 ALUMINATION
//               </div>
//             </div>
//           </div>
//           <div className="lowerMainHome">
//             <div
//               className="registerHome"
//               style={{ fontSize: "25px", color: "#700815" }}
//             >
//               REGISTER
//             </div>
//           </div>
//         </div>
//       </Parallax>

//       {/* Parallax Layer 2 */}
//       <Parallax bgImage={layer2} strength={200}>
//         <div
//           className="layer2"
//           style={{ height: "100vh" }}
//           ref={layerRefs[1]} // Add ref for scroll detection
//         >
//           <div className="About">
//             <h1>About us</h1>
//             <Character paragraph={paragraph} />
//           </div>
//         </div>
//       </Parallax>

//       {/* Parallax Layer 3 */}
//       <Parallax bgImage={layer3} strength={150}>
//         <div
//           className="layer3"
//           style={{ height: "250vh" }}
//           ref={layerRefs[2]} // Add ref for scroll detection
//         >
//           <Count />
//         </div>
//       </Parallax>

//       {/* Parallax Layer 4 */}
//       <Parallax bgImage={layer4} strength={100}>
//         <div
//           className="layer4"
//           style={{ height: "100vh" }}
//           ref={layerRefs[3]} // Add ref for scroll detection
//         >
//           <h1 style={{ textAlign: "center", color: "#fff" }}>
//             Layer 4 Content
//           </h1>
//         </div>
//       </Parallax>

//       {/* Parallax Layer 5 */}
//       <Parallax bgImage={layer5} strength={50}>
//         <div
//           className="layer5"
//           style={{ height: "100vh" }}
//           ref={layerRefs[4]} // Add ref for scroll detection
//         >
//           <h1 style={{ textAlign: "center", color: "#fff" }}>
//             Layer 5 Content
//           </h1>
//         </div>
//       </Parallax>
//     </div>
//   );
// }

// export default Home1;
