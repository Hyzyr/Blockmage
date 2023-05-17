import React from "react";

const CardSection = ({ title, para, className = "", children }) => {
  return (
    <section className={`cardSection ${className}`}>
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
