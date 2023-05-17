import React from "react";
import Frame, {
  FrameItem,
  FrameMotion,
  FrameMotionDiv,
} from "components/frame/Frame";
import { innerShape } from "./constants/animations";
import { Button } from "components/items/Buttons";
import { digitsAnimation } from "assets/commonAnimations";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Note = () => {
  return (
    <section className="note">
      <div className="autoContainer">
        <div className="note__inner">
          <Frame type="note">
            <FrameItem addClass="_digits">
              <FrameMotionDiv
                {...digitsAnimation}
                transition={{
                  ease: "easeOut",
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  delay: 2.5,
                }}
              >
                <img src={assetsFolder + "svg/digits-1.svg"} alt="" />
              </FrameMotionDiv>
            </FrameItem>
            <FrameItem addClass="_digits">
              <FrameMotionDiv
                {...digitsAnimation}
                transition={{
                  ease: "easeOut",
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  delay: 0.3,
                }}
              >
                <img src={assetsFolder + "svg/digits-1.svg"} alt="" />
              </FrameMotionDiv>
            </FrameItem>
            <FrameItem addClass="_digits">
              <FrameMotionDiv
                {...digitsAnimation}
                transition={{
                  ease: "easeOut",
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  delay: 1.5,
                }}
              >
                <img src={assetsFolder + "svg/digits-1.svg"} alt="" />
              </FrameMotionDiv>
            </FrameItem>
            <FrameItem addClass="_digits ">
              <FrameMotionDiv
                {...digitsAnimation}
                transition={{
                  ease: "easeOut",
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  delay: 2.3,
                }}
              >
                <img src={assetsFolder + "svg/digits-2.svg"} alt="" />
              </FrameMotionDiv>
            </FrameItem>
            <FrameItem addClass="_digits ">
              <FrameMotionDiv
                {...digitsAnimation}
                transition={{
                  ease: "easeOut",
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  delay: 2,
                }}
              >
                <img src={assetsFolder + "svg/digits-2.svg"} alt="" />
              </FrameMotionDiv>
            </FrameItem>
            <FrameItem addClass="_digits ">
              <FrameMotionDiv
                {...digitsAnimation}
                transition={{
                  ease: "easeOut",
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  delay: 1.3,
                }}
              >
                <img src={assetsFolder + "svg/digits-2.svg"} alt="" />
              </FrameMotionDiv>
            </FrameItem>
            <FrameMotion {...innerShape}>
              <img src={assetsFolder + "shapes/shape.png"} alt="shape" />
            </FrameMotion>
          </Frame>
          <div className="note__inner-content">
            <h3>
              Protect your brand and business from phishing attacks, starting
              today
            </h3>
            <Button text="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Note;
