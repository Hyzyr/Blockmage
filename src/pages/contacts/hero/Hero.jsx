import Frame, { FrameBlur, FrameMotion } from "components/frame/Frame";
import React from "react";
import animationSettings from "./constants/animations";
import Input from "components/items/Input";
import { Button } from "components/items/Buttons";

const Hero = () => {
  return (
    <section className="hero">
      <div className="autoContainer">
        <Frame type="none">
          <FrameBlur {...animationSettings.blur1} />
          <FrameBlur color="secondary" {...animationSettings.blur2} />
        </Frame>
        <FrameMotion className="hero__inner" {...animationSettings.innerBox}>
          <HeroAnimatedItems />
          <h1>contact us</h1>

          <div className="hero__inner-form">
            <div className="hero__inner-form-row">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input placeholder="Email Address" />
            <Input placeholder="URL or web address of the suspicious site" />
            <Input type="textarea" placeholder="Description of the problem" />
            <Input placeholder="Attachment" />
            <div className="hero__inner-form-action">
              <Button text={"Submit"} />
            </div>
          </div>
        </FrameMotion>
      </div>
    </section>
  );
};
const HeroAnimatedItems = () => {
  return (
    <Frame>
      {/* <FrameItem addClass="_hud">
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
      </FrameItem> */}
    </Frame>
  );
};
export default Hero;
