import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <div className="title">
        <h1>Experience</h1>
      </div>
      <div className="experiences">
          <div className="image1">
            <a
              href="https://www.linkedin.com/company/openclassai/"
              target="__blank"
            >
              <img src="/images/deloitte.png" alt="logo" className="image2" />
            </a>
          </div>
          <div className="para">
            <p>
              At my internship at Deloitte, I was involved in attempting to build a recommender system 
              application using the Flask web framework and React UI framework.I performed a complete analysis of various 
              recommender system approaches like content-based filtering and collaborative filtering, including 
              the accuracy metrics and implemented them in the form of APIs.I also recorded website visitor 
              entries to monitor model accuracy for further improvements to the model.
            </p>
            <div className="project__used">
              <span className="project__used__item">Python</span>
              <span className="project__used__item">NLTK</span>
              <span className="project__used__item">JavaScript</span>
              <span className="project__used__item">Pandas</span>
              <span className="project__used__item">Flask</span>
              <span className="project__used__item">React</span>
              <span className="project__used__item">Scikit-Learn</span>
            </div>
          </div>
        </div>
        <div className="experiences">
          <div className="image1">
            <a
              href="https://www.linkedin.com/company/openclassai/"
              target="__blank"
            >
              <img src="/images/openclass.jpg" alt="logo" className="image2" />
            </a>
          </div>
          <div className="para">
            <p>
              At my internship at OpenClass.ai, an edtech startup based out of
              Tucson, Arizona, I was involved in attempting to build a
              recommender system using the Naive Bayes and Logistic Regression
              Algorithms to generate topic labels for educational material in
              order to ease the process of topic identification and make it
              easier for students to find a common cluster of topics. I also
              participated in the OpenClass Prize, a contest of the most
              accurate recommender systems in identifying topic labels
              associated with a piece of educational text.
            </p>
            <div className="project__used">
              <span className="project__used__item">Python</span>
              <span className="project__used__item">NLTK</span>
              <span className="project__used__item">Spacy</span>
              <span className="project__used__item">Pandas</span>
            </div>
          </div>
        </div>
        <div className="experiences">
          <div className="image1">
            <a
              href="https://www.linkedin.com/company/hack-arizona/"
              target="__blank"
            >
              <img
                src="/images/hackarizona.png"
                alt="logo"
                className="image2"
              />
            </a>
          </div>
          <div className="para">
            <p>
              As a web developer at Hack Arizona, I was responsible for
              assisting in the development and design of a dynamic interactive
              website as a team-member that ensures high traffic, page views,
              and user experience for the biggest hackathon in the Southwest
              region - HackArizona (2020). I was also involved in fixing bugs
              from existing website and implementing enhancements that
              significantly improved web functionality and speed
            </p>
            <div className="project__used">
              <span className="project__used__item">JavaScript</span>
              <span className="project__used__item">HTML5</span>
              <span className="project__used__item">CSS3</span>
              <span className="project__used__item">Bootstrap</span>
            </div>
          </div>
        </div>

      <div className="experiences">
        <div className="image1">
          <a href="https://www.linkedin.com/school/uarizona/" target="__blank">
            <img src="/images/arizona.png" alt="logo" className="image2" />
          </a>
        </div>
        <div className="para">
          <p>
            As an undergraduate research assistant at the Neuroscience of
            Emotion and Thought Laboratory at the University of Arizona, I was
            involved in applying regression algorithms and exploratory data
            analysis on large datasets of psychological traits to predict mental
            health properties etc. based on their long-term decision making
            patterns. I was also involved in attempting to decipher the impact
            on depression and anxiety based on multiple socio-economic and
            cognitive factors.
          </p>
          <div className="project__used">
            <span className="project__used__item">Python</span>
            <span className="project__used__item">Pandas</span>
            <span className="project__used__item">Numpy</span>
            <span className="project__used__item">Matplotlib</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
