import "./Hero.css";
import React from "react";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
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
        <div className="hero-connect">Connect With ME</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
