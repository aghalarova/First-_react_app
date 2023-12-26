import React from "react";
import "./index.css";
import BlogImgOne from "../../images/blog/home_blog2.png";
import BlogImgTwo from "../../images/blog/home_blog1.png";
const BlogPage = () => {
  return (
    <section id="blog-section">
      <div className="container">
        <div className="blog-section">
          <div className="blog-text">
            <h3>RECENT NEWS OF US</h3>
            <h1>Our Recent Blog</h1>
          </div>
          <div className="blog-cards">
            <div className="blog-text-div">
              <div className="blog-card">
                <div className="img-li">
                  <img src={BlogImgOne} alt="" />
                  <ul>
                    <li>By Admin - October 27, 2020</li>
                  </ul>
                </div>
                <div className="text">
                  <h1>16 Easy Ideas to Use in Everyday</h1>
                  <p>
                    Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magnua Quis ipsum suspendisse
                    ultrices gra
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-text-div">
              <div className="blog-card">
                <div className="img-li">
                  <img src={BlogImgTwo} alt="" />
                  <ul>
                    <li>By Admin - October 27, 2020</li>
                  </ul>
                </div>
                <div className="text">
                  <h1> 16 Easy Ideas to Use in Everyday</h1>
                  <p>
                    Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magnua Quis ipsum suspendisse
                    ultrices gra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
