import React from "react";
import Hero from "../components/AboutHero";
import Mission from "../components/Mission";
import Team from "../components/Team";
import BackBtn from "./BackBtn";
// import "./AboutUs.css";

const About = () => {
  return (
    <div className="about-us-page">
      <BackBtn />
      <Hero />
      <Mission />
      <Team />
    </div>
  );
};

export default About;
