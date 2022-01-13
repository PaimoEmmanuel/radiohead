import styled, { css } from "styled-components";
import { respond } from "../style-config/mixin";

const Container = styled.div`
  padding: 80px 200px 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0px 30px 20px rgba(26, 26, 26, 0.25);
  ${respond(
    "desktop",
    `
    padding: 80px 100px 50px;
    `
  )}
  ${respond(
    "tab-port",
    `
    padding: 80px 70px 50px;
    `
  )}
  ${respond(
    "phone",
    `
    padding: 30px 24px;
    `
  )}
`;
const Heading = styled.h3`
  font-size: 48px;
  line-height: 72px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 36px;
  ${respond(
    "desktop",
    `
    font-size: 36px;
    line-height: 56px;
    `
  )}
  ${respond(
    "tab-port",
    `
    font-size: 32px;
    line-height: 48px;
    `
  )}
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 60px;
  width: 90%;
  ${respond(
    "tab-port",
    `
    grid-template-columns: repeat(1, minmax(0, 1fr));
    `
  )}
  ${respond(
    "phone",
    `
    width: 100%;
    `
  )}
`;

const PrimaryText = styled.p`
  font-size: 32px;
  line-height: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 16px;
  margin-bottom: 24px;
  position: relative;
  ${respond(
    "desktop",
    `
    font-size: 28px;
    line-height: 32px;
    `
  )}
  ${respond(
    "tab-port",
    `
    font-size: 24px;
    line-height: 28px;
    `
  )}
  ${respond(
    "phone",
    `
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 16px;
    font-weight: 600;
    `
  )}
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 48px;
    width: 5px;
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 5px;
    ${respond(
      "tab-port",
      `
      height: 32px;
      `
    )}
  }
`;
const SecondaryText = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  padding-left: 16px;
  ${respond(
    "desktop",
    `
    font-size: 18px;
    line-height: 24px;
    `
  )}
  ${respond(
    "phone",
    `
    font-size:16px;
    line-height: 24px;
    `
  )}
`;
const Features = () => {
  return (
    <Container>
      <Heading>Why radiohead?</Heading>
      <Grid>
        <div>
          <PrimaryText>A world of music in your pocket.</PrimaryText>
          <SecondaryText>
            Find new loves and old favourites from over 56 million tracks.
          </SecondaryText>
        </div>
        <div>
          <PrimaryText>Craft your collection.</PrimaryText>
          <SecondaryText>
            Create playlists from millions of tracks and take them with you
            wherever you go.
          </SecondaryText>
        </div>
        <div>
          <PrimaryText>No WiFi? No problem.</PrimaryText>
          <SecondaryText>
            With Deezer Premium, you don't need to be connected to enjoy your
            favourite tracks.
          </SecondaryText>
        </div>
        <div>
          <PrimaryText>Made for you.</PrimaryText>
          <SecondaryText>
            Flow gets to know what you like and what you don't. Discover your
            personal soundtrack.
          </SecondaryText>
        </div>
      </Grid>
    </Container>
  );
};

export default Features;
