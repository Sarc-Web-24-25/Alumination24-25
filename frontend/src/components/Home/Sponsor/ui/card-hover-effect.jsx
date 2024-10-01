// import cn from "../../../../lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export const HoverEffect = ({ items, className }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
//       {items.map((item, idx) => (
//         <Link
//           to={item?.link}
//           key={item?.link}
//           className="relative group block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1, transition: { duration: 0.15 } }}
//                 exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
//               />
//             )}
//           </AnimatePresence>
//           <Card>
//             <CardTitle>{item.title}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//           </Card>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export const Card = ({ className, children }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// export const CardTitle = ({ className, children }) => {
//   return (
//     <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>
//   );
// };

// export const CardDescription = ({ className, children }) => {
//   return (
//     <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
//       {children}
//     </p>
//   );
// };
import cn from "../../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid gap-4 py-10", className)}>
      {/* First Row: 3 Columns */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.slice(0, 3).map((item, idx) => (
            <CardLink
              key={item?.link}
              item={item}
              idx={idx}
              setHoveredIndex={setHoveredIndex}
              hoveredIndex={hoveredIndex}
            />
          ))}
        </div>
      </div>

      {/* Second Row: 2 Columns Centrally Aligned */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.slice(3, 5).map((item, idx) => (
            <CardLink
              key={item?.link}
              item={item}
              idx={idx + 3} // Adjust index for the second row
              setHoveredIndex={setHoveredIndex}
              hoveredIndex={hoveredIndex}
            />
          ))}
        </div>
      </div>

      {/* Third Row: 3 Columns */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.slice(5, 8).map((item, idx) => (
            <CardLink
              key={item?.link}
              item={item}
              idx={idx + 5} // Adjust index for the third row
              setHoveredIndex={setHoveredIndex}
              hoveredIndex={hoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// CardLink Component to handle the link and animation
// const CardLink = ({ item, idx, setHoveredIndex, hoveredIndex }) => {
//   return (
//     <Link
//       to={item?.link}
//       className="relative group block p-2 h-full w-full"
//       onMouseEnter={() => setHoveredIndex(idx)}
//       onMouseLeave={() => setHoveredIndex(null)}
//     >
//       <AnimatePresence>
//         {hoveredIndex === idx && (
//           <motion.span
//             className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
//             layoutId="hoverBackground"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1, transition: { duration: 0.15 } }}
//             exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
//           />
//         )}
//       </AnimatePresence>
//       <Card>
//         <CardTitle>{item.title}</CardTitle>
//         <CardDescription>{item.description}</CardDescription>
//       </Card>
//     </Link>
//   );
// };
// CardLink Component to handle the link and animation
const CardLink = ({ item, idx, setHoveredIndex, hoveredIndex }) => {
  return (
    <Link
      to={item?.link}
      className="relative group p-2 h-full w-full flex items-center justify-center"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>
      <Card>
        <img 
          src={item.image} 
          alt={item.link} 
          className="object-contain h-full w-full rounded-2xl" // Ensure the image fits properly
        />
      </Card>
    </Link>
  );
};


// export const Card = ({ className, children }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };
export const Card = ({ className, children }) => {
  return (
    <div
      style={{ backgroundColor: '#700815' }}
      className={cn(
        "flex items-center justify-center rounded-2xl w-64 h-24 p-0 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", // Fixed width and height for uniformity
        className
      )}
    >
      <div className="relative z-50 flex items-center justify-center">
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

// export const CardTitle = ({ className, children }) => {
//   return (
//     <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>
//   );
// };

// export const CardDescription = ({ className, children }) => {
//   return (
//     <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
//       {children}
//     </p>
//   );
// };