import React, { useRef, useEffect } from "react";
import "./Alumni2.css";
import { alums } from "./Alumni2Data";
import Card2 from "./Card2/Card2";
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

export default function Alumni2() {

  const alumniContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: alumniContainer,
    offset: ['start start', 'end end']
  })

  // for smooth scroll
  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <main ref={alumniContainer} className="main_waala_container">
      <h1 style={{ color: '#700815' }} className="text-7xl font-bold text-center">
        Esteemed Alumni
      </h1>
      
      {alums.map((alum, i) => {
        // const targetScale = 1 - ((alums.length - i) * 0.05);
        return (
            <Card2
                key={`p_${i}`}
                {...alum}
                i={i}
                progress={scrollYProgress}
                range={[i * .25, 1]}
                // targetScale={targetScale}
            />
        );
      })}
    </main>
  );
};