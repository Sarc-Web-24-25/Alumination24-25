// import React from "react";
// import "./TeamCard.scss";

// const Card = ({ image, header, content }) => {
//   return (
//     <div className="team-card-wrap">
//       <div className="team-ke-card">
//         <div
//           className="team-card-background"
//           style={{ backgroundImage: `url(${image})` }}
//         ></div>
//         <div className="team-card-information">
//           <h1>{header}</h1>
//           <p>{content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TeamCard = () => {
//   return (
//     <div className="teamCardContainer">
//       <div className="teamCards">
//         <Card
//           image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
//           header="Canyons"
//           content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//         />
//         <Card
//           image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
//           header="Beaches"
//           content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//         />
//         <Card
//           image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
//           header="Trees"
//           content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//         />
//         <Card
//           image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
//           header="Lakes"
//           content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//         />
//       </div>
//     </div>
//   );
// };

// export default TeamCard;

import React, { useState, useRef, useEffect } from "react";
import "./TeamCard.scss";
import japanDaisukiFont from '../../../assets/fonts/JapanDaisuki-8OeaZ.woff';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamCard = ( {people} ) => {
  return (
    <div className="teamCardContainer">
      <div className="teamCards">

        {people && people.map((member, index) => (
          <Card
            key={index}
            image={member.image}
            header={member.header}
            linkedInUrl={member.linkedInUrl}
            instagramUrl={member.instagramUrl}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
    '@font-face': {
      fontFamily: 'Japan Daisuki Regular',
      src: `url(${japanDaisukiFont}) format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  
    heading: {
        fontFamily: 'Japan Daisuki Regular, sans-serif',
        color: 'white',
        WebkitTextStroke: '1px #700815',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
        fontSize: "36px",
        fontWeight: "400",
    }
};

const Card = ({ image, header, linkedInUrl, instagramUrl }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const cardRef = useRef(null);

  // Update card dimensions once mounted
  useEffect(() => {
    if (cardRef.current) {
      const { offsetWidth, offsetHeight } = cardRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  const handleMouseMove = (e) => {
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left - dimensions.width / 2,
      y: e.clientY - top - dimensions.height / 2,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const mousePX = mousePosition.x / dimensions.width;
  const mousePY = mousePosition.y / dimensions.height;

  const rX = mousePX * 30;
  const rY = mousePY * -30;
  const tX = mousePX * -40;
  const tY = mousePY * -40;

  const cardStyle = {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${tX}px) translateY(${tY}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="team-card-wrap"            
            >
                <div className="team-ke-card" style={cardStyle}>
                    <div className="team-card-background" style={{ ...cardBgTransform, ...cardBgImage }}></div>
                    <div className="team-card-information">
                        <h1 style={styles.heading}>{header}</h1>
                        {/* <p>{content}</p> */}
                        <div className="team-card-social-icons">
                            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default TeamCard;

