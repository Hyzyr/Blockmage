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
      <section className="hero hero--home">
        <div className="autoContainer">
          <Frame type="none" overflow={"visible"}>
            <FrameBlur {...animationSettings.blur1} />
            <FrameBlur color="secondary" {...animationSettings.blur2} />
          </Frame>
          <FrameMotion className="hero__inner" {...animationSettings.innerBox}>
            <HeroAnimatedItems />
            <div className="hero__inner-title">
              <h1>
                Providing expert <span className="nowrap">analysis on</span>{" "}
                <br />
                the latest web3 security <br />
                threats and trends.
              </h1>
            </div>
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
        <FrameMotionDiv {...animationSettings.station}>
          <img src={assetsFolder + "coming-soon/hud-group.svg"} alt="" />
        </FrameMotionDiv>
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
      <FrameItem addClass="_item1">
        <FrameMotionDiv
          {...animationSettings.zoomInDefault}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.1,
          }}
        >
          <img src={assetsFolder + "svg/box-blue.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_item2">
        <FrameMotionDiv
          {...animationSettings.zoomInDefault}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.2,
          }}
        >
          <img src={assetsFolder + "svg/box-blue-2.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_item3">
        <FrameMotionDiv
          {...animationSettings.zoomInDefault}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.3,
          }}
        >
          <img src={assetsFolder + "svg/box-blue-ball.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_item4">
        <FrameMotionDiv
          {...animationSettings.zoomInDefault}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.4,
          }}
        >
          <img src={assetsFolder + "svg/box-blue-small.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_lock">
        <FrameMotionDiv
          {...animationSettings.zoomInDefault}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.5,
          }}
        >
          <img src={assetsFolder + "svg/lock.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_station">
        <FrameMotionDiv {...animationSettings.station}>
          <img src={assetsFolder + "svg/station.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_station _reverse">
        <FrameMotionDiv {...animationSettings.station}>
          <img src={assetsFolder + "svg/station.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_window">
        <FrameMotionDiv
          {...animationSettings.zoomInDefault}
          transition={{
            ease: "easeOut",
            duration: 0.8,
            delay: 0,
          }}
        >
          <img src={assetsFolder + "svg/window.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
    </Frame>
  );
};
export default Hero;
