

// import React, { useState, useRef, useEffect } from "react";
// import { Parallax } from "react-parallax"; 
// import "./Home1.css";
// import "./Petal.css"; 
// import layer1 from "./photos24/layer1.png"; 
// import layer2 from "./photos24/layer2.png"; 
// import layer3 from "./photos24/layer3.png";
// import layer4 from "./photos24/layer4.png"; // New layer
// import layer5 from "./photos24/layer5.png"; // New layer
// import dragon from "./photos24/dragon.png";
// import cloud1 from './photos24/Cloud1.png';
// import cloud2 from './photos24/Clouds2.png';
// import cloud3 from './photos24/Clouds3.png';
// import Petal from './Petal'; 
// import backgroundMusic from './photos24/bgm.mp3'; 
// import flagIcon from './photos24/flag.png';

// function Home1() {
//     const [isMuted, setIsMuted] = useState(false); 
//     const [isLayer2Visible, setIsLayer2Visible] = useState(false); 
    
//     const audioRef = useRef(new Audio(backgroundMusic));



//     useEffect(() => {
//         const handleScroll = () => {
//             const layer2Position = document.querySelector('.layer2').getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;
//             setIsLayer2Visible(layer2Position < windowHeight / 2);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         const handleEnded = () => {
//             audioRef.current.currentTime = 0; 
//             if (!isMuted) {
//                 audioRef.current.play().catch((error) => {
//                     console.error("Audio playback failed:", error);
//                 });
//             }
//         };

//         audioRef.current.addEventListener("ended", handleEnded);

//         if (!isMuted) {
//             audioRef.current.play().catch((error) => {
//                 console.error("Audio autoplay failed:", error);
//             });
//         }

//         return () => {
//             audioRef.current.pause();
//             audioRef.current.removeEventListener("ended", handleEnded);
//         };
//     }, [isMuted]);

//     const toggleMute = () => {
//         setIsMuted((prev) => !prev);
//         if (isMuted) {
//             audioRef.current.play().catch((error) => {
//                 console.error("Audio playback failed:", error);
//             });
//         } else {
//             audioRef.current.pause();
//         }
//     };

//     const petals = Array.from({ length: 30 }).map((_, index) => <Petal key={index} />);

//     return (
//         <div className="newhome">
//             {/* Mute Button */}
//             <button
//                 className="mute-button"
//                 onClick={toggleMute}
//                 style={{
//                     position: 'absolute',
//                     top: '20px',
//                     right: '20px',
//                     background: 'rgba(255, 255, 255, 0.8)',
//                     border: '2px solid #000',
//                     borderRadius: '5px',
//                     padding: '10px',
//                     cursor: 'pointer',
//                     zIndex: 1000,
//                     display: 'flex',
//                     alignItems: 'center',
//                 }}
//             >
//                 <img
//                     src={flagIcon}
//                     alt={isMuted ? "Unmute" : "Mute"}
//                     style={{ width: '30px', height: '30px' }}
//                 />
//                 <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
//                     {isMuted ? "Unmute" : "Mute"}
//                 </span>
//             </button>

//             {/* Parallax Layer 1 */}
//             <Parallax bgImage={layer1} strength={300}>
//                 <div 
//                     className={`mainHome ${isLayer2Visible ? 'moveDown' : ''}`} 
//                     style={{ height: "100vh", position: 'relative' }}
//                 >
//                     {petals}
//                     <div className="upperMainHome">
//                         <div className="dragonHome">
//                             <img src={dragon} alt="Dragon" className="dragonImage" />
//                         </div>
//                         <div className="headingHome">
//                             <div>SARC PRESENTS</div>
//                             <div className="aluminationTitle">ALUMINATION</div>
//                         </div>
//                     </div>
//                     <div className="lowerMainHome">
//                         <div className="registerHome">
//                             REGISTER
//                         </div>
//                     </div>
//                 </div>

//                 {/* Clouds below Layer 1 */}
//                 <div className="clouds" style={{ top: "70%" }}> 
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud2} alt="cloud3" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//             </Parallax>

//             {/* Parallax Layer 2 */}
//             <Parallax bgImage={layer2} strength={200}>
//                 <div className="layer2" style={{ height: "100vh" }}>
//                     <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 2 Content</h1>

//                     {/* About Us Section */}
//                     <div className="about-section">
//                         <div className="about-box">
//                             <h2>About Us</h2>
//                             <div className="about-scroll">
//                                 <p className="scrolling-text">
//                                     A Student-run organization at IIT Bombay, connecting 60k+ Alumni and 12k+ students.
//                                     Actively strengthens Student-alumni relations through a robust calendar of 50+ events 
//                                     conducted throughout the year. Student Alumni Relations Cell has been proudly fostering 
//                                     a vibrant student-alumni community since 2008.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Clouds above Layer 2 */}
//                 <div className="clouds">
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud2} alt="cloud3" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>

//                 <div className="clouds" style={{ top: "70%" }}> 
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud2} alt="cloud3" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//             </Parallax>

//             {/* Parallax Layer 3 */}
//             <Parallax bgImage={layer3} strength={150}>
//                 <div className="layer3" style={{ height: "100vh" }}>
//                     <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 3 Content</h1>
//                 </div>
//                 <div className="clouds" style={{ top: "70%" }}> 
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud2} alt="cloud3" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//                 <div className="clouds" > 
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud2} alt="cloud3" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//             </Parallax>

