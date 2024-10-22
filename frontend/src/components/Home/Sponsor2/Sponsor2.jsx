import React from "react";
import styled, { keyframes, css, createGlobalStyle } from "styled-components";
import japanDaisukiFont from '../../../assets/fonts/JapanDaisuki-8OeaZ.woff'
import pancakes from '../photos24/sponsors/99pancakes.png'
import CDSL from '../photos24/sponsors/CDSL.png'
import dainikBhaskar from '../photos24/sponsors/dainikbhaskar.png'
import dominos from '../photos24/sponsors/dominos.png'
import dublieu from '../photos24/sponsors/dublieu.png'
import ixigo from '../photos24/sponsors/ixigo.png'
import jirana from '../photos24/sponsors/jirana.png'
import kotak from '../photos24/sponsors/kotak.png'
import maxProtein from '../photos24/sponsors/maxProtein.png'
import noticebard from '../photos24/sponsors/noticebard.png'
import piramal from '../photos24/sponsors/piramal.png'
import portonics from '../photos24/sponsors/portronics.png'
import saras from '../photos24/sponsors/saras.png'
import theglobalhues from '../photos24/sponsors/theglobalhues.png'
import vskills from '../photos24/sponsors/vskills.png'
import zomato from '../photos24/sponsors/zomato.png'
import zoomcar from '../photos24/sponsors/zoomcar.png'
import alpha8 from '../photos24/sponsors/Alpha8.png'
import mindflix from '../photos24/sponsors/mindflix.png'


export default function Sponsor2() {
  const row1name = [
    "FnB Partner",
    "Depository Partner",
    "Media Partner",
    "FnB Partner",
    "Media Partner",
    "Travel Partner",
    "Gifting Partner",
    "Title Sponsor",
    "SARCathon Partner",
    "FnB Partner"
  ];

  const row2name = [
    "   FnB Partner   ",
    "  Media Partner  ",
    "SARCathon Partner",
    " Gifting Partner ",
    "SARCathon Partner",
    "  Media Partner  ",
    "SARCathon Partner",
    "   FnB Sponsor   ",
    "  Travel Partner ",
    "     Partner     "
  ];

  const row1 = [
    pancakes,
    CDSL,
    dainikBhaskar,
    dominos,
    dublieu,
    ixigo,
    jirana,
    kotak,
    piramal,
    alpha8
  ];

  const row2 = [
    maxProtein,
    noticebard,
    piramal,
    portonics,
    saras,
    theglobalhues,
    vskills,
    zomato,
    zoomcar,
    mindflix
  ];

  const row1url = [
    "https://99pancakes.in/",
    "https://www.cdslindia.com/",
    "https://www.bhaskar.com/",
    "https://pizzaonline.dominos.co.in/",
    "https://www.dublieu.com/",
    "https://www.ixigo.com/",
    "https://www.jiranaworld.com/",
    "https://www.kotakmf.com/",
    "https://www.piramalfoundation.org/",
    "https://habhit.com/"
  ];

  const row2url = [
    "https://maxprotein.in/",
    "https://noticebard.com/",
    "https://www.piramalfoundation.org/",
    "https://www.portronics.com/",
    "https://www.sarasai.org/",
    "https://theglobalhues.com/",
    "http://www.vskills.in/",
    "https://www.zomato.com/",
    "https://www.zoomcar.com/",
    "https://www.mindflixholidays.com/" 
  ];

  // const middleIndex = Math.ceil(sponsors.length / 2);
  // const row1 = sponsors.slice(0, middleIndex); // First half
  // const row2 = sponsors.slice(middleIndex); // Second half

  // console.log("row1: ", row1);
  // console.log("row2: ", row2);

  function handleClick1 (index) {
    window.open(row1url[index], '_blank')
  }

  function handleClick2 (index) {
    window.open(row2url[index], '_blank')
  }

  return (
    <>
    {/* {sponsors.length !== 0 && */}
      <AppContainer style={{marginBottom: "15vh"}}>
        <Wrapper>
          <GlobalStyles />
          <Text>Our Sponsors</Text>

          <Marquee style={{marginBottom: "0px"}}>
            <MarqueeGroup>
              {row1name.map((el, index) => (
                <Subtext key={index}>{el}</Subtext>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1name.map((el, index) => (
                <Subtext key={index}>{el}</Subtext>
              ))}
            </MarqueeGroup>
          </Marquee>


          <Marquee>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup
                  key={index} 
                  onClick={() => handleClick1(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup
                  key={index} 
                  onClick={() => handleClick1(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>

          <Marquee>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <ImageGroup
                  key={index} 
                  onClick={() => handleClick2(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <ImageGroup
                  key={index} 
                  onClick={() => handleClick2(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>

          <Marquee>
            <MarqueeGroup2>
              {row2name.map((el, index) => (
                <Subtext key={index}>{el}</Subtext>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2name.map((el, index) => (
                <Subtext key={index}>{el}</Subtext>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>
    {/* } */}
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Japan Daisuki Regular';
    src: url(${japanDaisukiFont}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-family: 'Japan Daisuki Regular', sans-serif;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  color: white;
  -webkit-text-stroke: 1px #700815;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 4rem; /* Adjust font-size for tablets or smaller screens */
    -webkit-text-stroke: 0.5px #700815; /* Smaller text stroke */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Further adjustment for mobile */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Lighter text-shadow */
  }
`;

const Subtext = styled.div`
  font-family: 'Sylfaen', sans-serif;
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  max-width: 100px;
  
  border: 10px solid transparent;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font-size for tablets or smaller screens */
    // -webkit-text-stroke: 0.5px #700815; /* Smaller text stroke */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Further adjustment for mobile */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Lighter text-shadow */
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 1800px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: wrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: rgba(255, 255, 255, 1); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Glass blur effect */
  box-shadow: rgba(255, 255, 255, 1) 0px 0px 12px; /* Light shadow to enhance effect */
  transition: background 0.4s ease, transform 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5); /* Change background on hover */
  }
`;
