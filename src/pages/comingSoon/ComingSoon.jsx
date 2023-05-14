import React from "react";
import Frame, {
  FrameBlur,
  FrameItem,
  FrameMotion,
  FrameMotionDiv,
} from "../../components/frame/Frame";
import animationSettings from "./constants/animations";
import { motion } from "framer-motion";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const ComingSoon = ({ onClick }) => {
  return (
    <div className="comingSoon">
      <Frame type="none">
        <FrameItem addClass="_logo">
          <img src={assetsFolder + "logo.svg"} alt="" />
        </FrameItem>
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
        <FrameBlur {...animationSettings.blur1} />
        <FrameBlur color="secondary" {...animationSettings.blur2} />
      </Frame>
      <motion.div className="comingSoon__inner" {...animationSettings.innerBox}>
        <Frame>
          <FrameMotion {...animationSettings.innerShape}>
            <img src={assetsFolder + "shape.png"} alt="shape" />
          </FrameMotion>
        </Frame>
        <h1>Coming Soon</h1>
        <label>Get Notified when we launch</label>
        <div className="input input--primary">
          <input type="text" placeholder="Email Address" />
        </div>
        <button className="button button--primary" onClick={onClick}>
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
