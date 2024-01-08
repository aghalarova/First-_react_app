import React from "react";
import "./index.css";
import image from "../../components/images/banner-img.png";
import MainProducts from "../main-products-page";
const Home = () => {
  return (
    <>
      <section id="home-section">
        <div className="container">
          <div className="section">
            <div className="left">
              <h1>Improved Production level with Robotics</h1>
              <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
            </div>
            <div className="right">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
      <MainProducts />
    </>
  );
};

export default Home;
