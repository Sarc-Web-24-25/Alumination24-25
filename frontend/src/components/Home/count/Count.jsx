import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Drop3D from './Drop3D'; // Adjust path as necessary
import './count.css';

gsap.registerPlugin(ScrollTrigger);

const Count = () => {
  const dropRefs = [useRef(null), useRef(null), useRef(null)];
  // const [footfall, setFootfall] = useState([0, 0, 0]);
  const [positions, setPositions] = useState([]);

  const calculatePositions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    return [
      { x: screenWidth * -0.10, y: screenHeight * 0.2 },  // First coin at 30% of the viewport height
      { x: screenWidth * 0.12, y: screenHeight * 0.25 },   // Second coin at 50% (middle)
      { x: screenWidth * -0.10, y: screenHeight * 0.3 },
    ];
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
        const startX = index % 2 === 0 ? -300 : 400;
        const { x: endX, y: endY } = positions[index];
        console.log('endY = ', endY)

        gsap.fromTo(
          dropRef.current,
          { scale: 0, x: endX, y: 0 },
          {
            scale: 1,
            x: endX,
            y: endY,
            ease: 'power3.out',
            duration: 0.1,
            // delay:0.5,
            scrollTrigger: {
              trigger: dropRef.current,
              start: 'top 10%',
              end: 'top 90%',
              toggleActions: 'play none none none',
              // scrub: true,
              // onEnter: () => incrementFootfall(index),
              // onLeave: () => resetFootfall(index),
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

  // const incrementFootfall = (index) => {
  //   let start = 0;
  //   const end = 40000;
  //   const duration = 2;
  //   const increment = Math.ceil(end / (60 * duration));

  //   const counter = setInterval(() => {
  //     start += increment;
  //     if (start >= end) {
  //       start = end;
  //       clearInterval(counter);
  //     }
  //     setFootfall((prev) => {
  //       const newValues = [...prev];
  //       newValues[index] = start;
  //       return newValues;
  //     });
  //   }, 1000 / 60);
  // };

  // const resetFootfall = (index) => {
  //   setFootfall((prev) => {
  //     const newValues = [...prev];
  //     newValues[index] = 0;
  //     return newValues;
  //   });
  // };

  return (
    <div className="count-container">
      {dropRefs.map((dropRef, index) => (
        <div key={index} className="drop" ref={dropRef}>
          <Drop3D/>
        </div>
      ))}

    
    </div>
  );
};
 
export default Count;
