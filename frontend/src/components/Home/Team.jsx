// import React from 'react';
// import './Team.css'; // Import your CSS file
// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
// const socialIconStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '10px'
//     // Add more styles here
// };
// const TeamPage = () => {
//     return (
//         <div className="team-page">
//             <h1>Our Team</h1>
//             <div className="center-images">
//                 <div className="center-image">
//                     <img className = "prerna" src="team_member1.jpg"  />
//                     <p>Prerna Agarwal</p>
//                     <div className="social-icons">
//                         <a href="#">
//                             <FaFacebook />
//                         </a>
//                         <a href="#">
//                             <FaInstagram />
//                         </a>
//                         <a href="#" >
//                             <FaLinkedin />
//                         </a>
//                     </div>
//                 </div>
//                 <div className="center-image">
//                     <img className= "aastha" src="team_member2.jpg" />
//                     <p>Aastha Patel</p>
//                     <div className="social-icons">
//                         <a href="#">
//                             <FaFacebook />
//                         </a>
//                         <a href="#">
//                             <FaInstagram />
//                         </a>
//                         <a href="#">
//                             <FaLinkedin />
//                         </a>
//                     </div>
                    
//                 </div>
//             </div>
//             <div className="team-grid">
//                 {/* Left Column */}
//                 <div className="team-column">
//                     <div className="team-row">
//                         <div className="team-member">
//                             <img className="sancheti" src="team_member3.jpg" />
//                             <p>Aastha Sancheti</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="team-member">
//                             <img className="priyaank" src="team_member4.jpg" />
//                             <p>Priyaank Sheth</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Add more team members here */}
//                 </div>
//                 {/* Right Column */}
//                 <div className="team-column">
                    
//                     <div className="team-row">
//                         <div className="team-member">
//                             <img className="himanshu" src="team_member5.jpg" />
//                             <p>Himanshu Nagar</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="team-member">
//                             <img className="jay" src="team_member6.jpg" />
//                             <p>Jay Arora</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Add more team members here */}
//                 </div>
//             </div>
//             <div className="team-grid">
//                 {/* Left Column */}
//                 <div className="team-column">
//                     <div className="team-row">
//                         <div className="team-member">
//                             <img className="kinjal" src="team_member3.jpg" />
//                             <p>Kinjal Sao</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="team-member">
//                             <img className="aniruddh" src="team_member4.jpg" />
//                             <p>Aniruddh Goyal</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Add more team members here */}
//                 </div>
//                 {/* Right Column */}
//                 <div className="team-column">
//                     <div className="team-row">
//                         <div className="team-member">
//                             <img className="agrajah" src="team_member5.jpg" />
//                             <p>Agrajah Bhobe</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="team-member">
//                             <img className="garv" src="team_member6.jpg" />
//                             <p>Garv Gupta</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Add more team members here */}
//                 </div>
//             </div>
//             <div className="team-grid">
//                 {/* Left Column */}
//                 <div className="team-column">
//                     <div className="team-row">
//                         <div className="team-member">
//                             <img className="shounak" src="team_member3.jpg" />
//                             <p>Shounak Dewoolkar</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="team-member">
//                             <img className="vishal" src="team_member4.jpg"/>
//                             <p>Vishal Kumar</p>
//                             <div className="social-icons">
//                                 <a href="#">
//                                     <FaFacebook />
//                                 </a>
//                                 <a href="#">
//                                     <FaInstagram />
//                                 </a>
//                                 <a href="#">
//                                     <FaLinkedin />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Add more team members here */}
//                 </div>
//                 {/* Right Column */}
//                 <div className="team-column">
//                     <div className="team-row">
//                         <div className="team-member">
//                             <img className="vaibhavi" src="team_member5.jpg"/>
//                             <p>Vaibhavi Shinde</p>
//                         </div>
//                         <div className="team-member">
//                             <img className="priyanshi" src="team_member6.jpg" />
//                             <p>Priyanshi Garg</p>
//                         </div>
//                     </div>
//                     {/* Add more team members here */}
//                 </div>
//             </div>
//             <div className="team-grid">
//                 {/* Left Column */}
//                 <div className="team-column">
//                     <div className="team-row">
//                         <div className="team-member">
//                             <img className="sanket" src="team_member3.jpg"/>
//                             <p>Sanket Bafna</p>
//                         </div>
//                         <div className="team-member">
//                             <img className="nakul" src="team_member4.jpg" />
//                             <p>Nakul Bagrecha</p>
//                         </div>
//                     </div>
//                     {/* Add more team members here */}
//                 </div>
//                 {/* Right Column */}
//                 <div className="team-column">
//                     <div className="team-row">
//                         <div className="team-member">
//                             <img className="pranita" src="team_member5.jpg" />
//                             <p>Pranita Randive</p>
//                         </div>
//                         <div className="team-member">
//                             <img className='akash'  src="team_member6.jpg" />
//                             <p>Akash Banger</p>
//                         </div>
//                     </div>
//                     {/* Add more team members here */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TeamPage;
import React from 'react';
import './Team.css'; // Import your CSS file

const TeamPage = () => {
    return (
        <div className="team-page">
            <h1>Our Team</h1>
            <div className="horizontal-scroll">
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg"  />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg"  />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg" />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg" />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg" />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg" />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg" />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg" />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg" />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg" />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg" />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg" />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg" />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg" />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg" />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg" />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                <div className="team-column">
                    <div className="team-member">
                        <img className="prerna" src="team_member1.jpg" />
                        <p>Prerna Agarwal</p>
                    </div>
                    <div className="team-member">
                        <img className="aastha" src="team_member2.jpg" />
                        <p>Aastha Patel</p>
                    </div>
                </div>
                {/* Repeat the above structure for the other team members */}
                {/* You should have 9 columns in total */}
            </div>
        </div>
    );
};

export default TeamPage;
