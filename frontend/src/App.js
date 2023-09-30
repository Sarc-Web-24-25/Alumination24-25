import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./Navbar";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Team from "./components/Home/Team";
import Gallery from "./components/Home/Gallery";
import Events from "./components/Home/Events";
import Signup from "./components/Authentication/signup";
import Login from "./components/Authentication/login";

function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
