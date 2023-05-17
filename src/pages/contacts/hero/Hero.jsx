import Frame, {
  FrameBlur,
  FrameItem,
  FrameMotion,
  FrameMotionDiv,
} from "components/frame/Frame";
import React from "react";
import animationSettings from "./constants/animations";
import Input from "components/items/Input";
import { Button } from "components/items/Buttons";
import { PhoneSVG, EmailSVG, MapPinSVG } from "SVG";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Hero = () => {
  return (
    <section className="hero hero--contact">
      <div className="autoContainer">
        <Frame type="none" overflow={"visible"}>
          <FrameBlur {...animationSettings.blur1} />
          <FrameBlur color="secondary" {...animationSettings.blur2} />
        </Frame>
        <FrameMotion className="hero__inner" {...animationSettings.innerBox}>
          <HeroAnimatedItems />
          <div className="hero__inner-row">
            <div className="hero__contact">
              <h1>contact us</h1>
              <p>
                Fill up the form and our team will get back <br />
                to you within 24hours
              </p>
              <div className="hero__contact-list">
                <div className="hero__contact-item">
                  <i className="hero__contact-item-ico">{PhoneSVG}</i>
                  <div className="hero__contact-item-content">
                    <small>Tel</small>
                    <span>
                      <a className="link" href="tel:310-437-2766">
                        310-437-2766
                      </a>
                    </span>
                  </div>
                </div>
                <div className="hero__contact-item">
                  <i className="hero__contact-item-ico">{EmailSVG}</i>
                  <div className="hero__contact-item-content">
                    <small>Mail</small>
                    <span>
                      <a className="link" href="mailto:blockmage@outlook.com">
                        blockmage@outlook.com
                      </a>
                    </span>
                  </div>
                </div>
                <div className="hero__contact-item">
                  <i className="hero__contact-item-ico">{MapPinSVG}</i>
                  <div className="hero__contact-item-content">
                    <small>Address</small>
                    <span>
                      706 Campfire Ave. Meriden, <br />
                      CT 06450
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero__inner-form">
              <div className="hero__inner-form-row">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" />
              <Input placeholder="URL or web address of the suspicious site" />
              <Input
                type="textarea"
                placeholder="Description of the problem"
                rows={8}
              />
              <Input placeholder="Attachment" />
              <div className="hero__inner-form-action">
                <Button text={"Submit"} />
              </div>
            </div>
          </div>
        </FrameMotion>
      </div>
    </section>
  );
};
const HeroAnimatedItems = () => {
  const animationSettings = {
    initial: {
      scale: 0.8,
      opacity: 0.8,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <Frame>
      <FrameItem addClass="_box1">
        <FrameMotionDiv
          {...animationSettings}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.4,
          }}
        >
          <img src={assetsFolder + "contacts/hero/box-1.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_box2">
        <FrameMotionDiv
          {...animationSettings}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.5,
          }}
        >
          <img src={assetsFolder + "contacts/hero/box-2.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_box3">
        <FrameMotionDiv
          {...animationSettings}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.65,
          }}
        >
          <img src={assetsFolder + "contacts/hero/box-3.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
      <FrameItem addClass="_box4">
        <FrameMotionDiv
          {...animationSettings}
          transition={{
            ease: "easeOut",
            duration: 0.4,
            delay: 0.7,
          }}
        >
          <img src={assetsFolder + "contacts/hero/box-4.svg"} alt="" />
        </FrameMotionDiv>
      </FrameItem>
    </Frame>
  );
};
export default Hero;
