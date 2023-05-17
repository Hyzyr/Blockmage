import { digitsAnimation, shapeAnimation } from "assets/commonAnimations";
import Frame, {
  FrameItem,
  FrameMotion,
  FrameMotionDiv,
} from "components/frame/Frame";
import React from "react";

const assetsFolder = process.env.PUBLIC_URL + "/images/";
const CardSection = ({
  title,
  para,
  className = "",
  shapes = false,
  children,
}) => {
  return (
    <section className={`cardSection ${className}`}>
      <Frame type="none">
        <FrameItem addClass="_digits">
          <FrameMotionDiv
            {...digitsAnimation}
            transition={{
              ease: "easeOut",
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 2,
              delay: 0.3,
            }}
          >
            <img src={assetsFolder + "svg/digits-1.svg"} alt="" />
          </FrameMotionDiv>
        </FrameItem>
        <FrameItem addClass="_digits _reverse">
          <FrameMotionDiv
            {...digitsAnimation}
            transition={{
              ease: "easeOut",
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 2.5,
            }}
          >
            <img src={assetsFolder + "svg/digits-2.svg"} alt="" />
          </FrameMotionDiv>
        </FrameItem>

        {shapes && (
          <>
            <FrameMotion addClass="_shape " {...shapeAnimation}>
              <img src={assetsFolder + "shapes/shape-1.png"} alt="shape" />
            </FrameMotion>
            <FrameMotion addClass="_shape _reverse" {...shapeAnimation}>
              <img src={assetsFolder + "shapes/shape-1.png"} alt="shape" />
            </FrameMotion>
          </>
        )}
      </Frame>
      <div className="autoContainer">
        <div className="cardSection__inner">
          {(title || para) && (
            <div className="cardSection__inner-header">
              {title && <h3>{title}</h3>}
              {para && <p>{para}</p>}
            </div>
          )}
          <div className="cardSection__inner-row">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
