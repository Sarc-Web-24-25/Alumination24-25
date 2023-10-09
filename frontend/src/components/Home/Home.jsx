import HorizontalScroll from "react-scroll-horizontal";
import f1 from "./bgimg/final.jpeg";
import god from "./bgimg/statue.png";
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
import sp1 from "./bgimg/sp1.png"
import sp2 from "./bgimg/sp2.jpg"
import sp3 from "./bgimg/sp3.jpg"
import sp4 from "./bgimg/sp4.jpeg"
import sp5 from "./bgimg/sp5.jpg"
import sp6 from "./bgimg/sp6.jpg"
import sp7 from "./bgimg/sp7.avif"
import sp8 from "./bgimg/sp8.png"
import sp9 from "./bgimg/sp9.jpeg"
import sp10 from "./bgimg/sp10.jpeg"
import sp11 from "./bgimg/sp11.jpg"
import glass from "./bgimg/glass.png";
import nandan from "./bgimg/nandan.png";
import bhavish from "./bgimg/bhavish.png";
import lalit from "./bgimg/lalit.png";
import nitesh from "./bgimg/nitesh.png";
import bharat from "./bgimg/bharat.png";
import '../Home/all.css';
import CountUp from "react-countup";
import { useState } from "react";
import "./all.css";
import CursorAnimation from "./CursorAnimation"
import { useEffect } from "react";
import f1Phone from "./bgimg/finalPhone.jpeg";
import r1 from "./bgimg/r1.png";
import r2 from "./bgimg/r2.png";
import r3 from "./bgimg/r3.png";
import r4 from "./bgimg/r4.png";
import r5 from "./bgimg/r5.png";
import r6 from "./bgimg/r6.png";
import r7 from "./bgimg/r7.png";
import React, { Component } from 'react';


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
   const imgDivStyle = {
      margin: "0px",
      width: "65vw",
      marginTop: "-12vh",
   }
   const imgstyle = {
      margin: "0px",
      marginLeft: '0.2%',
      width: "65vw",
   };

   const imgStyleDivGod = {
      height: "110%",
      margin: "0px",
      marginLeft: '-1%',
      position: "relative",
   }
   const imgstylegod = {
      height: "100%",
      margin: "0px",
   };
   const imgstylegodd = {
      height: "100%",
      margin: "0px",
   };
   const imgstyle1 = {
      height: "500px",
      marginTop: "-40vh",
   };
   const registerNow = {
      color: "#FFE500",
      fontSize: "40px",
      fontFamily: 'Inknut Antiqua',
      marginLeft: "35vw",
      marginTop: "-20vh",
      fontWeight: '600'
   };
   const imgstyle2 = {
      height: "100vh",
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
      opacity: "0"

   };
   const imgstyle5 = {
      height: "90vh",
      marginLeft: "60px",
      marginRight: "-6.5vw",
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
      width: "auto",
      backgroundPosition: 'center',
      margin: "0px",
      display: 'flex',
      backgroundSize: "contain",

      alignItems: 'center',
      margin: "0px",
      display: 'flex',
      alignItems: 'center',
      animation: 'moveBackground 200s linear infinite', // Add this line to apply the animation
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
      width: "170px",
      height: "220px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column", // Add flex display
      alignItems: "center", // Center vertically
      justifyContent: "center", // Center horizontally
      margin: "30px",
      marginBottom: "5px",
      marginTop: "20px",
   };
   const frame11 = {
      width: "170px",
      height: "220px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column", // Add flex display
      alignItems: "center", // Center vertically
      justifyContent: "center", // Center horizontally
      margin: "30px",
      marginBottom: "5px",
      marginTop: "-15px",
      marginLeft: "210px"
   };
   const frame12 = {
      width: "170px",
      height: "220px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column", // Add flex display
      alignItems: "center", // Center vertically
      justifyContent: "center", // Center horizontally
      margin: "30px",
      marginBottom: "5px",
      marginTop: "-15px",
      marginRight: "210px"
   };
   const frame2 = {
      width: "280px",
      height: "280px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",// Add flex display
      alignItems: "center", // Center vertically
      justifyContent: "space-evenly", // Center horizontally
      margin: "30px",
      marginBottom: "1px",
      marginTop: "-10px",
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
      // animation: 'rotate 8s linear infinite', // Add rotation animation here
   };


   const [counterOn, setcounterOn] = useState(true);


   const [windowDimensions, setWindowDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
   });

   useEffect(() => {
      // Add a listener to update dimensions when the window size changes
      const handleResize = () => {
         setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);


   const ScrollComponent = windowDimensions.width <= 768 ? null : HorizontalScroll;



   return (
      <div style={containerStyle}>
         <CursorAnimation />
         {
            ScrollComponent ? <ScrollComponent reverseScroll={true}>
               <div style={childStyle}>

                  <div style={bgstyle}>

                     <div style={imgDivStyle}>
                        <img src={logo} style={imgstyle} alt="" />
                        {/* <div className="registerNow" style={registerNow}>Register Now!</div> */}
                     </div>
                     <div style={imgStyleDivGod}>
                        <div style={{ ...imgstylegodd, position: 'relative' }}>
                           <img style={{ height: "100%" }} src={god} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "-10%", left: "-35%" }}>
                           <img className="vibrate-animation1" style={{ height: "100%" }} src={r1} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "5%", left: "-25%" }}>
                           <img className="vibrate-animation2" style={{ height: "100%" }} src={r2} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "-20%", left: "-25%" }}>
                           <img className="vibrate-animation3" style={{ height: "100%" }} src={r3} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "0%", left: "0%" }}>
                           <img className="vibrate-animation4" style={{ height: "100%" }} src={r4} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "-5%", left: "20%" }}>
                           <img className="vibrate-animation1" style={{ height: "100%" }} src={r5} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "10%", left: "-31%" }}>
                           <img className="vibrate-animation2" style={{ height: "100%" }} src={r6} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "30%", left: "25%" }}>
                           <img className="vibrate-animation3" style={{ height: "100%" }} src={r7} alt="" />
                        </div>
                     </div>

                     <div id="about" style={aboutus}>
                           <h1 style={textstyle}>ABOUT US</h1>
                           <p style={textstyle1}>SARC proudly presents Alumination 2023, IIT Bombay's grandest student-alumni fest. This two-day extravaganza aims to quench your thirst for knowledge, harness the wisdom of our esteemed alumni, and create a bridge between students and our vast alumni network. With a diverse array of activities catering to interests in core, non-core, and unconventional fields, Alumination invites you to transform aspirations into achievements. Join us on October 21st and 22nd to let your dreams take flight and reunite with beloved alumni at their alma mater!</p>
                     </div>
                     <img src={ig1} style={imgstylegod} alt="" />
                     <div style={{ marginTop: "-30px" }} >


                        <div style={hcontain}><img src={glass} style={imgstyle4} alt="" /> <span style={textstyle3}> PAST SPEAKERS </span> <img src={glass} style={imgstyle4} alt="" /></div>
                        <div style={hcontain}>
                           <div style={frame1}> <img src={nandan} alt="" style={{ width: "170px", height: "220px", marginTop: "30px" }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Nandan Nilekani</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>Co-Founder Infosys</span></div>
                           <div style={frame1}> <img src={bhavish} alt="" style={{ width: "170px", height: "220px", marginTop: "30px" }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Bhavish Agrawal</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>CEO OLA</span></div>
                           <div style={frame1}> <img src={lalit} alt="" style={{ width: "170px", height: "220px", marginTop: "30px" }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Lalit Keshre</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>CEO Groww</span></div>
                        </div>

                        <div style={hcontain}>
                           <div style={frame11}> <img src={nitesh} alt="" style={{ width: "170px", height: "220px", }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Nitesh Tiwari</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>Film Director</span></div>
                           <div style={frame12}> <img src={bharat} alt="" style={{ width: "170px", height: "220px", }} /> <span style={{ color: "#FFD6A0", fontSize: "22px", marginBottom: "-10px" }}>Bharat Desai</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>Chairman,Syntel</span></div>

                        </div>

                        <img src={feather} style={imgstyle3} alt="" />
                     </div>
                     <img className="wobble-hor-top" src={clock} style={imgstyle1} alt="" />
                     <img src={smoke1} style={imgstyle2} alt="" />
                     <img src={smoke2} style={imgstyle2} alt="" />
                     <img src={smoke} style={imgstyle2} alt="" />
                     <img src={smoke3} style={imgstyle2} alt="" />

                     <div  style={{...contain, display: "none", width: "0"}}>
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

                        </div>
                        <div style={hcontain}>
                           <div>
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
                     <div id="sponsors" style={{ marginTop: "-40px", marginLeft: "70px", marginLeft:"-60vw"}}>
                        <div style={hcontain}> <span style={textstyle}> OUR SPONSORS </span></div>
                        <div style={hcontain}>
                           <a href="https://strategicerp.com/"><div style={frame2}> <img src={sp1} alt="" style={{ width: "200px", height: "200px", textDecoration: "none", }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", textDecoration: "none", fontFamily: 'Inknut Antiqua', }}>Title Sponsor</span></div></a>
                           {/* <div style={frame2}> <img src={sp2} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "30px" }}>sun</span></div>
      <div style={frame2}> <img src={sp3} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "30px" }}>clock</span></div> */}
                        </div>

                        <div style={hcontain}>
                           <a href="https://www.bankofbaroda.in/"><div style={frame2}> <img src={sp2} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Gold Sponsor</span></div></a>
                           <a href="https://www.cdslindia.com/"><div style={frame2}> <img src={sp3} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Silver Sponsor</span></div></a>

                        </div>



                     </div>

                     <div style={{ marginTop: "-40px", marginLeft: "70px" }}>
                        <div style={hcontain}> <span style={textstyle}> OUR PARTNERS </span></div>
                        <div style={hcontain}>
                           <a href="https://www.codingninjas.com/"><div style={frame2}> <img src={sp4} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Workshop Partner</span></div></a>
                           <a href="https://www.easemytrip.com/"><div style={frame2}> <img src={sp5} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Travel Partner</span></div></a>
                           <a href="https://www.abhibus.com/"><div style={frame2}> <img src={sp6} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Travel Partner</span></div></a>
                           <a href="#"><div style={frame2}> <img src={sp7} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Social Media Partner</span></div></a>
                        </div>

                        <div style={hcontain}>
                           <a href="https://www.lovelocal.in/"><div style={frame2}> <img src={sp8} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Women Empowerment Partner</span></div></a>
                           <a href="https://www.elearnmarkets.com/"><div style={frame2}> <img src={sp9} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Certificate Partner</span></div></a>
                        </div>



                     </div>
                     <div style={{ marginTop: "-300px", marginLeft: "70px" }}>
                        <div style={hcontain}> <span style={textstyle}> MEDIA PARTNER </span></div>

                        <div style={hcontain}>
                           <a href="#"><div style={frame2}> <img src={sp10} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Gold Hues</span></div></a>
                           <a href="#"><div style={frame2}> <img src={sp11} alt="" style={{ width: "200px", height: "200px" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Mirror Now</span></div></a>
                        </div>
                     </div>



                     <img src={women} style={imgstyle5} alt="" />
                  </div>
               </div>
            </ScrollComponent> :










               ///phoneeeeeeeeeee









               <div style={{...childStyle, overflowX: "hidden !important"}}>

                  <div className="bgstyle" style={{...bgstyle, overflowX: "hidden !important"}}>

                     <img src={logo} style={{...imgstyle, width: "95vw", marginBottom: "-14vh"}} alt="" />
                     <div style={imgStyleDivGod}>
                        <div style={{ ...imgstylegodd, position: 'relative', marginLeft:'100vw' }}>
                           <img style={{ height: "100%" }} src={god} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "-10%", left: "-33%" }}>
                           <img className="vibrate-animation1" style={{ height: "100%" }} src={r1} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "5%", left: "-25%" }}>
                           <img className="vibrate-animation2" style={{ height: "100%" }} src={r2} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "-20%", left: "-25%" }}>
                           <img className="vibrate-animation3" style={{ height: "100%" }} src={r3} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "0%", left: "0%" }}>
                           <img className="vibrate-animation4" style={{ height: "100%" }} src={r4} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "-5%", left: "20%" }}>
                           <img className="vibrate-animation1" style={{ height: "100%" }} src={r5} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "10%", left: "-31%" }}>
                           <img className="vibrate-animation2" style={{ height: "100%" }} src={r6} alt="" />
                        </div>
                        <div style={{ ...imgstylegodd, position: 'absolute', top: "30%", left: "25%" }}>
                           <img className="vibrate-animation3" style={{ height: "100%" }} src={r7} alt="" />
                        </div>
                     </div>

                     <div className="aboutus" style={{ ...aboutus,textAlign: 'center' }}>
                        <h1 style={textstyle}>ABOUT US</h1>
                        <p className="aboutuspara" style={textstyle1}>SARC proudly presents Alumination 2023, IIT Bombay's grandest student-alumni fest. This two-day extravaganza aims to quench your thirst for knowledge, harness the wisdom of our esteemed alumni, and create a bridge between students and our vast alumni network. With a diverse array of activities catering to interests in core, non-core, and unconventional fields, Alumination invites you to transform aspirations into achievements. Join us on October 21st and 22nd to let your dreams take flight and reunite with beloved alumni at their alma mater!</p>
                     </div>
                     <img src={ig1} style={imgstylegod} alt="" />
                     <div className="speakers" style={{ marginTop: "-30px" }} >


                        <div style={hcontain}><img src={glass} style={imgstyle4} alt="" /> <span className="speaker-heading" style={textstyle3}> PAST SPEAKERS </span> <img src={glass} style={imgstyle4} alt="" /></div>
                        <div className="main-con" style={hcontain}>
                           <div className="con-main" style={frame1}> <img src={nandan} alt="" style={{ width: "85vw", marginTop: "30px" }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Nandan Nilekani</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>Co-Founder Infosys</span></div>
                           <div className="con-main" style={frame1}> <img src={bhavish} alt="" style={{ width: "85vw", marginTop: "30px" }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Bhavish Agrawal</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>CEO OLA</span></div>

                           <div className="con-main" style={frame1}> <img src={lalit} alt="" style={{ width: "85vw", marginTop: "30px" }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Lalit Keshre</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>CEO Groww</span></div>


                           <div className="con-main" style={frame1}> <img src={nitesh} alt="" style={{ width: "85vw", marginTop: "30px" }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Nitesh Tiwari</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>Film Director</span></div>


                           <div className="con-main" style={frame1}> <img src={bharat} alt="" style={{ width: "85vw", marginTop: "30px" }} /> <span style={{ color: "#FFD6A0", fontSize: "23px", marginBottom: "-10px" }}>Bharat Desai</span><span style={{ color: "#FFD6A0", fontSize: "18px", marginTop: "2px" }}>Chairman,Syntel</span></div>



                        </div>

                        <img src={feather} style={imgstyle3} alt="" />
                     </div>
                     <img className="wobble-hor-top clock-apni" src={clock} style={imgstyle1} alt="" />
                     <img className="smoke-apni" src={smoke1} style={imgstyle2} alt="" />
                     <img  className="smoke-apni" src={smoke2} style={imgstyle2} alt="" />
                     <img  className="smoke-apni" src={smoke} style={imgstyle2} alt="" />
                     <img  className="smoke-apni" src={smoke3} style={imgstyle2} alt="" />

                     <div  className="image-apni" style={contain}>
                        <div  className="image-apni" style={hcontain}>
                           <div  className="image-apni" style={clock1Style}>
                              <div  className="image-apni" style={clock1Style}>
                                 <span style={textstyle2}>1000 +</span>
                              </div>
                           </div>

                           <div  className="image-apni" style={clock1Style}>
                              <div  className="image-apni" style={clock1Style}>
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
                        <div   className="image-apni" style={hcontain}>
                           <div   className="image-apni">
                              <div   className="image-apni" style={clock1}>
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
                     <div className="sponsors">
                        <div className="speaker-heading" style={hcontain}> <span style={{...textstyle, fontSize: '50px'}}> OUR SPONSORS </span></div>
                        <div style={{marginBottom: "20vh", marginTop:"-15vh"}}>
                           <a href="https://strategicerp.com/"><div style={{...frame2}}> <img src={sp1} alt="" style={{ width: "90vw", textDecoration: "none", }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", textDecoration: "none", fontFamily: 'Inknut Antiqua', marginTop: "-7vh" }}>Title Sponsor</span></div></a>
                        </div>

                        <div>

                           <a style={{alignItems: "center"}} href="https://www.bankofbaroda.in/"><div style={{...frame2, marginBottom:"25vh"}}> <img src={sp2} alt="" style={{width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Gold Sponsor</span></div></a>


                           <a href="https://www.cdslindia.com/"><div style={frame2}> <img src={sp3} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Silver Sponsor</span></div></a>

                        </div>



                     </div>

                     <div style={{marginTop:"2vh"}} className="sponsors">
                        <div className="speaker-heading"  style={hcontain}> <span style={textstyle}> OUR PARTNERS  </span></div>

                           <a href="https://www.codingninjas.com/"><div style={{...frame2, marginBottom:"20vh"}}> <img src={sp4} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Workshop Partner</span></div></a>
                           <a href="https://www.easemytrip.com/"><div style={{...frame2, marginBottom:"20vh"}}> <img src={sp5} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Travel Partner</span></div></a>

                           
                           <a href="https://www.abhibus.com/"><div style={{...frame2, marginBottom:"20vh"}}> <img src={sp6} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Travel Partner</span></div></a>


                           <a href="#"><div style={{...frame2, marginBottom:"20vh"}}> <img src={sp7} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Social Media Partner</span></div></a>



                           <a style={{marginBottom: '20vh'}} href="https://www.lovelocal.in/"><div style={{...frame2, marginBottom:"20vh"}}> <img src={sp8} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Women Empowerment Partner</span></div></a>



                           <a href="https://www.elearnmarkets.com/"><div style={{...frame2, marginBottom:"20vh"}}> <img src={sp9} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Certificate Partner</span></div></a>




                     </div>
                     <div className="speakers" >
                        <div className="speaker-heading" style={hcontain}> <span style={textstyle}> MEDIA PARTNER </span></div>

                        <div >
                           <a href="#"><div style={{...frame2, marginBottom:"20vh"}}> <img src={sp10} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Gold Hues</span></div></a>
                           <a href="#"><div style={{...frame2, marginBottom:"20vh"}}> <img src={sp11} alt="" style={{ width: "90vw" }} /> <span style={{ color: "#FFD6A0", fontSize: "25px", fontFamily: 'Inknut Antiqua', }}>Mirror Now</span></div></a>
                        </div>
                     </div>


                     <img src={women} style={imgstyle5} alt="" />
                  </div>
               </div>
         }
      </div>
   )
}