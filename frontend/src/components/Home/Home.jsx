import HorizontalScroll from "react-scroll-horizontal";
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
import feather from "./bgimg/feather.png";
import frame from "./bgimg/frame.png";
import glass from "./bgimg/glass.png";
import '../Home/all.css';
import CountUp from "react-countup";
import { useState } from "react";
import "./all.css";
import CursorAnimation from "./CursorAnimation"


export default function Home() {
   const containerStyle = {
      // Adjust width as needed
      height: "92vh",
   };

   const childStyle = {
      // Adjust the child element width as needed
      height: "100vh",
      margin: "0px",
   };
   const imgstyle = {
      height: "75%",
      margin: "0px",
      marginLeft: '0.5%'

   };
   const imgstylegod = {
      height: "80%",
      margin: "0px",
      marginLeft: '-1%'

   };
   const imgstyle1 = {
      height: "500px",
      marginTop: "-40vh",
   };
   const imgstyle2 = {
      height: "700px",
      margin: "-550px",

   };
   const imgstyle4 = {
      height: "100px",
      width: "50px",
      margin: "7px",

   };
   const imgstyle3 = {
      height: "800px",
      marginLeft: "550px",
      marginTop: "-900px",

   };
   const imgstyle5 = {
      height: "700px",
      marginLeft: "950px",


   };
   const textstyle = {
      color: "#FFE500",
      fontSize: "70px",
      fontFamily: 'Inknut Antiqua'
   };
   const textstyle1 = {
      color: "#FFD6A0",
      fontSize: "35px",
      fontFamily: 'Inknut Antiqua',
      justifyContent: 'center',
      textAlign: 'center'
   };
   const textstyle3 = {
      color: "#F4DEA8",
      fontSize: "70px",
      fontFamily: 'Inknut Antiqua',
      fontWeight: '600'
   };
   const textstyle2 = {
      color: "#FFE500",
      fontSize: "50px",
      marginLeft: "15px",

   };
   const bgstyle = {
      // Adjust the child element width as needed
      backgroundImage: `url(${f1})`,
      height: "100vh",
      width: "8000px",
      backgroundPosition: 'center',
      margin: "0px",
      display: 'flex',

      alignItems: 'center',
      //  justifyContent: 'space-evenly',
      backgroundImage: `url(${f1})`,
      height: "100vh",
      width: "8000px",
      backgroundPosition: 'center',
      margin: "0px",
      display: 'flex',
      alignItems: 'center',
      animation: 'moveBackground 30s linear infinite', // Add this line to apply the animation


   };
   const aboutus = {
      width: "150vh",
      height: "50vh",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
   };
   const contain = {

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "-600px",
   };
   const hcontain = {

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
      opacity: "0.9",
      margin: "2px",
   };
   const frame1 = {
      width: "520px",
      height: "220px",
      borderRadius: "15px",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#020000",
      backgroundImage: `url(${frame})`,
      backgroundPosition: "start",
      backgroundSize: "contain",
      display: "flex", // Add flex display
      alignItems: "center", // Center vertically
      justifyContent: "center", // Center horizontally
      opacity: "0.8",
      margin: "30px",
      marginBottom: "5px",
      marginTop: "1px",
   };
   const clock1Style = {
      width: "300px",
      height: "300px",
      backgroundSize: "cover",
      backgroundImage: `url(${counter})`,
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: "0.9",
      margin: "2px",
      animation: 'rotate 8s linear infinite', // Add rotation animation here
   };


   const [counterOn, setcounterOn] = useState(true);
   return (
      <div style={containerStyle}>
         <CursorAnimation />
         <HorizontalScroll>

            <div style={childStyle}>

               <div style={bgstyle}>

                  <img src={logo} style={imgstyle} alt="" />
                  <img src={god} style={imgstylegod} alt="" />

                  <div style={aboutus}>
                     <h1 style={textstyle}>ABOUT US</h1>
                     <p style={textstyle1}>SARC proudly presents Alumination 2023, IIT Bombay's grandest student-alumni fest. This two-day extravaganza aims to quench your thirst for knowledge, harness the wisdom of our esteemed alumni, and create a bridge between students and our vast alumni network. With a diverse array of activities catering to interests in core, non-core, and unconventional fields, Alumination invites you to transform aspirations into achievements. Join us on October 21st and 22nd to let your dreams take flight and reunite with beloved alumni at their alma mater!</p>
                  </div>
                  <img src={ig1} style={imgstyle} alt="" />
                  <div >
                     {/* <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)} >
              <h1 style={textstyle}>
               {counterOn && <CountUp start={0} end={1000} duration={5} delay={0} />} +</h1>
               </ScrollTrigger> */}

                     <div style={hcontain}><img src={glass} style={imgstyle4} alt="" /> <span style={textstyle3}> NOTABLE ALUMNI </span> <img src={glass} style={imgstyle4} alt="" /></div>
                     <div style={hcontain}>
                        <div style={frame1}></div>
                        <div style={frame1}></div>
                        <div style={frame1}></div>
                     </div>

                     <div style={hcontain}>
                        <div style={frame1}></div>
                        <div style={frame1}></div>

                     </div>

                     <img src={feather} style={imgstyle3} alt="" />
                  </div>
                  <img className="wobble-hor-top" src={clock} style={imgstyle1} alt="" />     
                  <img src={smoke1} style={imgstyle2} alt="" />
                  <img src={smoke2} style={imgstyle2} alt="" />
                  <img src={smoke} style={imgstyle2} alt="" />
                  <img src={smoke3} style={imgstyle2} alt="" />

                  <div style={contain}>
                     <div style={hcontain}>
                        <div style={clock1Style}>
                           <div style={clock1Style}>
                              <span style={textstyle2}>1000 +</span>
                           </div>
                        </div>

                        <div style={clock1Style}>
                           <div style={clock1Style}>
                              <span style={textstyle2}>1000 +</span>
                           </div>
                        </div>
                        {/* <div style={{ ...clock1, animation: 'rotate 8s linear infinite' }}>
                           <div style={clock1}>
                              <span style={textstyle2}>
                                 {counterOn && <CountUp start={0} end={1000} duration={5} delay={5} />} +
                              </span>
                           </div>
                        </div> */}

                     </div>
                     <div style={hcontain}>
                        <div style={{ ...clock1, animation: 'rotate 8s linear infinite' }}>
                           <div style={clock1}>
                              <span style={textstyle2}>
                                 {counterOn && <CountUp start={0} end={1000} duration={5} delay={5} />} +
                              </span>
                           </div>
                        </div>
                        {/* <div style={{ ...clock1, animation: 'rotate 8s linear infinite' }}>
                           <div style={clock1}>
                              <span style={textstyle2}>
                                 {counterOn && <CountUp start={0} end={1000} duration={5} delay={5} />} +
                              </span>
                           </div>
                        </div> */}

                     </div>
                  </div>
                  <img src={women} style={imgstyle5} alt="" />
               </div>
            </div>
         </HorizontalScroll>
      </div>
   )
}