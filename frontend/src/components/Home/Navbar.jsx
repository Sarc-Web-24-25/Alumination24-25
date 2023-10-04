import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Home/bgimg/logo.png";
export default function Navbar1() {


  const bg = {
    backgroundColor: "#2B1815",
  };
  const text = {
    color: "#FFD1AB",
    fontSize: "25px",
    margin: "0px",
    backgroundColor: "#2B1815",
     
  };
  const navLinkStyle = {
    color: "#FFD1AB",
    fontSize: "25px",
    backgroundColor: "#2B1815",
    textDecoration: "none", // Remove underlines
    padding: "10px", // Add padding for clickable area
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={text} >Home</Nav.Link>
            <Nav.Link href="/about" style={text}>About</Nav.Link>
            <Nav.Link href="/team" style={text}>Team</Nav.Link>
            <Nav.Link href="/gallery" style={text}>Gallery</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="dropdown" style={text} id="basic-nav-dropdown" placement="end" >
              <NavDropdown.Item href="/" style={text}>Profile</NavDropdown.Item>
              <NavDropdown.Item href="/login" style={text}>Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup" style={text}>SignUp</NavDropdown.Item>
      
               
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
        // <div style={{ display: 'flex', flexDirection: "row" }}>
        //     <a style={{ margin: "10px" }} href="/">Home</a>
        //     <a style={{ margin: "10px" }} href="/about">About</a>
        //     <a style={{ margin: "10px" }} href="/team">Team</a>
        //     <a style={{ margin: "10px" }} href="/gallery">Gallery</a>
        //     <a style={{ margin: "10px" }} href="/login">Login</a>
        //     <a style={{ margin: "10px" }} href="/signup">Signup</a>
        // </div>
// import React, { useState } from 'react';
// import './Navbar.css'; // Import your CSS file for styling

// function Navbar1() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="../Home/bgimg/logo.png" alt="Logo" />
//       </div>

//       <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Events</a></li>
//         <li><a href="#">Gallery</a></li>
//         <li><a href="#">About</a></li>
//       </ul>

//       <div className="navbar-profile">
//         <div className="profile-icon" onClick={toggleMenu}>
//           <img src="../Home/bgimg/logo.png" alt="Profile" />
//         </div>
//         <div className={`profile-dropdown ${isMenuOpen ? 'active' : ''}`}>
//           <ul>
//             <li><a href="#">Login</a></li>
//             <li><a href="#">Register</a></li>
//             <li><a href="#">Profile</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar1;
