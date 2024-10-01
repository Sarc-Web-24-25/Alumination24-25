import React, { useRef, useEffect } from "react";
import "./Alumni2.css";
import { alums } from "./Alumni2Data";
import Card2 from "./Card2/Card2";
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

export default function Alumni2() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  // useEffect( () => {
  //   const lenis = new Lenis()
  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  // })

  return (
    <main ref={container} className="main_waala_container">
      {alums.map((alum, i) => {
        const targetScale = 1 - ((alums.length - i) * 0.05);
        return (
            <Card2
                key={`p_${i}`}
                {...alum}
                i={i}
                progress={scrollYProgress}
                range={[i * .25, 1]}
                targetScale={targetScale}
            />
        );
      })}
    </main>
  );
};