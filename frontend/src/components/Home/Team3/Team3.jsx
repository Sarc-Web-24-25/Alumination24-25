import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import oc from '../photos24/thumbnail/oc.png'
import asmp from '../photos24/thumbnail/asmp.png'
import hda from '../photos24/thumbnail/hda.png'
import design from '../photos24/thumbnail/design.png'
import events from '../photos24/thumbnail/events.png'
import marki from '../photos24/thumbnail/marki.png'
import mpr from '../photos24/thumbnail/mpr.png'
import ops from '../photos24/thumbnail/ops.png'
import web from '../photos24/thumbnail/web.png'

const people = [  
  {
    id: 0,
    name: "OC",
    id_name: "oc",
    designation: "The Explorer",
    image: oc,
  },
  {
    id: 1,
    name: "ASMP",
    id_name: "asmp",
    designation: "Software Engineer",
    image: asmp,
  },
  {
    id: 2,
    name: "HDA",
    id_name: "hda",
    designation: "Product Manager",
    image: hda,
  },
  {
    id: 3,
    name: "Events",
    id_name: "events",
    designation: "Data Scientist",
    image: events,
  },
  {
    id: 4,
    name: "Marketing",
    id_name: "marketing",
    designation: "UX Designer",
    image: marki,
  },
  {
    id: 5,
    name: "Operations",
    id_name: "operations",
    designation: "Soap Developer",
    image: ops,
  },
  {
    id: 6,
    name: "Media & PR",
    id_name: "mpr",
    designation: "The Explorer",
    image: mpr,
  },
  {
    id: 7,
    name: "Design",
    id_name: "design",
    designation: "Soap Developer",
    image: design,
  },
  {
    id: 8,
    name: "Web",
    id_name: "web",
    designation: "The Explorer",
    image: web,
  },
];

export default function Team3({handleThumbnailClick}) {

  const styles = {
    container: {
      flexWrap: "wrap",
      position: "absolute",
      bottom: "0",
      background: "rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(100px)",
      borderRadius: "35px 35px 0 0",
      gap: "1.5vh",
      padding: "3vh 0",
      zIndex: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  };

  return (
    <div
        className="flex flex-row items-center justify-center w-full"
        style={styles.container}
    >
      <AnimatedTooltip items={people} handleThumbnailClick={handleThumbnailClick} />
    </div>
  );
}