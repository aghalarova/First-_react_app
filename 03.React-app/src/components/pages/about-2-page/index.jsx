import React from "react";
import "./index.css";
import FooterButton from "../../button";
const AboutRedPage = () => {
  return (
    <section id="section-red">
      <div className="container">
        <div className="section-red">
          <h1>Are you Searching For a First-Class Consultant?</h1>
          <FooterButton
            text={"MORE ABOUT US"}
            sectionRedBtn={"section-red-btn"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutRedPage;
