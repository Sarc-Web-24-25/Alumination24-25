import React, { useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import './cardStyle.css'

const Card2 = ({ i, name, description, branch, src, color, progress, range, targetScale }) => {

  const alumniContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: alumniContainer,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={alumniContainer} className="alumniCardContainer" >
      <motion.div 
        className="alumniCard"
        style={{ backgroundColor: color, scale, top: `calc(10vh + ${i * 25}px)` }}
        // style={{
        //   backgroundColor: color,
        //   top: `calc(10vh + ${i * 25}px)`,
        // }}
      >
        <div className="alumniBody">
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
            {/* <p>{description}</p> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card2;