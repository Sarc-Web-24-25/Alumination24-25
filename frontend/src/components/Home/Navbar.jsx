import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../logo.png";
import dropdownImage from "./bgimg/dropdown.png"; // Import your image here

export default function CustomNavbar() {
  const bg = {
    backgroundColor: "#2B1815",
  };
  const text = {
    color: "#FFD1AB",
    fontSize: "25px",
    margin: "0px",
    backgroundColor: "#2B1815",
    fontFamily: 'Inknut Antiqua',
    padding: '0 20%'
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Navbar expand="lg" style={bg}>
      <Navbar.Brand href="#home">
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
      <Nav className="justify-content-center">
        <Nav.Link href="/" style={text}>Home</Nav.Link>
        <Nav.Link href="/about" style={text}>About</Nav.Link>
        <Nav.Link href="/team" style={text}>Team</Nav.Link>
        <Nav.Link href="/gallery" style={text}>Gallery</Nav.Link>
      </Nav>
      <Nav className="ms-auto">
        <div style={{ position: 'relative' }}>
          <img
            src={dropdownImage} // Use your image source here
            alt="Dropdown Image"
            width="50" // Adjust the width as needed
            height="50" // Adjust the height as needed
            style={{ cursor: "pointer" }}
            onClick={handleDropdownClick}
          />
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                zIndex: 1,
              }}
            >
              <NavDropdown.Item href="/" style={text}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/login" style={text}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/signup" style={text}>
                SignUp
              </NavDropdown.Item>
            </div>
          )}
        </div>
      </Nav>
    </Navbar>
  )
}
