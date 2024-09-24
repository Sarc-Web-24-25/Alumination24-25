
import styles from "./Alumni.css";
import { alums } from "./AlumniData";
import Card from "./Card";
import { useEffect, useRef } from "react";

export default function Alumni() {
  const container = useRef(null);

  return (
    <main ref={container} className={styles.main}>
      {alums.map((alum, index) => {
        return (
          <Card
            key={`p_${index}`}
            index={index}
            {...alum}
            range={[index * 0.25, 1]}
          />
        );
      })}
    </main>
  );
}
