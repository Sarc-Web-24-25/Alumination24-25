
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { Spin as Hamburger } from "hamburger-react"; // Import the Hamburger from hamburger-react
import "./Navbar1.css";
import flag from "./photos24/flagD.png";
import "./phoneNavbar.css";

import logo from "./photos24/logoPhone.png";

function Navbar1() {
  // State to keep track of the selected nav item
  const [selectedNav, setSelectedNav] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786); // Track if the screen is mobile
  const [isOpen, setIsOpen] = useState(false); // State to manage hamburger open/close
  const [isOpen2, setIsOpen2] = useState(false); // State to manage hamburger open/close

  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavClick = (navItem, route) => {
    setSelectedNav(navItem); // Update the selected nav item
    navigate(route); // Navigate to the specified route
    setIsOpen(false); // Close the hamburger menu after clicking an item
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786); // Update the state based on screen size
    };

    window.addEventListener("resize", handleResize); // Add event listener for resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? ( // Conditionally render the desktop navbar
        <div
          className="navbarNew"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            zIndex: "1000",
          }}
        >
          <div className="homeFlag" onClick={() => handleNavClick("flag", " ")}>
            <img
              src={flag}
              alt=""
              style={{ width: "150px", height: "260px" }}
            />
          </div>
          <div className="spaceHome"></div>
          <div className="navitems">
            <div
              className={`navitem1 ${
                selectedNav === "navitem1" ? "active1" : ""
              }`}
              onClick={() => handleNavClick("navitem1", "/events")} // Route to /events
            >
              <div className="letterhome">E</div>
              <div className="letterhome">V</div>
              <div className="letterhome">E</div>
              <div className="letterhome">N</div>
              <div className="letterhome">T</div>
              <div className="letterhome">S</div>
            </div>
            <div
              className={`navitem2 ${
                selectedNav === "navitem2" ? "active2" : ""
              }`}
              onClick={() => handleNavClick("navitem2", "/gallery")} // Route to /gallery
            >
              <div className="letterhome">G</div>
              <div className="letterhome">A</div>
              <div className="letterhome">L</div>
              <div className="letterhome">L</div>
              <div className="letterhome">E</div>
              <div className="letterhome">R</div>
              <div className="letterhome">Y</div>
            </div>
            <div
              className={`navitem3 ${
                selectedNav === "navitem3" ? "active3" : ""
              }`}
              onClick={() => handleNavClick("navitem3", "/team")} // Route to /team
            >
              <div className="letterhome">T</div>
              <div className="letterhome">E</div>
              <div className="letterhome">A</div>
              <div className="letterhome">M</div>
            </div>
          </div>
          <div className="profileHome">
            <div className="menuHamburger"><Hamburger toggled={isOpen2} toggle={setIsOpen2} size={30} color="#ffffff"></Hamburger></div>
          </div>
          {isOpen2 && (
            <div className="menuProfile">
              {localStorage.getItem("accessToken") ? (
                <div
                  className={`menuLapProfile ${selectedNav === "menuLapProfile" ? "activate" : ""}`}
                  onClick={() => handleNavClick("menuLapProfile", "/profile")}
                >
                  Profile
                </div>
              ) : (
                <div
                  className={`menuLapLogin ${selectedNav === "menuLapLogin" ? "activate" : ""}`} 
                  onClick={() => handleNavClick("menuLapLogin", "/login")}
                >
                  Login
                </div>
              )}
              <div className={`scheduleLaptop ${selectedNav === "scheduleLaptop" ? "activate" : ""}`} onClick={() => handleNavClick("scheduleLaptop", "/schedule")}>Schedule</div>

            </div>
          )}
        </div>
      ) : (
        // Conditionally render the mobile navbar
        <>
          <div className="phoneNavbar">
            <div className="phoneLinesNav"></div>
            <div className="phoneLinesNav0"></div>
            <div className="phoneLinesNav"></div>
          </div>
          <div
            className="phoneCircular1"
            onClick={() => handleNavClick("logo", " ")}
          >
            <img src={logo} alt="" />
          </div>

          <div className="phoneCircular2">
            <div className="custom-hamburger">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={30}
                color="#ffffff"
              />
            </div>
            {/* Hamburger toggle */}
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mobileMenu">
              <div className="innerMobile">
                <div
                  className="phoneNavEvents"
                  onClick={() => handleNavClick("navitem1", "/events")}
                >
                  Events
                </div>
                <div
                  className="phoneNavGallery"
                  onClick={() => handleNavClick("navitem2", "/gallery")}
                >
                  Gallery
                </div>
                <div
                  className="phoneNavTeam"
                  onClick={() => handleNavClick("navitem3", "/team")}
                >
                  Team
                </div>
                <div
                  className="phoneNavSchedule"
                  onClick={() => handleNavClick("navitem4", "/schedule")}
                >
                  Schedule
                </div>
                {localStorage.getItem("accessToken") ? (
                  <div
                    className="phoneNavProfile"
                    onClick={() => handleNavClick("navitem5", "/profile")}
                  >
                    Profile
                  </div>
                ) :                   <div
                className="phoneNavLogin"
                onClick={() => handleNavClick("navitem6", "/login")}
              >
                Login
              </div>}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Navbar1;
