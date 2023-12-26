import React from "react";
import "./index.css";
const FooterButton = ({ text, aboutButton }) => {
  return (
    <button className={aboutButton === "about-btn" ? "about-btn" : "button"}>
      {text}
    </button>
  );
};

export default FooterButton;