//             {/* Parallax Layer 4 */}
//             <Parallax bgImage={layer4} strength={100}>
//                 <div className="layer4" style={{ height: "100vh" }}>
//                     <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 4 Content</h1>
//                 </div>

//                 <div className="clouds" style={{ top: "70%" }}> 
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud2} alt="cloud3" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//                 <div className="clouds">
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud2} alt="cloud3" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//             </Parallax>

//             {/* Parallax Layer 5 */}
//             <Parallax bgImage={layer5} strength={50}>
//                 <div className="layer5" style={{ height: "100vh" }}>
//                     <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 5 Content</h1>
//                 </div>
//                 <div className="clouds" > 
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud2} alt="cloud3" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//             </Parallax>
//         </div>
//     );
// }

// export default Home1;








import React, { useState, useRef, useEffect } from "react";
import { Parallax } from "react-parallax"; 
import "./Home1.css";
import "./Petal.css"; 
import layer1 from "./photos24/layer1.png"; 
import layer2 from "./photos24/layer2.png"; 
import layer3 from "./photos24/layer3.png";
import layer4 from "./photos24/layer4.png"; // New layer
import layer5 from "./photos24/layer5.png"; // New layer
import dragon from "./photos24/dragon.png";
import cloud1 from './photos24/Cloud1.png';
import cloud2 from './photos24/Clouds2.png';
import cloud3 from './photos24/Clouds3.png';
import Petal from './Petal'; 
import backgroundMusic from './photos24/bgm.mp3'; 
import flagIcon from './photos24/flag.png';
import Count from './count/Count';

function Home1() {
    const [isMuted, setIsMuted] = useState(false); 
    const [isLayer2Visible, setIsLayer2Visible] = useState(false); 
    
    const audioRef = useRef(new Audio(backgroundMusic));

      // Scroll ref for parallax sections
      const layerRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const layer2Position = document.querySelector('.layer2').getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            setIsLayer2Visible(layer2Position < windowHeight / 2);
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
            {/* Mute Button */}
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

            {/* Parallax Layer 1 */}
            <Parallax bgImage={layer1} strength={300}>
                <div 
                    className={`mainHome ${isLayer2Visible ? 'moveDown' : ''}`} 
                    style={{ height: "100vh", position: 'relative' }}
                >
                    {petals}
                    <div className="upperMainHome">
                        <div className="dragonHome">
                            <img src={dragon} alt="Dragon" className="dragonImage" />
                        </div>
                        <div className="headingHome">
                            <div>SARC PRESENTS</div>
                            <div className="aluminationTitle">ALUMINATION</div>
                        </div>
                    </div>
                    <div className="lowerMainHome">
                        <div className="registerHome">
                            REGISTER
                        </div>
                    </div>
                </div>

                {/* Clouds below Layer 1 */}
                <div className="clouds" style={{ top: "70%" }}> 
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud2} alt="cloud2" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud2} alt="cloud3" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                </div>
            </Parallax>

            {/* Parallax Layer 2 */}
            <Parallax bgImage={layer2} strength={200}>
                <div className="layer2" style={{ height: "100vh" }}>
                    <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 2 Content</h1>

                    {/* About Us Section */}
                    <div className="about-section">
                        <div className="about-box">
                            <h2>About Us</h2>
                            <div className="about-scroll">
                                <p className="scrolling-text">
                                    A Student-run organization at IIT Bombay, connecting 60k+ Alumni and 12k+ students.
                                    Actively strengthens Student-alumni relations through a robust calendar of 50+ events 
                                    conducted throughout the year. Student Alumni Relations Cell has been proudly fostering 
                                    a vibrant student-alumni community since 2008.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clouds above Layer 2 */}
                <div className="clouds">
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud2} alt="cloud2" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud2} alt="cloud3" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                </div>

                <div className="clouds" style={{ top: "70%" }}> 
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud2} alt="cloud2" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud2} alt="cloud3" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                </div>
            </Parallax>

            {/* Parallax Layer 3 */}
            <Parallax bgImage={layer3} strength={150}>
                {/* <div className="layer3" >
                    <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 3 Content</h1>
                </div> */}
                <div className="count_k" style={{ height: "200vh" }}>
                    <Count />
                </div>

                <div className="clouds" style={{ top: "70%" }}> 
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud2} alt="cloud2" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud2} alt="cloud3" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                </div>
                <div className="clouds" > 
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud2} alt="cloud2" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud2} alt="cloud3" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                </div>
            </Parallax>

            {/* Parallax Layer 4 */}
            <Parallax bgImage={layer4} strength={100}>
                <div className="layer4" style={{ height: "100vh" }}>
                    <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 4 Content</h1>
                </div>

                <div className="clouds" style={{ top: "70%" }}> 
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud2} alt="cloud2" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud2} alt="cloud3" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                </div>
                <div className="clouds">
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud2} alt="cloud2" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud2} alt="cloud3" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                </div>
            </Parallax>

            {/* Parallax Layer 5 */}
            <Parallax bgImage={layer5} strength={50}>
                <div className="layer5" style={{ height: "100vh" }}>
                    <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 5 Content</h1>
                </div>
                <div className="clouds" > 
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud2} alt="cloud2" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud2} alt="cloud3" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                    <img src={cloud1} alt="cloud1" className="cloud" />
                    <img src={cloud3} alt="cloud3" className="cloud" />
                </div>
            </Parallax>
        </div>
    );
}

export default Home1;
