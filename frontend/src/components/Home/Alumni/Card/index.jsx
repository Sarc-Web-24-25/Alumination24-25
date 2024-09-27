
import React, { useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import styles from "./style.module.scss";

const Card = ({
  index,
  name,
  src,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const rotation = index % 2 === 0 ? 2 : -3;

  return (
    <>
      <div ref={container} className={styles.alumniCardContainer}>
        <motion.div
          style={{
            backgroundColor: color,
            top: `calc(-5vh + ${index * 15 }px)`,
          }}
          className={styles.alumniCard}
        >
          <div className={styles.alumniBody}>
            <div className={styles.alumniImageContainer}>
              <motion.div
                className={styles.alumniInnerImageContainer}
                style={{ rotate: rotation }}
              >
                <img
                  src={`/images/${src}`}
                  alt="image"
                  className={styles.alumniImage}
                />
              </motion.div>
            </div>
            <div
              style={{
                position: "relative",
                backgroundColor: color,
                fontSize: "25px",
                top: `calc(-1vh + ${index * 50}px)`,
              }}              
              className="alumniName"
            >
              {name}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
