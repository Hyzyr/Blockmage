import React from "react";
import Frame from "components/frame/Frame";
import CardSection from "components/layouts/CardSection";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Solutions = () => {
  return (
    <>
      <CardSection
        title={"Simplified Solutions for Web3 Security"}
        para={
          "Providing value by offering simplified and user-friendly web3 security solutions businesses and individuals, while still maintaining a high level of protection."
        }
      >
        <div className="cardSolution" style={{ position: "relative" }}>
          <span className="blur"></span>
          <Frame type="metal" />
          <div className="cardSolution-icon">
            <img src={assetsFolder + "home/solutions/icon-1.png"} alt="" />
          </div>
          <h6 className="solution__card-title">
            Advanced Threat Intelligence and Monitoring:
          </h6>
          <p>
            Our approach is multifaceted and proactive, combining machine
            learning, sourced intelligence from the community, and curated lists
            of keywords to create unparalleled detection routines We use
            algorithms and advanced analytics to identify and monitor emerging
            threats and attack vectors, and retarget to adapt as threats evolve
            in real-time.
          </p>
        </div>
        <div className="cardSolution" style={{ position: "relative" }}>
          <span className="blur"></span>
          <Frame type="metal" />
          <div className="cardSolution-icon">
            <img src={assetsFolder + "home/solutions/icon-2.png"} alt="" />
          </div>
          <h6 className="solution__card-title">
            Collaboration and Partnership:
          </h6>
          <p>
            At our company, we believe in the power of collaboration. That's why
            we work closely with industry leaders, cybersecurity experts, and
            research institutions to share knowledge, resources, and expertise.
            We are proud to partner with popular Web3 wallets like MetaMask, as
            well as with the developers and open-source community that surround
            them.
          </p>
        </div>
        <div className="cardSolution" style={{ position: "relative" }}>
          <span className="blur"></span>
          <Frame type="metal" />
          <div className="cardSolution-icon">
            <img src={assetsFolder + "home/solutions/icon-3.png"} alt="" />
          </div>
          <h6 className="solution__card-title">Education and Training:</h6>
          <p>
            At Blockmage, we are dedicated to offering accessible educational
            resources and training programs for developers, stakeholders, and
            end-users in the Web3 ecosystem. Our goal is to cultivate a
            security-conscious community by promoting the latest security best
            practices and encouraging a security-first mindset.
          </p>
        </div>
      </CardSection>
    </>
  );
};

export default Solutions;
