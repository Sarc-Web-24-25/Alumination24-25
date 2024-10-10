import React from "react";
import styled, { keyframes, css, createGlobalStyle } from "styled-components";
import japanDaisukiFont from '../../../assets/fonts/JapanDaisuki-8OeaZ.woff' 

export default function Sponsor2({ sponsors }) {
  // const row1 = [
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  // ];

  // const row2 = [
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  // ];

  const middleIndex = Math.ceil(sponsors.length / 2);
  const row1 = sponsors.slice(0, middleIndex); // First half
  const row2 = sponsors.slice(middleIndex); // Second half

  console.log("row1: ", row1);
  console.log("row2: ", row2);

  return (
    <>
    {sponsors.length !== 0 &&
      <AppContainer>
        <Wrapper>
          <GlobalStyles />
          <Text>Our Sponsors</Text>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup
                  key={index} 
                  onClick={() => window.open(el.url, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <Image src={el.image} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup
                  key={index} 
                  onClick={() => window.open(el.url, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <Image src={el.image} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>

          <Marquee>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <ImageGroup
                  key={index} 
                  onClick={() => window.open(el.url, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <Image src={el.image} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <ImageGroup
                  key={index} 
                  onClick={() => window.open(el.url, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <Image src={el.image} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>
    }
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
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
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
  white-space: nowrap;
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
  background: rgba(255, 255, 255, 0.3); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Glass blur effect */
  box-shadow: rgba(255, 255, 255, 1) 0px 0px 12px; /* Light shadow to enhance effect */
  transition: background 0.4s ease, transform 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5); /* Change background on hover */
  }
`;
