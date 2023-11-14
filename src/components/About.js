import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual
          mockups.Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publish ing industries for previewing layouts and visual
          mockups.Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual
          mockups.Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publish ing industries for previewing layouts and visual
          mockups.Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual
          mockups.Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publish ing industries for previewing layouts and visual
          mockups.
        </p>
      </div>
    </div>
  );
};
