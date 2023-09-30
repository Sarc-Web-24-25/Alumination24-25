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
import smoke from "./bgimg/smoke.png";
import smoke1 from "./bgimg/smoke1.png";
import smoke2 from "./bgimg/smoke2.png";
import smoke3 from "./bgimg/smoke3.png";
import counter from "./bgimg/counter.png";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import axios from 'axios';




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
     const imgstyle1 = {
      height:"500px",
      marginTop:"-220px",
      
  };
  const imgstyle2 = {
   height:"700px",
   margin:"-550px",
   
};
const imgstyle3 = {
   height:"250px",
   marginLeft:"0px",
   
};
     const textstyle={
        color:"#FFE500",
        fontSize:"70px",
     };
      const textstyle1={
        color:"#FFD6A0",
        fontSize:"35px",
     };
     const textstyle2={
      color:"#FFE500",
      fontSize:"50px",
      marginLeft:"15px",
   
   };
     const bgstyle = {
        // Adjust the child element width as needed
        backgroundImage: `url(${f1})`,
        height: "100vh",
        width:"9000px",
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
     const contain={

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:"-600px",
     };
     const hcontain={
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
     };
     const clock1 = {
      width: "300px",
      height: "300px",
      backgroundSize: "cover",
      backgroundImage: `url(${counter})`,
      backgroundPosition: "center",
      display: "flex", // Add flex display
      alignItems: "center", // Center vertically
      justifyContent: "center", // Center horizontally
      opacity:"0.9",
      margin:"2px",
    };

     const [counterOn,setcounterOn]=useState(true);
    return (
        <div style={containerStyle}>
      <HorizontalScroll>
     
        <div style={childStyle}>
       
            <div style={bgstyle}>

               <img src={logo} style={imgstyle} alt="" /> 
               <img src={god} style={imgstyle}   alt="" /> 
              
              <div style={aboutus}>
                <h1 style={textstyle}>ABOUT US</h1>
               <p style={textstyle1}>A Student run organisation at IIT Bombay, Connecting 60k+ Alumni and 12k+ Students Actively strengthens Student alumni relations through robust calendar of 50+ events conducted throughout the year. Student Alumni Relations Cell has been proudly fostering a vibrant student - alumni Community since 2008. </p>
              
              
            </div>
            


          

           
<img src={ig1} style={imgstyle}   alt="" /> 


     <div style={aboutus}>
     {/* <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)} >
              <h1 style={textstyle}>
               {counterOn && <CountUp start={0} end={1000} duration={5} delay={0} />} +</h1>
               </ScrollTrigger> */}
             </div>
             
            
  <img src={women} style={imgstyle}   alt="" /> 
            <div style={aboutus}></div>
            
            <img src={clock} style={imgstyle1}   alt="" /> 
            <img src={smoke1} style={imgstyle2}   alt="" /> 
            <img src={smoke2} style={imgstyle2}   alt="" /> 
            <img src={smoke} style={imgstyle2}   alt="" /> 
            <img src={smoke3} style={imgstyle2}   alt="" /> 

            <div style={contain}>
            <div style={hcontain}>
           <div style={clock1}> <span style={textstyle2}>
            {counterOn && <CountUp start={0} end={1000} duration={5} delay={7} />} +</span></div>
            <div style={clock1}> <span style={textstyle2}>
            {counterOn && <CountUp start={0} end={5000} duration={5} delay={7} />} +</span></div>
            <div style={clock1}> <span style={textstyle2}>
            {counterOn && <CountUp start={0} end={10000} duration={5} delay={7} />} +</span></div>
      
            </div>
            <div style={hcontain}>
            <div style={clock1}> <span style={textstyle2}>
            {counterOn && <CountUp start={0} end={4000} duration={5} delay={7} />} +</span></div>
            <div style={clock1}> <span style={textstyle2}>
            {counterOn && <CountUp start={0} end={7000} duration={5} delay={7} />} +</span></div>
            
            </div>
            </div>
       
       
            </div>

            

          
          
        </div>
        
       
      </HorizontalScroll>
    </div>
    )
}