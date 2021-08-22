import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className = "skill_section">
      <div className="title">
        <h1>Coding Skills</h1>
      </div>
      <div className="skill_1">
        <h3>Languages</h3>
      </div>
      <div className="skills">
        <div className="skillbox">
          <img
            src="https://blog.insaid.co/wp-content/uploads/2019/04/Python-logo.jpg"
            alt="python"
            className="image"
          />
          <p>Python</p>
        </div>
        <div className="skillbox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
            alt="javascript"
            className="image"
          />
          <p>JavaScript</p>
        </div>
        <div className="skillbox">
          <img
            src="data:image/png;base64,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"
            alt="typescript"
            className="image"
          />
          <p>TypeScript</p>
        </div>
        <div className="skillbox">
          <img
            src="data:image/jpeg;base64,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"
            alt="kotlin"
            className="image"
          />
          <p>Kotlin</p>
        </div>
        <div className="skillbox">
          <img
            src="https://icon-library.com/images/programming-language-icon/programming-language-icon-21.jpg"
            alt="html5"
            className="image"
          />
          <p>HTML5</p>
        </div>
        <div className="skillbox">
          <img
            src="https://ucarecdn.com/ca0f6099-ed7a-4409-82f1-9f6d2ab0eede/"
            alt="css3"
            className="image"
          />
          <p>CSS3</p>
        </div>
      </div>

      <div class="skill_1">
        <h3>Frameworks</h3>
      </div>
      <div className="skills">
        <div className="skillbox">
          <img
            src="https://files.realpython.com/media/django-pony.c61d43c33ab3.png"
            alt="django"
            className="image"
          />
          <p>Django</p>
        </div>
        <div className="skillbox">
          <img
            src="/images/react.png"
            alt="react"
            className="image"
          />
          <p>React</p>
        </div>
        <div className="skillbox">
          <img
            src="https://www.sysleaf.com/static/4df94bc06ab3c9cbcafa31fe010c96e4/c1ced/nodejs-express.png"
            alt="node"
            className="image"
          />
          <p>Express</p>
        </div>
        <div className="skillbox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
            alt="redux"
            className="image"
          />
          <p>Redux</p>
        </div>
        <div className="skillbox">
          <img
            src="https://cms-assets.tutsplus.com/uploads/users/1251/posts/28384/preview_image/chartjs-tutsplus.jpg"
            alt="node"
            className="image"
          />
          <p>Chart.js</p>
        </div>
        <div className="skillbox">
          <img
            src="https://miro.medium.com/max/560/1*jZtQFMYGgMvRkIje-Rm1gQ.png"
            alt="node"
            className="image"
          />
          <p>Material UI</p>
        </div>
      </div>
      <div class="skill_1">
        <h3>Database</h3>
      </div>
      <div className="skills">
        <div className="skillbox">
          <img
            src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
            alt="mongodb"
            className="image"
          />
          <p>MongoDB</p>
        </div>
        <div className="skillbox">
          <img
            src="/images/postgresql.png"
            alt="postgresql"
            className="image"
          />
          <p>Postgre SQL</p>
        </div>
        <div className="skillbox">
          <img
            src="/images/firebase.png"
            alt="firebase"
            className="image"
          />
          <p>Firebase</p>
        </div>
        <div className="skillbox">
          <img
            src="/images/mysql.png"
            alt="mysql"
            className="image"
          />
          <p>MySQL</p>
        </div>
        <div className="skillbox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png"
            alt="sqlite"
            className="image"
          />
          <p>SQLite</p>
        </div>
      </div>
      <div className="skill_1">
        <h3>Tools</h3>
      </div>
      <div className="skills">
        <div className="skillbox">
          <img
            src="data:image/png;base64,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"
            alt="devtools"
            className="image"
          />
          <p>Chrome DevTools</p>
        </div>
        <div className="skillbox">
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt="devtools"
            className="image"
          />
          <p>Git</p>
        </div>
        <div className="skillbox">
          <img
            src="https://miro.medium.com/max/719/1*WaaXnUvhvrswhBJSw4YTuQ.png"
            alt="devtools"
            className="image"
          />
          <p>Github</p>
        </div>
        <div className="skillbox">
          <img
            src="https://tecadmin.net/tutorial/wp-content/uploads/2017/09/bash-logo.jpg"
            alt="devtools"
            className="image"
          />
          <p>Bash</p>
        </div>
        <div className="skillbox">
          <img
            src="/images/heroku.png"
            alt="devtools"
            className="image"
          />
          <p>Heroku</p>
        </div>
        <div className="skillbox">
          <img
            src="https://avatars1.githubusercontent.com/u/60146625?s=200&v=4"
            alt="devtools"
            className="image"
          />
          <p>Nunjucks</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
