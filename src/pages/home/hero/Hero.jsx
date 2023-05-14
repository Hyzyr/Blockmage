import React from "react";
import Frame, {
  FrameBlur,
  FrameItem,
  FrameMotion,
  FrameMotionDiv,
} from "../../../components/frame/Frame";
import animationSettings from "./constants/animations";
import Slider from "./Slider";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="autoContainer">
          <Frame type="none">
            <FrameBlur {...animationSettings.blur1} />
            <FrameBlur color="secondary" {...animationSettings.blur2} />
          </Frame>
          <FrameMotion className="hero__inner" {...animationSettings.innerBox}>
            <HeroAnimatedItems />
            <h1>
              Providing expert analysis on <br />
              the latest web3 security <br />
              threats and trends.
            </h1>
          </FrameMotion>
        </div>
      </section>
      <Slider />
    </>
  );
};

const HeroAnimatedItems = () => {
  return (
    <Frame>
      <FrameItem addClass="_hud">
        <img src={assetsFolder + "coming-soon/hud-group.svg"} alt="" />
      </FrameItem>
      <FrameItem addClass="_box">
        <FrameMotionDiv {...animationSettings.digitsBox}>
          <img src={assetsFolder + "svg/digits-box.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_box _reverse">
        <FrameMotionDiv {...animationSettings.digitsBox}>
          <img src={assetsFolder + "svg/digits-box.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
    </Frame>
  );
};
export default Hero;
