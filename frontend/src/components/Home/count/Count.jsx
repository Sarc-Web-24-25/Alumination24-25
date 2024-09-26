import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dropImage from '../photos24/count.png'; // Ensure the path is correct
import './count.css';

gsap.registerPlugin(ScrollTrigger);

const Count = () => {
  const dropRefs = [useRef(null), useRef(null), useRef(null)];
  const [footfall, setFootfall] = useState([0, 0, 0]);
  const [positions, setPositions] = useState([]);

  // Function to calculate responsive positions based on screen size
  const calculatePositions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    return [
      { x: screenWidth * -0.2, y: screenHeight * 1.4 }, // Adjust drop 1 (left)
      { x: screenWidth * -0, y: screenHeight * 1.3},  // Adjust drop 2 (center)
      { x: screenWidth * -0.2, y: screenHeight * 1.2}, // Adjust drop 3 (right)
    ];
  };

  useEffect(() => {
    // Set the initial positions
    setPositions(calculatePositions());

    // Update positions on resize
    const handleResize = () => {
      setPositions(calculatePositions());
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (positions.length > 0) {
      dropRefs.forEach((dropRef, index) => {
        const startX = index % 2 === 0 ? -300 : 300; // Different starting X positions
        const { x: endX, y: endY } = positions[index]; // Use responsive final positions

        // Animate the drop from above the screen to the final position
        gsap.fromTo(
          dropRef.current,
          { scale: 0, x: startX, y: 500 }, // Start above the viewport
          {
            scale: 1,
            x: endX,  // Final X position
            y: endY,  // Final Y position (downward)
            ease: 'power3.out',
            duration: 1.5,
            scrollTrigger: {
              trigger: dropRef.current,
              start: 'top 90%',
              end: 'top 10%',
              toggleActions: 'play none none none',
              onEnter: () => incrementFootfall(index),
              onLeave: () => resetFootfall(index),
            },
          }
        );
      });
    }

    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [positions]);

  const incrementFootfall = (index) => {
    let start = 0;
    const end = 40000;
    const duration = 2;
    const increment = Math.ceil(end / (60 * duration));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setFootfall((prev) => {
        const newValues = [...prev];
        newValues[index] = start;
        return newValues;
      });
    }, 1000 / 60);
  };

  const resetFootfall = (index) => {
    setFootfall((prev) => {
      const newValues = [...prev];
      newValues[index] = 0;
      return newValues;
    });
  };

  return (
    <div className="count-container">
      {dropRefs.map((dropRef, index) => (
        <div key={index} className="drop" ref={dropRef}>
          <img src={dropImage} alt="Drop" className="drop-image" />
          <div className="drop-content">{footfall[index]}+</div>
        </div>
      ))}
    </div>
  );
};

export default Count;