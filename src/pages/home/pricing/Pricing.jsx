import React from "react";
import { doubleTickSVG } from "assets/SVG";
import CardSection from "components/layouts/CardSection";
import { cardDetails } from "./constants/cardDetails";
import Frame from "components/frame/Frame";
import { Button } from "components/items/Buttons";

const Pricing = () => {
  return (
    <CardSection title={"pricing"} className="cardSection--pricing" shapes>
      <PricingCard data={cardDetails.basic} />
      <PricingCard data={cardDetails.standard} />
      <PricingCard data={cardDetails.advanced} />
      <PricingCard data={cardDetails.liveScam} />
      <PricingCard data={cardDetails.custom} centerTitle wide />
    </CardSection>
  );
};
const PricingCard = ({ centerTitle = false, wide = false, onClick, data }) => {
  return (
    <div className={`cardPricing ${wide ? "cardPricing--wide" : ""}`}>
      <Frame type={wide ? "cardWide" : "card"} shapes />
      <div className={`cardPricing__title ${centerTitle ? "_center" : ""}`}>
        <h6>{data.title}</h6>
        {data.subtitle && <span>{data.subtitle}</span>}
      </div>
      <ul className="cardPricing__list">
        {data.list.map((text, index) => (
          <PricingListItem text={text} key={index} />
        ))}
      </ul>
      {data.price && (
        <div className="cardPricing__price">
          <h2>${data.price}</h2>
          <small>/ Monthly</small>
        </div>
      )}
      <div className="cardPricing__action">
        <Button text="Get Started" onClick={onClick} />
      </div>
    </div>
  );
};
const PricingListItem = ({ text }) => {
  return (
    <li className="cardPricing__list-item">
      <span className="cardPricing__list-item-ico">{doubleTickSVG}</span>
      <p>{text}</p>
    </li>
  );
};

export default Pricing;
