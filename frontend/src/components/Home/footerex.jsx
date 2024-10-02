import React from 'react';
import flagl from './photos24/FlagL.png'; // Left flag image
import insta from './photos24/instagram.png'; // Instagram icon
import linkedin from './photos24/linkedin.png'; // LinkedIn icon
import flagr from './photos24/FlagR.png'; // Right flag image
import fb from './photos24/facebook.png'; // Facebook icon
import yt from './photos24/youtube.png'; // Youtube icon
import bg2 from './photos24/footerimg2.png'; // Background image for the trailer
import trailer from './photos24/videos/asmp.mp4'

const FlagL = () => {
    return (
        <div style={{
            position: 'relative',
            width: '150px', // Set fixed width for consistency
            height: '100%',
        }}>
            <img src={flagl} alt="Flag Left" style={{ width: '100%', height: '100%' }} />
            <div style={{
                position: 'absolute',
                top: '41%', // Adjust positioning to ensure icons are inside the flag
                left: '55%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <a href="https://www.instagram.com/sarc_iitb/?hl=en" target="_blank"><img src={insta} alt="Instagram Icon" style={{ width: '40px', height: '60px', margin: '0px 0' }} /></a>
                
                <a href="https://www.linkedin.com/company/sarc-iitbombay/posts/?feedView=all"><img src={linkedin} alt="LinkedIn Icon" style={{ width: '40px', height: '40px', margin: '30px 0',marginBottom: '100%' }} /></a>
                
            </div>
        </div>
    );
};

const FlagR = () => {
    return (
        <div style={{
            position: 'relative',
            width: '150px', // Set fixed width for consistency
            height: '92%',
            marginBottom: '2.5%'
        }}>
            <img src={flagr} alt="Flag Right" style={{ width: '100%', height: '110%' }} />
            <div style={{
                position: 'absolute',
                top: '40%', // Adjust positioning to ensure icons are inside the flag
                left: '45%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <a href="https://www.youtube.com/@SARCIITBombay" target="_blank"><img src={yt} alt="Youtube Icon" style={{ width: '80px', height: '70px', marginTop: '50%'}} /></a>
                <a href="https://www.facebook.com/SARC.IITB/" target="_blank"><img src={fb} alt="Facebook Icon" style={{ width: '40px', height: '50px', marginBottom: '80%'}} /></a>
                
            </div>
        </div>
    );
};

const Trailer = () => {
    console.log("inside trailer")
    return (
        <div style={{
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '120vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${bg2})`,
        }}>
            <div style={{
                width: '70%',
                height: '50%',
                textAlign: 'center',
                marginBottom: '17%',
            }}>
                <video style={{ width: '60%', height: '100%' }} controls>
                    <source src={trailer} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div style={{
                position: 'absolute',
                bottom: '0', // Make flags stick to the bottom
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: '50px', // Space between the flags
                height: '40%'
            }}>
                <FlagL />
                <FlagR />
            </div>
        </div>
    );
};

export default Trailer;
