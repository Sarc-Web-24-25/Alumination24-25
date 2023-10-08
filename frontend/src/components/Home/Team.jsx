import React from 'react';
import './Team.css'; // Import your CSS file

const TeamPage = () => {
    return (
        <div className="team-container">
            <h1>Our Team</h1>
            <h2>Overall Coordinators</h2>
            <div className="top-images">
                <div className='OC'>
                    <img className='aastha' />
                    <p>Aastha Patel</p>
                </div>
                <div className='OC'>
                    <img className='prerna' />
                    <p>Prerna Agarwal</p>
                </div>
            </div>
            <div className="team-members">
                <div className='title'>
                    <h2>ASMP</h2>
                <div className="left-column">
                    <div className="team-member">
                        <img className='sancheti'  />
                        <p>Aastha Sancheti</p>
                    </div>
                    <div className="team-member">
                        <img className='priyaank' />
                        <p>Priyaank Sheth</p>
                        </div>
                </div>
                </div>
                <div className='title'>
                    <h2>Design</h2>
                <div className="right-column">
                    <div className="team-member">
                        <img className='himanshu' />
                        <p>Himanshu Nagar</p>
                    </div>
                    <div className="team-member">
                        <img className='jay'/>
                        <p>Jay Arora</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="team-members">
                <div className='title'>
                    <h2>Events</h2>
                <div className="left-column">
                    <div className="team-member">
                        <img className='aniruddh' />
                        <p>Aniruddh Goyal</p>
                    </div>
                    <div className="team-member">
                        <img className='kinjal' />
                        <p>Kinjal Sao</p>
                    </div>
                </div>
                </div>
                <div className='title'>
                    <h2>HDA</h2>
                <div className="right-column">
                    <div className="team-member">
                        <img className='agrajah' />
                        <p>Agrajah Bhobe</p>
                    </div>
                    <div className="team-member">
                        <img className='garv' />
                        <p>Garv Gupta</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="team-members">
                <div className='title'>
                    <h2>Marketing</h2>
                <div className="left-column">
                    <div className="team-member">
                        <img className='shounak' />
                        <p>Shounak Dewoolkar</p>
                    </div>
                    <div className="team-member">
                        <img className='vishal' />
                        <p>Vishal Kumar</p>
                    </div>
                </div>
                </div>
                <div className='title'>
                    <h2>Media & PR</h2>
                <div className="right-column">
                    <div className="team-member">
                        <img className='priyanshi' />
                        <p>Priyanshi Garg</p>
                    </div>
                    <div className="team-member">
                        <img className='vaibhavi' />
                        <p>Vaibhavi Shinde</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="team-members">
                <div className='title'>
                    <h2>Operations</h2>
                <div className="left-column">
                    <div className="team-member">
                        <img className='nakul' />
                        <p>Nakul Bagrecha</p>
                    </div>
                    <div className="team-member">
                        <img className='sanket' />
                        <p>Sanket Bafna</p>
                    </div>
                </div>
                </div>
                <div className='title'>
                    <h2>Web</h2>
                <div className="right-column">
                    <div className="team-member">
                        <img className='akash' />
                        <p>Akash Banger</p>
                    </div>
                    <div className="team-member">
                        <img className='pranita' />
                        <p>Pranita Randive</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;

// import React from 'react';
// import './Team.css'; // Import your CSS file

// const TeamPage = () => {
//     return (
//         <div className="team-page">
//             <h1>Our Team</h1>
//             <div className="horizontal-scroll">
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="prerna" />
//                         <p>Prerna Agarwal</p>
//                         <p>Overall Coordinator</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="aastha" />
//                         <p>Aastha Patel</p>
//                         <p>Overall Coordinator</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="aastha" />
//                         <p>Aastha Patel</p>
//                         <p>Overall Coordinator</p>
//                     </div>
//                 </div>
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="sancheti" />
//                         <p>Aastha Sancheti</p>
//                         <p>ASMP Core Team Member</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="priyaank" />
//                         <p>Priyaank Sheth</p>
//                         <p>ASMP Core Team Member</p>
//                     </div>
//                 </div>
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="himanshu" />
//                         <p>Himanshu Nagar</p>
//                         <p>Design Core Team Member</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="jay" />
//                         <p>Jay Arora</p>
//                         <p>Design Core Team Member</p>
//                     </div>
//                 </div>
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="kinjal" />
//                         <p>Kinjal Sao</p>
//                         <p>Events Core Team Member</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="aniruddh" />
//                         <p>Aniruddh Goyal</p>
//                         <p>Events Core Team Member</p>
//                     </div>
//                 </div>
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="agrajah" />
//                         <p>Agrajah Bhobe</p>
//                         <p>HDA Core Team Member</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="garv" />
//                         <p>Grav Gupta</p>
//                         <p>HDA Core Team Member</p>
//                     </div>
//                 </div>
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="shounak" />
//                         <p>Shounak Dewoolkar</p>
//                         <p>Marketing Core Team Member</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="vishal" />
//                         <p>Vishal Kumar</p>
//                         <p>Marketing Core Team Member</p>
//                     </div>
//                 </div>
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="priyanshi" />
//                         <p>Priyanshi Garg</p>
//                         <p>Media & PR Core Team Member</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="vaibhavi" />
//                         <p>Vaibhavi Shinde</p>
//                         <p>Media & PR Core Team Member</p>
//                     </div>
//                 </div>
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="sanket" />
//                         <p>Sanket Bafna</p>
//                         <p>Operations Core Team Member</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="nakul" />
//                         <p>Nakul Bagrecha</p>
//                         <p>Operations Core Team Member</p>
//                     </div>
//                 </div>
//                 <div className="team-column">
//                     <div className="team-member">
//                         <img className="pranita" />
//                         <p>Pranita Randive</p>
//                         <p>Web Core Team Member</p>
//                     </div>
//                     <div className="team-member">
//                         <img className="akash" />
//                         <p>Akash Banger</p>
//                         <p>Web Core Team Member</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TeamPage;
