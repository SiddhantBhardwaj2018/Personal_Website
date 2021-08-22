import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="title">
        <h1>Reach Out To Me</h1>
      </div>
      <div className="items">
        <a
          href="https://github.com/SiddhantBhardwaj2018"
          target="__blank"
          className="github"
        >
          <h4>GithuB</h4>
        </a>
        <a
          href="https://www.kaggle.com/siddhant123"
          target="__blank"
          className="linkedin"
        >
          <h4>Kaggle</h4>
        </a>
        <a
          href="https://www.linkedin.com/in/siddhant-bhardwaj-668b0b174/"
          target="__blank"
          className="linkedin"
        >
          <h4>LinkedIn</h4>
        </a>
        <a href="mailto:bhardwajsiddhant03@gmail.com" className="email">
          <h4>Email</h4>
        </a>
      </div>
      <p className="copyright">
        Designed & Developed by Siddhant Bhardwaj © 2021{" "}
        <img src="/images/rockon.png" alt="" className="rockon" />
      </p>
    </div>
  );
}

export default Footer;
