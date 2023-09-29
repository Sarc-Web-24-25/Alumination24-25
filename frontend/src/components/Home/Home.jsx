import HorizontalScroll from "react-scroll-horizontal";
import i1 from "./bgimg/i1.png";
import i2 from "./bgimg/i2.png";
import i3 from "./bgimg/i3.png";
import i4 from "./bgimg/i4.png";
import i5 from "./bgimg/i5.png";
import i6 from "./bgimg/i6.png";
import f1 from "./bgimg/final.png";
import god from "./bgimg/god.png";
import logo from "./bgimg/logo.png";
import ig1 from "./bgimg/ig1.png";
import women from "./bgimg/women.png";
import clock from "./bgimg/clock.png";
import React from 'react';


export default function Home() {
    const containerStyle = {
       // Adjust width as needed
       height:"94.1vh",
    };

    const childStyle = {
       // Adjust the child element width as needed
        height: "100vh",
        margin:"0px",
        
        
    };
    const imgstyle = {
         height:"700px",
         margin:"0px",
         
     };
     const textstyle={
        color:"#FFE500",
        fontSize:"70px",
     };
      const textstyle1={
        color:"#FFD6A0",
        fontSize:"35px",
     };
     const bgstyle = {
        // Adjust the child element width as needed
        backgroundImage: `url(${f1})`,
        height: "100vh",
        width:"2000vh",
        backgroundPosition: 'center',
         margin:"0px",
         display: 'flex',
   
     alignItems: 'center',
        //  justifyContent: 'space-evenly',

         
     };
     const aboutus={
        width:"150vh",
        height:"50vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
     };

    return (
        <div style={containerStyle}>
      <HorizontalScroll>
     
        <div style={childStyle}>
            <div style={bgstyle}>

               <img src={logo} style={imgstyle} alt="" /> 
               <img src={god} style={imgstyle}   alt="" /> 
              <div style={aboutus}> <h1 style={textstyle}>ABOUT US</h1>
               <p style={textstyle1}>A Student run organisation at IIT Bombay, Connecting 60k+ Alumni and 12k+ Students Actively strengthens Student alumni relations through robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student - alumni Community since 2008. </p>
            </div>
<img src={ig1} style={imgstyle}   alt="" /> 


     <div style={aboutus}></div>
  <img src={women} style={imgstyle}   alt="" /> 
            <div style={aboutus}></div>
            <img src={clock} style={imgstyle}   alt="" /> 
       
       
            </div>

          
       
        </div>
       
      </HorizontalScroll>
    </div>
    )
}