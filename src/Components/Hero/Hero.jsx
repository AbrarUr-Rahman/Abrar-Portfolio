import "./Hero.css";
import React from "react";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="Hero">
      <img src={profile_img} alt="" />
      <h1>I'm Md.Abrar Ur Rahman </h1>
    </div>
  );
};

export default Hero;
