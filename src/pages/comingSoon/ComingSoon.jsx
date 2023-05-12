import React from "react";
import Frame, {
  FrameBlur,
  FrameItem,
  FrameMotion,
  FrameMotionDiv,
} from "../../components/Frame";
import animationSettings from "./constants/animations";
import { motion } from "framer-motion";

const publicFolder = process.env.PUBLIC_URL + "/images/";

const ComingSoon = () => {
  return (
    <div className="comingSoon">
      <Frame type="none">
        <FrameItem addClass="_logo">
          <img src={publicFolder + "logo.svg"} alt="" />
        </FrameItem>
        <FrameItem addClass="_hud">
          <img src={publicFolder + "coming-soon/hud-group.svg"} alt="" />
        </FrameItem>
        <FrameItem addClass="_box">
          <FrameMotionDiv {...animationSettings.digitsBox}>
            <img src={publicFolder + "svg/digits-box.svg"} alt="" />
          </FrameMotionDiv>
        </FrameItem>
        <FrameItem addClass="_box _reverse">
          <FrameMotionDiv {...animationSettings.digitsBox}>
            <img src={publicFolder + "svg/digits-box.svg"} alt="" />
          </FrameMotionDiv>
        </FrameItem>
        <FrameBlur
          {...{
            initial: {
              left: "calc(50% - 395px)",
              top: "calc(50% - 110px)",
              x: "140px",
              y: "40px",
              opacity: 0.4,
              scale: 1,
            },
            animate: {
              x: "40px",
              y: "-80px",
              opaity: 0.6,
              scale: 0.98,
            },
            transition: {
              ease: "easeOut",
              duration: 14,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 0.6,
            },
          }}
        />
        <FrameBlur
          color="secondary"
          {...{
            initial: {
              left: "calc(50% + 395px)",
              top: "calc(50% + 20px)",
              x: "-140px",
              y: "40px",
              opacity: 1,
              scale: 1,
            },
            animate: {
              x: "-40px",
              y: "80px",
              opaity: 0.8,
              scale: 0.98,
            },
            transition: {
              ease: "easeOut",
              duration: 14,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 0.6,
            },
          }}
        />
      </Frame>
      <motion.div className="comingSoon__inner" {...animationSettings.innerBox}>
        <Frame>
          <FrameMotion {...animationSettings.innerShape}>
            <img src={publicFolder + "shape.png"} alt="shape" />
          </FrameMotion>
        </Frame>
        <h1>Coming Soon</h1>
        <label>Get Notified when we launch</label>
        <div className="input input--primary">
          <input type="text" placeholder="Email Address" />
        </div>
        <button className="button button--primary">Subscribe</button>
      </motion.div>
      <div className="comingSoon__bg"></div>
    </div>
  );
};

export default ComingSoon;
