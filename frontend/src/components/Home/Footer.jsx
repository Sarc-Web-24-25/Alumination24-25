import React from "react";
import "./Footer.css";
import sarclogo from "../../logo.png";
import footerbg from "../../components/Home/photos24/footerbg.png";
import headfooter from "../../components/Home/photos24/headfooter.png";
import facebook from "../../components/Home/photos24/facebookfoot.png";

const Footer = () => {
  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/ZKp4vxWRyfpx5fLD9", "_blank");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="footer-distributed" style={{ backgroundImage: `url(${footerbg})`, marginTop: "10vh" }}>
        <div className="footer-left">
          {/* <img src={sarclogo} alt="SARC Logo" className="footer-logo" /> */}
          <img src={headfooter} alt="Alumination" style={{ height: `6rem`, margin: "0 auto" }}/>

          <div className="social-icons">
            <a href="https://www.facebook.com/SARC.IITB/">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://www.youtube.com/c/SARCIITBombay">
              <i className="fab fa-youtube" />
            </a>
            <a href="https://www.instagram.com/sarc_iitb/">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://in.linkedin.com/company/student-alumni-relations-cell">
              <i className="fab fa-linkedin" />
            </a>
          </div>

          <p className="contact-details" style={{marginBottom: "7vh"}}>
            <i className="fa fa-phone" />
            <p className="contact-info">+91 77348 44289</p>
            <br />
            <i className="fa fa-map-marker" onClick={handleLocationClick} />
            <p className="contact-info">SARC Room, Old SAC, IIT Bombay</p>
            <br />
            <i className="fa fa-envelope" />
            <a href="mailto:sarc@iitb.ac.in">
              <p
                className="contact-info"
                style={{ color: "black", marginRight: "auto" }}
              >
                sarc@iitb.ac.in
              </p>
            </a>
          </p>
        </div>
        <div className="footer-bottom">
          <p style={{margin: 0}}> Made with <span className="heart">❤️</span> by <strong>SARC</strong> </p>
        </div> 
      </div> 
         
    </>
  );
};

export default Footer;

// const Footer = () => {

//     const handleLocationClick = () => {
//         window.open('https://maps.app.goo.gl/ZKp4vxWRyfpx5fLD9', '_blank');
//     };

//     return (
//         <>
//             <link
//                 rel="stylesheet"
//                 href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
//             />
//             <link
//                 href="https://fonts.googleapis.com/css?family=Cookie"
//                 rel="stylesheet"
//                 type="text/css"
//             />
//             <footer className="footer-distributed">
//                 <div className="footer-left">
//                     <img src={sarclogo}></img>
//                     <p className="footer-links">
//                         <a href="/">Home</a>|<a href="/events">Event</a>|<a href="/team">Team</a>|<a href="/gallery">Gallery</a>|
//                         <a href="/team">Team</a>
//                     </p>
//                     <p className="footer-company-name">
//                         Copyright © 2023 <strong>SARC</strong> All rights reserved
//                     </p>
//                 </div>

//                 <div className="footer-center">
//                     <div className="location-container" onClick={handleLocationClick}>
//                         <i className="fa fa-map-marker" />
//                         <p>
//                             <span>SARC Room, IITB</span>
//                         </p>
//                     </div>

//                     <div className='fa-phone1'>
//                         <i className="fa fa-phone" />
//                         <p>Akash Banger: <br></br>+91 9814417989<br></br> Pranita Randive:<br></br> +91 8010503085</p>
//                     </div>
//                     <div>
//                         <i className="fa fa-envelope" />
//                         <p>
//                             <a href="mailto:sarc-iitb@gmail.com">sarc-iitb@gmail.com</a>
//                         </p>
//                     </div>
//                 </div>

//                 <div className="footer-center1">
//                     <div className="location-container" onClick={handleLocationClick}>
//                         <i className="fa fa-map-marker" />
//                         <p>
//                             <span>SARC Room, IITB</span>
//                         </p>
//                     </div>

//                     <div>
//                         <i className="fa fa-phone" /><br></br>
//                         <p>Akash Banger: <br></br>+91 9814417989<br></br> Pranita Randive:<br></br> +91 8010503085</p>
//                     </div>
//                     <div>
//                         <i className="fa fa-envelope" /><br></br>
//                         <p>
//                             <a href="mailto:sarc-iitb@gmail.com">sarc-iitb@gmail.com</a>
//                         </p>
//                     </div>
//                 </div>

//                 <div className="footer-right">
//                     <p className="footer-company-about">
//                         <span>SARC🤍</span>
//                         Join us for resplendent conversations on 21st and 22nd October at "Alumination 2023: A Resplendent Resurgence" where students and alumni engage in a symphony of ideas, igniting the spark of knowledge passed through generations.
//                     </p>
//                     <div className="footer-icons">
//                         <a href="https://www.facebook.com/SARC.IITB/">
//                             <i className="fa fa-facebook" />
//                         </a>
//                         <a href="https://www.instagram.com/sarc_iitb/">
//                             <i className="fa fa-instagram" />
//                         </a>
//                         <a href="https://in.linkedin.com/company/student-alumni-relations-cell">
//                             <i className="fa fa-linkedin" />
//                         </a>
//                         <a href="https://www.youtube.com/c/SARCIITBombay">
//                             <i className="fa fa-youtube" />
//                         </a>
//                     </div>
//                 </div>
//             </footer>
//         </>

//     );
// };

// export default Footer;
