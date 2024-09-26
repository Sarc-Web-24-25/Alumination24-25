// import React from "react";
// import { Parallax } from "react-parallax"; // Import Parallax component
// import "./Home1.css";
// import layer1 from "./photos24/layer1.png"; // Top layer image
// import layer2 from "./photos24/layer2.png"; // Bottom layer image
// import dragon from "./photos24/dragon.png";
// import cloud1 from './photos24/Cloud1.png';
// import cloud2 from './photos24/Clouds2.png';
// import cloud3 from './photos24/Clouds3.png';

// function Home1() {
//     return (
//         <div className="newhome">
//             {/* Parallax Layer 1 */}
//             <Parallax bgImage={layer1} strength={300}>
//                 <div className="mainHome" style={{ height: "100vh" }}>
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
//                 <div className="clouds">
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//             </Parallax>

//             {/* Parallax Layer 2 */}
//             <Parallax bgImage={layer2} strength={100}>
//                 <div className="layer2">
//                     <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 2 Content</h1>
//                 </div>
//                 {/* Clouds above Layer 2 */}
//                 <div className="clouds">
//                     <img src={cloud1} alt="cloud1" className="cloud" />
//                     <img src={cloud2} alt="cloud2" className="cloud" />
//                     <img src={cloud3} alt="cloud3" className="cloud" />
//                 </div>
//             </Parallax>

//             {/* About Us Section */}
//             {/* <div className="About">
//                 <h1>About Us</h1>
//                 <p>
//                     A Student-run organization at IIT Bombay, connecting 60k+ Alumni and 12k+ students. Actively strengthens Student-alumni relations through a robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student-alumni community since 2008.
//                 </p>
//             </div> */}
//         </div>
//     );
// }

// export default Home1;

import React from "react";
import { Parallax } from "react-parallax"; // Import Parallax component
import "./Home1.css";
import layer1 from "./photos24/layer1.png"; // Top layer image
import layer2 from "./photos24/layer2.png"; // Bottom layer image
import dragon from "./photos24/dragon.png";
import cloud1 from './photos24/Cloud1.png';
import cloud2 from './photos24/Clouds2.png';
import cloud3 from './photos24/Clouds3.png';
// Ensure this file exists

function Home1() {
    return (
        <div className="newhome">
            {/* Parallax Layer 1 */}
            <Parallax bgImage={layer1} strength={300}>
                <div className="mainHome" style={{ height: "100vh" }}>
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
                <div className="clouds" style={{ top: "70%" }}> {/* Adjusted for layer 1 */}
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
            <Parallax bgImage={layer2} strength={100}>
                <div className="layer2">
                    <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 2 Content</h1>
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
            </Parallax>

            {/* About Us Section */}
            {/* <div className="About">
                <h1>About Us</h1>
                <p>
                    A Student-run organization at IIT Bombay, connecting 60k+ Alumni and 12k+ students. Actively strengthens Student-alumni relations through a robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student-alumni community since 2008.
                </p>
            </div> */}
        </div>
    );
}

export default Home1;
