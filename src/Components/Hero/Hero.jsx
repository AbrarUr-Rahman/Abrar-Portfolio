import "./Hero.css";
import React from "react";
// import profile_img from "../../assets/profile_img.svg";
import profile_img from "../../assets/profile_img2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Md.Abrar Ur Rahman, </span>A frontend Engineer Based in
        Bangladesh{" "}
      </h1>
      <p>
        I am a Front End Developer from Dhaka,Bangladesh with 2 years of
        experience working with front end Technology
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With ME
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
