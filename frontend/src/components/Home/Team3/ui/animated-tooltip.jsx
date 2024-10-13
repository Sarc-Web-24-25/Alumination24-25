import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring, px } from "framer-motion";
import './animated-tooltip.css'

export const AnimatedTooltip = ({ items, handleThumbnailClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-50, 50], [-25, 25]), springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - (halfWidth));
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="mr-0 relative group"
          style={{ flexWrap: "wrap", cursor: "pointer" }}
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleThumbnailClick(item.id, item.id_name)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="teamPageThumbnailsHehe absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2">
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                {/* <div className="text-white text-xs">{item.designation}</div> */}
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-center scale-100 rounded-full w-[8vw] h-[8vw] group-hover:scale-105 group-hover:z-30 relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};