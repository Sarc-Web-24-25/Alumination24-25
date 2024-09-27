import React, { useEffect, useState, useRef } from 'react';
import './Home1.css';
import Trailer from './footerex';
import footimg from './photos24/footerimg.png';
import footerimg2 from './photos24/footerimg2.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home1() {
  const footerImgRef = useRef(null);
  const whiteFadeRef = useRef(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const footerImg = footerImgRef.current;
    const whiteFade = whiteFadeRef.current;

    // GSAP ScrollTrigger for zoom and transitions
    const zoomEffect = ScrollTrigger.create({
      trigger: footerImg,
      start: 'top 80%', // Trigger zoom when the top of the image is near the viewport bottom
      end: 'top 20%',   // End the effect as it nears the top
      scrub: true, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // Scroll progress from 0 to 1

        // Apply zoom effect on the footer image
        gsap.to(footerImg, {
          scale: 1 + progress * 1.5, // Increase scale progressively
          ease: 'none',
        });

        // Apply white fade when scrolling past a threshold
        if (progress > 0.5) {
          gsap.to(whiteFade, {
            opacity: 1, // Fade in white overlay
            duration: 0.5,
          });

          // Show Trailer component
          if (!showTrailer) {
            setShowTrailer(true); // Display the Trailer component immediately
          }
        } else {
          // Fade out white overlay and hide Trailer when scrolling up
          gsap.to(whiteFade, {
            opacity: 0,
            duration: 0.5,
          });
          if (showTrailer) {
            setShowTrailer(false); // Hide the Trailer component when scrolling back up
          }
        }
      },
    });

    return () => {
      zoomEffect.kill(); // Cleanup on component unmount
    };
  }, [showTrailer]);

  return (
    <div className="newhome">
      <div className="Landingpage">Alumination</div>
      <div className="About">About</div>
      <div className="footer">
        <img
          ref={footerImgRef}
          className="footerimg"
          src={footimg}
          alt="Footer Image"
        />
        <div
          ref={whiteFadeRef}
          className="white-fade"
        ></div>
        {showTrailer && <Trailer />} {/* Conditionally render Trailer */}
      </div>
    </div>
  );
}

export default Home1;
