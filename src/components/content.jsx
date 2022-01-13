import styled, { css } from "styled-components";
import { respond } from "../style-config/mixin";
import MusicOne from "../assets/images/music-1.png";
import MusicTwo from "../assets/images/music-2.png";
import MusicThree from "../assets/images/music-3.png";
import MusicFour from "../assets/images/music-4.png";
import MusicFive from "../assets/images/music-5.png";
import MusicSix from "../assets/images/music-6.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

const Container = styled.div`
  padding: 80px 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${respond(
    "desktop",
    `
    padding: 80px 100px;
    `
  )}
  ${respond(
    "tab-port",
    `
    padding: 80px 70px;
    flex-direction: column;
    `
  )}
  ${respond(
    "phone",
    `
    padding: 32px 24px;
    `
  )}
`;

const Grid = styled.div`
  min-width: 50%;
  max-width: 50%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 30px;
  margin-right: 100px;
  img {
    width: 100%;
    border-radius: 6px;
    opacity: 0;
  }
  ${respond(
    "desktop",
    `
    grid-gap: 16px;
    margin-right: 120px;
    `
  )}
  ${respond(
    "tab-land",
    `
    margin-right: 80px;
    `
  )}
  ${respond(
    "tab-port",
    `
    min-width: 100%;
    max-width: 100%;
    margin-right: 0px;
    `
  )}
`;
const ContentHeading = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 48px;
  line-height: 72px;
  font-weight: 500;
  margin-bottom: 32px;
  overflow: hidden;
  ${respond(
    "desktop",
    `
    font-size: 42px;
    line-height: 54px;
    `
  )}
  ${respond(
    "tab-land",
    `
    font-size: 36px;
  line-height: 48px;
    `
  )}
  ${respond(
    "tab-port",
    `
    margin: 32px 0;
    `
  )}
  ${respond(
    "phone",
    `
    font-size: 24px;
    line-height: 36px;
    `
  )}
`;
const ContentText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  margin-bottom: 24px;
  overflow: hidden;

  ${respond(
    "desktop",
    `
    font-size: 20px;
    line-height: 32px;
    `
  )}
  ${respond(
    "tab-land",
    `
    font-size: 16px;
    line-height: 28px;
    `
  )}
`;
const FeaturedLink = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 24px;
  font-weight: 800;
  svg {
    margin-right: 16px;
  }
  ${respond(
    "desktop",
    `
    font-size: 16px;
    line-height: 24px;
    `
  )}
  ${respond(
    "tab-land",
    `
    font-weight: 600;
    `
  )}
`;
const Content = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(scrollTrigger);
    const imagesRef = gridRef.current.querySelectorAll("img");
    const itemToAnimate = [
      headingRef.current,
      textRef.current,
      linkRef.current,
    ];
    itemToAnimate.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: linkRef.current,
        delay: 1 + index,
        duration: 1,
        height: 0,
        opacity: 0,
        skewY: 7,
        ease: "power2",
        y: 50,
      });
    });
    imagesRef.forEach((img, index) => {
      gsap.to(img, {
        scrollTrigger: linkRef.current,
        delay: (3 + index) / 2,
        duration: 0.5,
        opacity: 1,
        skewY: 0,
        ease: "power2",
      });
    });
  }, []);

  return (
    <Container ref={containerRef}>
      <Grid ref={gridRef}>
        <img src={MusicOne} alt="Radio head music" />
        <img src={MusicTwo} alt="Radio head music" />
        <img src={MusicThree} alt="Radio head music" />
        <img src={MusicFour} alt="Radio head music" />
        <img src={MusicFive} alt="Radio head music" />
        <img src={MusicSix} alt="Radio head music" />
      </Grid>
      <div>
        <ContentHeading ref={headingRef}>The music you love</ContentHeading>
        <ContentText ref={textRef}>
          With over 60 million tracks and tons of exclusive interviews and
          videos, TIDAL is here to bring you closer to the artists you listen
          to.
        </ContentText>
        <FeaturedLink href="" ref={linkRef} className="link">
          <svg
            width="15"
            height="24"
            viewBox="0 0 15 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.36016 23.5C2.65189 23.5 1.94311 23.2396 1.38933 22.7158C0.244659 21.6313 0.199012 19.8271 1.28701 18.6861L7.68656 11.9801L1.29353 5.32047C0.20152 4.18347 0.241649 2.37926 1.38332 1.29074C2.52548 0.202217 4.3358 0.242699 5.4278 1.3802L13.7069 10.0029C14.7623 11.1024 14.7643 12.8342 13.7134 13.9372L5.43482 22.6139C4.87152 23.2021 4.1176 23.5 3.36016 23.5Z"
              fill="#7971E9"
            />
          </svg>
          More Featured Content
        </FeaturedLink>
      </div>
    </Container>
  );
};

export default Content;
