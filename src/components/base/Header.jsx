import { Button, HamburgerButton } from "components/items/Buttons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const assetsFolder = process.env.PUBLIC_URL + "/images/";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <div className="autoContainer">
        <div className="header__inner">
          <div className="logo">
            <img src={assetsFolder + "logo.svg"} alt="" />
          </div>
          <nav className={`nav ${menu ? "active" : ""}`}>
            <div className="nav__inner">
              <div className="logo logo--text">
                <img src={assetsFolder + "logotype.png"} alt="" />
              </div>
              <div className="nav__inner-links">
                <div className="nav__inner-link active">About</div>
                <div className="nav__inner-link">Core Services</div>
                <div className="nav__inner-link">Pricing</div>
                <NavLink to="contact-us" className="nav__inner-link">
                  Contact Us
                </NavLink>
              </div>
              <div className="nav__inner-buttons">
                <Button text="Stay safe online" />
              </div>
            </div>
          </nav>
          <HamburgerButton isActive={menu} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
