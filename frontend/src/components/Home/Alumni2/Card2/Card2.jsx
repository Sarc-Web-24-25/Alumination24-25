import React, { useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import './cardStyle.css'

const Card2 = ({ i, name, description, branch, src, color, progress, range, targetScale }) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer" >
      <motion.div 
        className="card"
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="body">
          <div className="imageContainer">
            <motion.div
              className="inner"
              style={{scale: imageScale}}
            >
              <img
                src={`/images/${src}`}
                alt="image"
                style={{ width: '100%', height: 'auto' }}
              />
            </motion.div>
          </div>
          
          <div className="description">
            <h2 className='cardName'>{name}</h2>
            <h2 className='cardBranch'>{branch}</h2>
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card2;