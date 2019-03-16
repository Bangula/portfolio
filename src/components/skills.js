import React from "react";

//importing images
import HtmlImg from "../images/html5-top.png";
import JsImg from "../images/javascript.png";
import ReactImg from "../images/react.png";
import NodeImg from "../images/node.png";

const Skills = () => {
  return (
    <div id="skills">
      <div className="container-fluid">
        <h5 className="center grey-text text-darken-1">Technical skills</h5>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s6 m3 l3">
                  <a
                    href="#section1"
                    className="active teal-text text-darken-4 "
                  >
                    HTML5/CSS3
                  </a>
                </li>
                <li className="tab col s6 m3 l3">
                  <a href="#section2" className="teal-text text-darken-4">
                    JavaScript
                  </a>
                </li>
                <li className="tab col s6 m3 l3">
                  <a href="#section3" className="teal-text text-darken-4">
                    React JS
                  </a>
                </li>
                <li className="tab col s6 m3 l3">
                  <a href="#section4" className="teal-text text-darken-4">
                    Node JS
                  </a>
                </li>
              </ul>
            </div>
            <div id="section1" className="tabSection col s12">
              <div className="sectionImg">
                <img src={HtmlImg} alt="html css" />
              </div>
              <div className="sectionDescription">
                <p className="center teal-text text-darken-4 skillDscr">
                  Knowledge acquired through self-study of these markup and
                  style sheet languages, I perfected on Cluster Academy of ICT
                  Cluster of Central Serbia with maximum number of points. CSS
                  frameworks and preprocessors witch i use most are{" "}
                  <b>SASS(SCSS)</b>, <b>Bootstrap</b> and <b>Materialize</b>.
                </p>
              </div>
            </div>
            <div id="section2" className="tabSection col s12">
              <div className="sectionImg">
                <img src={JsImg} alt="html css" />
              </div>
              <div className="sectionDescription">
                <p className="center teal-text text-darken-4 skillDscr">
                  Definitely my favorite programming language. After acquiring
                  basic knowledge of JavaScript language on Cluster Academy, I
                  devoted myself to deep understanding of OOP JavaScript, as
                  well as understanding and managing asynchronous JavaScript
                  processes. I work with ECMAScript 6 standard, and technologies
                  and tools such as AJAX, JSON, RestAPI...
                </p>
              </div>
            </div>
            <div id="section3" className="tabSection col s12">
              <div className="sectionImg">
                <img src={ReactImg} alt="html css" />
              </div>
              <div className="sectionDescription">
                <p className="center teal-text text-darken-4 skillDscr">
                  Today, when the performance is most important, it is necessary
                  to use one of the JS frameworks. I have chosen the ReactJS,
                  because of its popularity and it's great for creating fast
                  Signle Page Apps. With Redux the data management is highly
                  efficient in React.
                </p>
              </div>
            </div>
            <div id="section4" className="tabSection col s12">
              <div className="sectionImg">
                <img src={NodeImg} alt="html css" />
              </div>
              <div className="sectionDescription">
                <p className="center teal-text text-darken-4 skillDscr">
                  I found that Node JS is perfect for me, because i can write
                  JavaScript on the server side. Isn't that great? I prefer to
                  use Express and MongoDB for creating Node apps. All of them in
                  combination with ReactJS (MERN Stack), are powerful tool for
                  creating highly demanded web apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
