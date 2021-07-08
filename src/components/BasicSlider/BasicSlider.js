import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import Navbar from "..//UI/Navbar/Navbar";

// Images
const bogliasco = "https://i.imgur.com/TTY0735.png";
const countyClare = "https://i.imgur.com/Hunc7xC.png";
const craterRock = "https://i.imgur.com/g4uCOuZ.jpg";
const giauPass = "https://imgur.com/KHbFKkm";

const app = () => {
  return (
    <HeroSlider
      slidingAnimation="fade"
      orientation="fade"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 1500,
        slidingDelay: 2000,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 100,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <Navbar />
        <Wrapper>
          <Title>Basic Slider</Title>
          <Subtitle>Slides' background attachment set to fixed</Subtitle>
        </Wrapper>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: giauPass,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: bogliasco,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: countyClare,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: craterRock,
          backgroundAttachment: "fixed"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default app;
