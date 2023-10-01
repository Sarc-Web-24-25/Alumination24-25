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
import Day1 from "./components/Home/day1";
import Day2 from "./components/Home/day2";
import Signup from "./components/Authentication/signup";
import Login from "./components/Authentication/login";
import Profile from "./components/Authentication/profile";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
      </Routes>
    </Router>
  );
}

export default App;
