import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Drop3D from './Drop3D'; // Adjust path as necessary
import './count.css';

gsap.registerPlugin(ScrollTrigger);

const Count = () => {
  const dropRefs = [useRef(null), useRef(null), useRef(null)];
  const [positions, setPositions] = useState([]);

  const calculatePositions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth > 1024) {
      // Laptop view
      return [
        { x: screenWidth * -0.20, y: screenHeight * 1.5 },  
      { x: screenWidth * 0.02, y: screenHeight * 1.45},  
      { x: screenWidth * -0.20, y: screenHeight * 1.5 }
      ];
    } else if (screenWidth > 768) {
      // Tablet view
      return [
        { x: screenWidth * -0.15, y: screenHeight * 1.7 },
        { x: screenWidth * 0.04, y: screenHeight * 1.85 },
        { x: screenWidth * -0.15, y: screenHeight * 1.9 }
      ];
    } else {
      // Phone view
      return [
        { x: screenWidth * -0.1, y: screenHeight * 0.2 },
        { x: screenWidth * 0.09, y: screenHeight * 0.2 },
        { x: screenWidth * -0.1, y: screenHeight * 0.2 }
      ];
    }
  };

  useEffect(() => {
    setPositions(calculatePositions());
    const handleResize = () => {
      setPositions(calculatePositions());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (positions.length > 0) {
      dropRefs.forEach((dropRef, index) => {
        const { x: endX, y: endY } = positions[index];

        gsap.fromTo(
          dropRef.current,
          { scale: 0, x: endX, y: 0 },
          {
            scale: 1,
            x: endX,
            y: endY,
            ease: 'power3.out',
            duration: 1,
            scrollTrigger: {
              trigger: dropRef.current,
              start: 'top 50%',
              end: 'top 100%',
              toggleActions: 'play none none none',
              // markers: true
            },
          }
        );
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [positions]);

  return (
    <div className="count-container">
      {dropRefs.map((dropRef, index) => (
        <div key={index} className="drop" ref={dropRef}>
          <Drop3D />
        </div>
      ))}
    </div>
  );
};

 
export default Count;
