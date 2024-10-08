import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./components/Home/Navbar1";
import Home1 from "./components/Home/Home1";
import About from "./components/Home/About";
import Team from "./components/Home/Team";
import Team2 from "./components/Home/Team2/Team2";
import Gallery from "./components/Home/Gallery";
import Gallery2 from "./components/Home/gallery2";
import Events from "./components/Home/Events";
import Schedule from "./components/Home/schedule";
import Signup from "./components/Authentication/signup";
import Login from "./components/Authentication/login";
import Profile from "./components/Authentication/profile";
import UserRestrictedRoute from "./components/UserRestrictedRoute";
import Logout from "./components/Authentication/Logout";
import ForgotPassword from "./components/Authentication/forgotPassword";
import VerifyEmailView from "./components/VerifyEmailView";
import ChangePasswordView from "./components/ChangePasswordView";
import EventIndividual from "./components/Home/EventIndividual";
import Trailer from './components/Home/footerex';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Authentication/Auth.css'

function App() {
  return (
    <Router>
      {/* <Navbar1 /> */}
      <Routes>
        <Route path="/" element={<Home1 />} exact={true} />
        {/* <Route path="/team" element={<Team /> } exact={true} /> */}
        <Route path="/team" element={<Team2 /> } exact={true} />
        <Route path="/gallery" element={<Gallery2 />} exact={true} />
        <Route path="/signup" element={<Signup />} exact={true} />
        <Route path="/login" element={<Login />} exact={true}/>
        <Route path="/events" element={<Events />} exact={true} />
        <Route path="/:key" element={<EventIndividual />} exact={true} />
        <Route path="/schedule" element={<Schedule />} exact={true} />
        <Route path="/logout" element={<Logout />} exact={true} />
        <Route path="/forgotPassword" element={<ForgotPassword />} exact={true} />
        <Route path="/verify/:key" element={<VerifyEmailView />} exact={true} />
        <Route path="/changePassword/:key" element={<ChangePasswordView />} exact={true} />
        <Route path="/test" element={<Trailer />} exact={true} />
        <Route element={<UserRestrictedRoute/>}>
          <Route path="/profile" element={<Profile />} exact={true} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;