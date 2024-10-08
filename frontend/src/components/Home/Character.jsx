import { useViewportScroll, useTransform, motion, useState } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';

export default function Paragraph({paragraph, isMobile}) {

  const container = useRef(null);
  const { scrollYProgress } = useViewportScroll({
    target: container,
    offset: ["start 0.8", "start start"]
  })

  const words = paragraph.split(" ")
  return (
    <p 
      ref={container}         
      className={styles.paragraph}
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]} isMobile={isMobile}>{word}</Word>
      })
    }
    </p>
  )
}

const Word = ({children, progress, range, isMobile}) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className={styles.word}>
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]} isMobile={isMobile}>{char}</Char>
        })
      }
    </span>
  )
}

const Char = ({children, progress, range, isMobile}) => {
  const opacity = useTransform(progress, range, [0,1])
  return (
    <span>
      <span className={styles.shadow} style={isMobile ? {fontSize: '22px'}: {}}>{children}</span>
      <motion.span style={isMobile ? {opacity: opacity, fontSize: '22px', position: 'relative', top: '-2.2vh'} : {opacity: opacity}}>{children}</motion.span>
    </span>
  )
}