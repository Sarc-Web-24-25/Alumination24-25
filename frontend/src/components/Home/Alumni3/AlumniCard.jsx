import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default function AlumniCard({ name, designation, imageSrc }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-white/30 relative backdrop-blur-lg group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/30 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
      >
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {designation}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
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