import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Drop3D from './Drop3D'; // Adjust path as necessary
import './count.css';

gsap.registerPlugin(ScrollTrigger);

const Count = () => {
  const coinContent = ['Alumini', 'Events', 'Students'];
  const maxValues = [65000, 60000, 12000];
  const dropRefs = [useRef(null), useRef(null), useRef(null)];
  const [positions, setPositions] = useState([]);

  const calculatePositions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    return [
      { x: screenWidth * -0.10, y: screenHeight * 0.2 },  // First coin at 20% of the viewport height
      { x: screenWidth * 0.12, y: screenHeight * 0.25 },   // Second coin at 25%
      { x: screenWidth * -0.10, y: screenHeight * 0.3 },   // Third coin at 30%
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
      const timeline = gsap.timeline();

      dropRefs.forEach((dropRef, index) => {
        const { x: endX, y: endY } = positions[index];

        if (index === 0) {
          // Animate the first coin separately
          gsap.fromTo(
            dropRef.current,
            { scale: 0, x: endX, y: 0 },
            {
              scale: 1,
              x: endX,
              y: endY,
              ease: 'power3.out',
              duration: 0.1,
              scrollTrigger: {
                trigger: dropRef.current,
                start: 'top 80%', // Start earlier before the drop comes into full view
                end: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        } else {
          // Group second and third coin animations in a timeline to synchronize them
          timeline.fromTo(
            dropRef.current,
            { scale: 0, x: endX, y: 0 },
            {
              scale: 1,
              x: endX,
              y: endY,
              ease: 'power3.out',
              duration: 0.1,
              scrollTrigger: {
                trigger: dropRef.current,
                start: 'top 80%', // Start earlier for the second and third coins as well
                end: 'top 90%',
                toggleActions: 'play none none none',
              },
            },
            0 // Start both animations at the same time (0 second delay)
          );
        }
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
          <Drop3D content={coinContent[index]} maxValue={maxValues[index]} />
        </div>
      ))}
    </div>
  );
};

export default Count;
