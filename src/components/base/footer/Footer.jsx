import { githubSVG, tiwtterSVG } from "assets/SVG";
import Frame, { FrameMotion } from "components/frame/Frame";
import { ButtonIcon } from "components/items/Buttons";
import React from "react";
import { Link } from "react-router-dom";
import { innerShape } from "./constants/animations";
const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="autoContainer">
        <div className="footer__inner">
          <Frame type="none" overflow={"visible"}>
            <FrameMotion {...innerShape}>
              <img src={assetsFolder + "shapes/shape.png"} alt="shape" />
            </FrameMotion>
          </Frame>
          <div className="footer__inner-info">
            <div className="footer__inner-info-logo">
              <div className="logo">
                <img src={assetsFolder + "logo.svg"} alt="" />
              </div>
              <div className="logo logo--text">
                <img src={assetsFolder + "logotype.svg"} alt="" />
              </div>
            </div>
            <p>
              Blockmage Labs is at the forefront of the fight against threats in
              the Web3 ecosystem by focusing on areas such as threat
              intelligence, education, collaboration, and machine learning to
              provide comprehensive security solutions.
            </p>
          </div>
          <div className="footer__inner-links">
            <div className="footer__inner-links-column">
              <strong>About</strong>
              <a className="link" href="#" children="About us" />
              <a className="link" href="#" children="Core Services" />
              <a className="link" href="#" children="Pricing" />
              <Link className="link">Contact Us</Link>
            </div>
            <div className="footer__inner-links-column">
              <strong>Core Services</strong>
              <a
                className="link"
                href="#"
                children="Domain Monitoring and Takedown"
              />
              <a
                className="link"
                href="#"
                children="Social Media and Online Platform Monitoring"
              />
              <a
                className="link"
                href="#"
                children="Anti-counterfeiting Solutions"
              />
              <a
                className="link"
                href="#"
                children="Customized Brand Protection strategies"
              />
            </div>
          </div>
          <div className="footer__inner-social">
            <strong>Social</strong>
            <div className="footer__inner-social-links">
              <ButtonIcon>{tiwtterSVG}</ButtonIcon>
              <ButtonIcon>{githubSVG}</ButtonIcon>
            </div>
            <div className="footer__inner-social-privacy">
              <a className="link" href="">
                Privacy Policy
              </a>
              &nbsp;|&nbsp;
              <a className="link" href="">
                Terms of Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="footer__copyright">© 2023, All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
