import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Navbar1.css';
import flag from './photos24/flag.png';

function Navbar1() {
  // State to keep track of the selected nav item
  const [selectedNav, setSelectedNav] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavClick = (navItem, route) => {
    setSelectedNav(navItem); // Update the selected nav item
    navigate(route); // Navigate to the specified route
  };

  return (
    <div className='navbarNew' style={{position:'fixed',top:'0',left:'0',width:'100%',zIndex:'1000'}}>
      <div className='homeFlag' onClick={() => handleNavClick('flag', ' ')}>
        <img src={flag} alt="" style={{width:'200px',height:'260px'}}/>
      </div>
      <div className='spaceHome'></div>
      <div className='navitems'>
        <div 
          className={`navitem1 ${selectedNav === 'navitem1' ? 'active1' : ''}`}
          onClick={() => handleNavClick('navitem1', '/events')} // Route to /events
        >
          <div>E</div>
          <div>V</div>
          <div>E</div>
          <div>N</div>
          <div>T</div>
          <div>S</div>
        </div>
        <div 
          className={`navitem2 ${selectedNav === 'navitem2' ? 'active2' : ''}`}
          onClick={() => handleNavClick('navitem2', '/gallery')} // Route to /gallery
        >
          <div>G</div>
          <div>A</div>
          <div>L</div>
          <div>L</div>
          <div>E</div>
          <div>R</div>
          <div>Y</div>
        </div>
        <div 
          className={`navitem3 ${selectedNav === 'navitem3' ? 'active3' : ''}`}
          onClick={() => handleNavClick('navitem3', '/team')} // Route to /team
        >
          <div>T</div>
          <div>E</div>
          <div>A</div>
          <div>M</div>
        </div>
      </div>
      <div className='profileHome'></div>
    </div>
  );
}

export default Navbar1;

