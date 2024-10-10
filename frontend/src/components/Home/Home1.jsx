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
import cloud1 from "./photos24/Cloud1.png";
import cloud2 from "./photos24/Clouds2.png";
import cloud3 from "./photos24/Clouds3.png";
import Petal from "./Petal";
import backgroundMusic from "./photos24/bgm.mp3";
import flagIcon from "./photos24/flag.png";
import Count from "./count/Count";
import Character from "./Character";
import Alumni3 from "./Alumni3/Alumni3.jsx";
import Sponsor2 from "./Sponsor2/Sponsor2.jsx";
import Footer from "./Footer.jsx";
import Aluminatiom from "./photos24/AluminationLogo.png";

export default function Home1() {
  const [isMuted, setIsMuted] = useState(false);
  const [isLayer2Visible, setIsLayer2Visible] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  const audioRef = useRef(new Audio(backgroundMusic));

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

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > previousScrollY.current ? "down" : "up";
      previousScrollY.current = currentScrollY;

      for (let i = 0; i < layerRefs.length; i++) {
        const layer = layerRefs[i].current;
        const layerPosition = layer.getBoundingClientRect().top;
        const layerHeight = layer.offsetHeight;

        // Check if 25% of the layer is visible
        const isLayerVisible = layerPosition <= window.innerHeight * 0.75 && layerPosition >= -layerHeight * 0.25;

        if (
          isLayerVisible &&
          ((direction === "down" && layerPosition >= 0) ||
            (direction === "up" && layerPosition <= 0))
        ) {
          window.scrollTo({
            top: window.scrollY + layerPosition,
            behavior: "smooth",
          });
          break;
        }
      }
    }, 20); // Adjust the delay to 100ms for debouncing

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    axios
      .get("http://127.0.0.1:8000/api/sponsors/")
      .then((response) => {
        const sponsor_list = [...response.data];
        let sponsors = [];
        sponsor_list.forEach((sponsor) => {
          sponsors.push({
            image: `http://127.0.0.1:8000${sponsor.image}`,
            url: sponsor.url
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

  const [bgImage1, setBgImage1] = useState(layer1); // Default background image
  const [bgImage3, setBgImage3] = useState(layer3); // Default background image

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
        setBgImage1(layer1PH); // Use small image for screens smaller than 786px
        setBgImage3(layer3PH); // Use small image for screens smaller than 786px
      } else {
        setBgImage1(layer1); // Use default image for larger screens
        setBgImage3(layer3); // Use default image for larger screens
      }
    };

    // Call the function on initial load
    handleResize();

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
        setBgImage1(layer1PH); // Use small image for screens smaller than 786px
        setBgImage3(layer3PH); // Use small image for screens smaller than 786px
      } else {
        setBgImage1(layer1); // Use default image for larger screens
        setBgImage3(layer3); // Use default image for larger screens
      }
    };

    // Call the function on initial load
    handleResize();

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="newhome">
      {/* Mute Button */}
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
          src={flagIcon}
          alt={isMuted ? "Unmute" : "Mute"}
          style={{ width: "30px", height: "30px" }}
        />
        <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
          {isMuted ? "Unmute" : "Mute"}
        </span>
      </button>

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

          {petals}

          <div className="upperMainHome">
            <div className="headingHome">
              <img src={Aluminatiom} alt="" />
              <div className="noren">Noren of Nostalgia</div>
            </div>
          </div>

          <div className="lowerMainHome">
            <div
              className="registerHome"
              style={{ fontSize: "25px", color: "#700815" }}
              onClick={() => handleNavClick("/signup")}
            >
              REGISTER
            </div>
          </div>
        </div>
      </Parallax>

      <div className="clouds1">
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        {/* <img src={cloud2} alt="cloud3" className="cloud" /> */}
        {/* <img src={cloud3} alt="cloud3" className="cloud" />
          <img src={cloud1} alt="cloud1" className="cloud" />
          <img src={cloud3} alt="cloud3" className="cloud" /> */}
      </div>
      {/* </div> */}

      {/* Parallax Layer 2 */}
      <Parallax bgImage={layer2} strength={200} zIndex={1000}>
        <div className="layer2" style={{ height: "150vh" }} ref={layerRefs[1]}>
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

      <div className="clouds2">
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        {/* <img src={cloud2} alt="cloud3" className="cloud" /> */}
        {/* <img src={cloud3} alt="cloud3" className="cloud" />
          <img src={cloud1} alt="cloud1" className="cloud" />
          <img src={cloud3} alt="cloud3" className="cloud" /> */}
      </div>
      {/* </div> */}

      {/* Parallax Layer 3 */}
      <Parallax bgImage={bgImage3} strength={150}>
        <div className="layer3" style={{ height: "120vh" }} ref={layerRefs[2]}>
          {/* <h1 style={{ textAlign: "center", color: "#fff" }}>
            Layer 3 Content
          </h1> */}


          <Count />
        </div>
      </Parallax>

      <div className="clouds3">
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        {/* <img src={cloud2} alt="cloud3" className="cloud" /> */}
        {/* <img src={cloud3} alt="cloud3" className="cloud" />
          <img src={cloud1} alt="cloud1" className="cloud" />
          <img src={cloud3} alt="cloud3" className="cloud" /> */}
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
        </div>
      </Parallax>

      <div className="clouds4">
        <img src={cloud1} alt="cloud1" className="cloud" />
        <img src={cloud2} alt="cloud2" className="cloud" />
        <img src={cloud3} alt="cloud3" className="cloud" />
        {/* <img src={cloud2} alt="cloud3" className="cloud" /> */}
        {/* <img src={cloud3} alt="cloud3" className="cloud" />
          <img src={cloud1} alt="cloud1" className="cloud" />
          <img src={cloud3} alt="cloud3" className="cloud" /> */}
      </div>
      {/* </div> */}

      {/* Parallax Layer 5 */}
      <Parallax bgImage={layer5} strength={50}>
        <div className="layer5" ref={layerRefs[4]} style={{ height: "130vh" }}>
          {sponsors.length !== 0 &&
            <Sponsor2 sponsors={sponsors} />
          }
        </div>
        <Footer />
      </Parallax>
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
