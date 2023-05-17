import React from "react";
import Hero from "./hero/Hero";
import Solutions from "./solutions/Solutions";
import Pricing from "./pricing/Pricing";
import About from "./about/About";
import Info from "./info/Info";
import CoreServices from "./coreServices/CoreServices";
import Note from "components/layouts/note/Note";

const Home = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Pricing />
      <About />
      <Info />
      <CoreServices />
      <Note />
    </>
  );
};

export default Home;
