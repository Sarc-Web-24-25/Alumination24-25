import React from "react";
import { Parallax } from "react-parallax"; // Import Parallax component
import "./Home1.css";
import layer1 from "./photos24/layer1.png"; // Top layer image
import layer2 from "./photos24/layer2.png"; // Bottom layer image
import dragon from "./photos24/dragon.png";

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
            <div className="registerHome">REGISTER</div>
          </div>
        </div>
      </Parallax>

      {/* Parallax Layer 2 */}
      <Parallax bgImage={layer2} strength={100} style={{ height: "100vh" }}>
        <div className="layer2" style={{ height: "100vh" }}>
          <h1 style={{ textAlign: "center", color: "#fff" }}>Layer 2 Content</h1>
        </div>
      </Parallax>
    </div>
  );
}

export default Home1;
