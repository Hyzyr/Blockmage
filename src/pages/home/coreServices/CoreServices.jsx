import Frame, { FrameBlur, FrameMotion } from "components/frame/Frame";
import React from "react";
import animationSettings from "./constants/animations";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const CoreServices = () => {
  return (
    <section className="coreServices">
      <div className="autoContainer">
        <div className="coreServices__inner">
          <div className="coreServices__inner-title">
            <h3>Core Services</h3>
          </div>
          <div className="coreServices__inner-row">
            <div className="coreServices__inner-tabs">
              <div className="coreServices__inner-tabs-events">
                <span className="active">01</span>
                <span className="">02</span>
                <span className="">03</span>
                <span className="">04</span>
              </div>
              <div className="coreServices__tab">
                <h6>Domain Monitoring and Takedown:</h6>
                <p>
                  Our analysts monitor the internet for fraudulent domains,
                  phishing sites, and typosquatting attempts. We work closely
                  with domain registrars and hosting providers to remove
                  infringing content and domains, effectively reducing the risk
                  of brand impersonation.
                </p>
              </div>
            </div>
            <div className="coreServices__inner-banner">
              <CoreBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CoreBanner = () => {
  const settings = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    transition: {
      ease: "easeOut",
      duration: 0.1,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 2,
      repeatDelay: 1.6,
    },
  };
  return (
    <div className="coreServices__banner">
      <Frame type="none" overflow="visible">
        <FrameMotion addClass="_box1" {...animationSettings.box1}>
          <img src={assetsFolder + "home/core-services/box-1.svg"} alt="" />
        </FrameMotion>
        <FrameMotion addClass="_box2" {...animationSettings.box2}>
          <img src={assetsFolder + "home/core-services/box-2.svg"} alt="" />
        </FrameMotion>
        <FrameMotion addClass="_lock" {...settings}>
          <img src={assetsFolder + "home/core-services/lock.svg"} alt="" />
        </FrameMotion>
        <FrameMotion addClass="_main" {...animationSettings.mainBox}>
          <img src={assetsFolder + "home/core-services/main.svg"} alt="" />
        </FrameMotion>
        <FrameBlur {...animationSettings.blur1} />
        <FrameBlur color="secondary" {...animationSettings.blur2} />
      </Frame>
    </div>
  );
};

export default CoreServices;
