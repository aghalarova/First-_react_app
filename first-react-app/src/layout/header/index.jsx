import React from "react";
import "./index.scss"
function Index() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <h2>Electrochip</h2>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">SERVICE</a>
                </li>
                <li>
                  <a href="#">BLOG</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Index;
