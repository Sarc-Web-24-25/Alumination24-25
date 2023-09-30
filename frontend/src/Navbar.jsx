import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./logo.png";
export default function Navbar1() {


    const bg ={
        backgroundColor:"#2B1815",
    };
    const text ={
        color:"#FFD1AB",
        fontSize:"25px",
        margin:"0px",
        backgroundColor:"#2B1815"
     
    };
    return (

        <Navbar  expand="lg"  style={bg}>
        <Container>
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
              <Nav.Link href="/about"  style={text}>About</Nav.Link>
              <Nav.Link href="/team"  style={text}>Team</Nav.Link>
              <Nav.Link href="/gallery"  style={text}>Gallery</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
              <NavDropdown  title="dropdown" style={text}  id="basic-nav-dropdown" placement="end" >
                <NavDropdown.Item href="/" style={text}>Profile</NavDropdown.Item>
                <NavDropdown.Item href="/login" style={text}>Login</NavDropdown.Item>
                <NavDropdown.Item href="/signup" style={text}>SignUp</NavDropdown.Item>
      
               
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        // <div style={{ display: 'flex', flexDirection: "row" }}>
        //     <a style={{ margin: "10px" }} href="/">Home</a>
        //     <a style={{ margin: "10px" }} href="/about">About</a>
        //     <a style={{ margin: "10px" }} href="/team">Team</a>
        //     <a style={{ margin: "10px" }} href="/gallery">Gallery</a>
        //     <a style={{ margin: "10px" }} href="/login">Login</a>
        //     <a style={{ margin: "10px" }} href="/signup">Signup</a>
        // </div>
    )
}