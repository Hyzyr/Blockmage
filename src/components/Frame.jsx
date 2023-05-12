import React from "react";
import { frameSVG } from "../SVG";
import { motion } from "framer-motion";

const Frame = ({ type = "default", children }) => {
  const frame = type === "default" ? frameSVG : null;

  return (
    <div className="frameBg">
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
