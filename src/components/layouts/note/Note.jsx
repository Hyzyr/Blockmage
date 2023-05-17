import React from "react";
import Frame, { FrameMotion } from "components/frame/Frame";
import { innerShape } from "./constants/animations";
import { Button } from "components/items/Buttons";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Note = () => {
  return (
    <section className="note">
      <div className="autoContainer">
        <div className="note__inner">
          <Frame type="note">
            <FrameMotion {...innerShape}>
              <img src={assetsFolder + "shape.png"} alt="shape" />
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
