import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="intro">
        {" "}
        <div className="container">
          <h1 class="intro__hello">
            Hello! <span class="emoji wave-hand animated"></span>{" "}
          </h1>{" "}
          <h2 class="intro__tagline">
            I'm <span class="name">Siddhant Bhardwaj</span>, a motivated and
            enthusiastic full-stack software engineer focused on building
            amazing products &amp; experiences. I am looking forward to building
            solutions where data analytics, design and web technologies can
            combined and put into use. <span class="emoji technologist"></span>{" "}
          </h2>{" "}
          <h3 class="intro__contact">
            {" "}
            <span>Get in touch </span> <span class="emoji pointer"></span>{" "}
            <span>
              {" "}
              <a
                href="mailto:siddhantbhardwaj@email.arizona.edu"
                target="_blank"
                class="highlight-link"
              >
                siddhantbhardwaj@email.arizona.edu
              </a>{" "}
            </span>{" "}
          </h3>{" "}
          <h3 class="intro__contact">
            {" "}
            <span>
              {" "}
              <a
                href="https://drive.google.com/file/d/1W8LO1srhWXJ3fLVHMPR8dDoRMNenfi97/view?usp=sharing"
                target="_blank"
                class="highlight-link"
              >
                View My Resume
              </a>{" "}
            </span>
            <span class="emoji pointer"></span>
          </h3>{" "}
        </div>
        <div className="image3">
          <img src="/images/profile.png" />
        </div>
      </div>
    </div>
  );
}

export default Header;
