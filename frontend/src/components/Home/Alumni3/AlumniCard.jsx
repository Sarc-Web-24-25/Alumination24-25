import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import japanDaisukiFont from '../../../assets/fonts/JapanDaisuki-8OeaZ.woff' 
import katsumiFont from '../../../assets/fonts/KATSUMI.otf'

const styles = {
  '@font-face': {
    fontFamily: 'Japan Daisuki Regular',
    src: `url(${japanDaisukiFont}) format('opentype')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  '@font-face': {
    fontFamily: 'Katsumi',
    src: `url(${katsumiFont}) format('')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  name: {
    fontFamily: 'Japan Daisuki Regular, sans-serif',
    color: '#700815',
    textShadow: '2px 2px 5px rgba(255, 255, 255, 0.5)',
    fontSize: "2rem",
    lineHeight: "1.75rem",
    fontWeight: "700",
    textAlign: "center",
  },

  designation: {
    fontFamily: 'Katsumi, sans-serif',
    color: '#700815',
    fontSize: "1.35rem",
    lineHeight: "1.25rem",
    fontWeight: "700",
    textAlign: "center",
    marginTop: "0.9rem",
  }
};

export default function Alumni3({ name, designation, imageSrc }) {
  return (
    <CardContainer
      className="inter-var"
      style={{
        perspective: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <CardBody
        className="bg-[rgba(249,250,251,0.5)] relative group/card border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
      >
        <CardItem
          translateZ="30"
          style={styles.name}
        >
          {name}
        </CardItem>

        <CardItem
          as="p"
          translateZ="30"
          style={styles.designation}
          // className="text-sm max-w-sm mt-2"
        >
          {designation}
        </CardItem>

        <CardItem
          translateZ="40"
          className="w-full mt-4"
        >
          <img
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
