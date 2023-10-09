import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../logo.png";
import dropdownImage from "./bgimg/dropdown.png"; // Import your image here
import './navbarr.css'

export default function CustomNavbar() {
  const bg = {
    backgroundColor: "#2B1815",
  };
  const text = {
    color: "#FFD1AB",
    fontSize: "25px",
    backgroundColor: "#2B1815",
    fontFamily: 'Inknut Antiqua',
    padding: '0 7%'
  };

  const [currUrl, setCurrUrl] = useState(window.location.href);
  const [thisOne, setThisOne] = useState(false);

  useEffect(() => {
    if(currUrl.includes("events") || currUrl.includes("profile") || currUrl.includes("logout") || currUrl.includes("gallery") || currUrl.includes("team") || currUrl.includes("signup") || currUrl.includes("login") || currUrl.includes("forgotPassword") || currUrl.includes("changePassword")) {
      setThisOne(true);
    }else{
      setThisOne(false);
    }
  },[currUrl]);

  const scrollToAbout = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
  };
  
  const scrollToSponsors = () => {
      const sponsorsSection = document.getElementById('sponsors');
      if (sponsorsSection) {
        sponsorsSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'center' });
      }
  };
  


  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Navbar expand="lg" style={bg}>
      <Navbar.Brand style={{ marginLeft: "20px" }} href="/">
        <img
          src={logo}
          width="75"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/about" style={text}></Nav.Link>
        <Nav.Link href="/team" style={text}></Nav.Link>
        <Nav.Link href="/gallery" style={text}></Nav.Link>
      </Nav>
      <Nav className="justify-content-center apna-nav">
        <Nav.Link href="/" style={text}>Home</Nav.Link>
        <Nav.Link href="/events" style={text}>Events</Nav.Link>
        {!thisOne && <Nav.Link onClick={scrollToAbout} style={text}>About</Nav.Link>}
        <Nav.Link href="/team" style={text}>Team</Nav.Link>
        <Nav.Link href="/gallery" style={text}>Gallery</Nav.Link>
        {!thisOne && <Nav.Link onClick={scrollToSponsors} style={text}>Sponsors</Nav.Link>}
      </Nav>
      <Nav className="ms-auto">
        <div style={{ position: 'relative', marginRight: "10px" }}>
          <img
            src={dropdownImage} // Use your image source here
            alt="Dropdown Image"
            width="50" // Adjust the width as needed
            height="50" // Adjust the height as needed
            style={{ cursor: "pointer", backgroundColor: "black", borderRadius: "50%", border: "1px solid white", padding: "5px" }}
            onClick={handleDropdownClick}
          />
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: "10px",
                zIndex: 1,
                width: "150px",
              }}
            >
              <NavDropdown.Item href="/profile" style={text}>
                Profile
              </NavDropdown.Item>
              {!thisOne && <NavDropdown.Item className="not-apna-nav" onClick={scrollToAbout} style={text}>
                About
              </NavDropdown.Item>}
              <NavDropdown.Item className="not-apna-nav" href="/events" style={text}>
                Events
              </NavDropdown.Item>
              <NavDropdown.Item className="not-apna-nav" href="/gallery" style={text}>
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item className="not-apna-nav" href="/team" style={text}>
                Team
              </NavDropdown.Item>
              { !thisOne && <NavDropdown.Item onClick={scrollToSponsors} className="not-apna-nav" href="/#sponsors" style={text}>
                Sponsors
              </NavDropdown.Item>}
              {
                localStorage.getItem('userData') != null ? <NavDropdown.Item href="/logout" style={text}>Logout</NavDropdown.Item> : <>
                  <NavDropdown.Item href="/login" style={text}>
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/signup" style={text}>
                    SignUp
                  </NavDropdown.Item>
                </>

              }
            </div>
          )}
        </div>
      </Nav>
    </Navbar>
  )
}
