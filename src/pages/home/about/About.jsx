import React from "react";
import Frame from "components/frame/Frame";

const About = () => {
  return (
    <section className="about">
      <div className="autoContainer">
        <div className="about__inner">
          <Frame type="cardBig" />
          <div className="about__inner-title">
            <h3>about</h3>
          </div>
          <div className="about__inner-content">
            <h6>
              Blockmage Labs is advancing the fight against threats in Web3.
            </h6>
            <p>
              Established in 2023 under the BlockMage brand, the organization is
              comprised of security researchers, forensic investigators, and
              cybersecurity professionals — each of whom are themselves Web3
              enthusiasts and active community members.#0A52B0
            </p>
            <p>
              For two years prior to formation, the team has been contributing
              research and providing invaluable insights into the shadowy
              activities of Web3 cyber crime and cyber criminals, studiously
              curious all the while.
            </p>
          </div>
          <div className="about__inner-content">
            <h6>
              Blockmage Labs is at the forefront of the fight against threats in
              the Web3 ecosystem
            </h6>
            <p>
              by focusing on areas such as threat intelligence, education,
              collaboration, and machine learning to provide comprehensive
              security solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
