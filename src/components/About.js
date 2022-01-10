/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/About.css";
import aboutImg from "../img/about.jpg";
import { saveAs } from "file-saver";
function About() {

  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  const saveFile = () => {
    saveAs();
  };
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              In 2021, I graduated with a Masters degree in Computer Science from Guru Gobind Singh Indraprastha University. 
              Then, In 2018, I graduated with a Bachelor's degree in Computer Science from Lovely Professional University.
              As a teenager at school, I was the kid other students approached about issues with their phones or laptop. 
              I was the go-to-guy for fixing resolving any technical issues.
              </p>
              <p className="about__text p__color">
              Today, not much has changed. I'm still the first person to be called for any technical issues. 
              The difference is now I can also develop innovative applications and software.
              My natural curiosity for computers is what drove me towards my computer science degree.
              I have always been fascinated by computers and the technical mechanics behind the monitor.

              </p>
              <p className="about__text p__color">
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#" onClick={saveFile}>
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
