import React from "react";
import { motion } from "framer-motion";
import {
  frameCardBigSVG,
  frameCardSVG,
  frameCardWideSVG,
  frameMetal,
  frameNote,
  frameSVG,
  frameSliderSVG,
} from "./SVGFrames";

const Frame = ({ type = "default", overflow, children }) => {
  const getFrame = () => {
    if (type === "default") return frameSVG;
    if (type === "metal") return frameMetal;
    if (type === "card") return frameCardSVG;
    if (type === "cardWide") return frameCardWideSVG;
    if (type === "cardBig") return frameCardBigSVG;
    if (type === "sliderFrame") return frameSliderSVG;
    if (type === "note") return frameNote;

    return null;
  };
  const frame = getFrame();

  return (
    <div
      className={`frameBg ${frame ? "" : "_noframe"} ${
        overflow === "visible" ? "_visible" : ""
      }`}
    >
      {frame && <div className="frameBg__frame">{frame}</div>}
      <div className="frameBg__inner">{children}</div>
    </div>
  );
};

export const FrameItem = ({ addClass = "", ...props }) => {
  return <div className={`frameBg__inner-item ${addClass}`} {...props} />;
};
export const FrameBlur = ({ addClass = "", color = "primary", ...props }) => {
  let colorClass = "";
  colorClass += color === "primary" ? "_primary" : "";
  colorClass += color === "secondary" ? "_secondary" : "";

  return (
    <FrameMotionDiv
      className={`frameBg__inner-blur ${colorClass} ${addClass}`}
      {...props}
    />
  );
};
export const FrameMotion = ({ addClass = "", ...props }) => {
  return (
    <FrameMotionDiv className={`frameBg__inner-item ${addClass}`} {...props} />
  );
};
export const FrameMotionDiv = (props) => <motion.div {...props} />;

export default Frame;
