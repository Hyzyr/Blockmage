import React from "react";

export const Button = ({ text, ...props }) => {
  return (
    <button
      type="button"
      className="button button--primary"
      children={text}
      {...props}
    />
  );
};
export const ButtonIcon = (props) => {
  return <button type="button" className="buttonIcon" {...props} />;
};

export const HamburgerButton = ({ isActive, ...props }) => (
  <button className={`burger ${isActive ? "active" : ""}`} {...props}>
    <span></span>
  </button>
);
