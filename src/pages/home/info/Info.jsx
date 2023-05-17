import Frame, { FrameMotion } from "components/frame/Frame";
import React from "react";
import { innerShape } from "./constants/animations";
import { Button } from "components/items/Buttons";
import { useNavigate } from "react-router-dom";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Info = () => {
  const navigate = useNavigate();

  return (
    <section className="info">
      <div className="autoContainer">
        <div className="info__inner">
          <Frame>
            <FrameMotion {...innerShape}>
              <img src={assetsFolder + "shapes/shape.png"} alt="shape" />
            </FrameMotion>
          </Frame>
          <div className="info__inner-title">
            <h3>
              Blockmage Labs is proud to be a partner of Chainabuse as a trusted
              member of the Web3 Security Network.
            </h3>
            <Button text="Contact Us" onClick={() => navigate("/contact-us")} />
          </div>
          <div className="info__inner-content">
            <p>
              As an organization founded by the community, we strongly believe
              in the power of collaboration to combat attacks and crime in the
              Web3 ecosystem. By working together, we can seamlessly integrate
              security solutions and improve the experience for all parties
              involved. Providing educational resources is crucial for
              implementing effective security protocols, both for community
              members and developers.
            </p>
            <p>
              It's essential for victims of these egregious crimes to have
              access to information and support when they're wronged. That's why
              we're honored to partner with Chainabuse as a trusted member of
              their vetted Web3 Security Network, which includes fellow leaders,
              experts, and innovators in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
