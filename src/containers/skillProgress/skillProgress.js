import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">

          {/* First Container: Core Expertise + Image */}
          <div className="skills-top">
            <div className="skills-bar core-expertise">
              <h1 className="skills-heading">Core Expertise</h1>
              {techStack.coreExpertise.map((exp, i) => {
                return (
                  <div key={i} className="skill">
                    <p>{exp}</p>
                  </div>
                );
              })}
            </div>
            <div className="skills-image">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>
          </div>

          {/* Second Container: Other 3 Skills in Horizontal Layout */}
          {/* <div className="skills-top">
            <div className="skills-bar core-expertise">
              <h1 className="skills-heading">What I love doing</h1>
              {techStack.whatILoveDoing.map((exp, i) => {
                return (
                  <div key={i} className="skill">
                    <p>{exp}</p>
                  </div>
                );
              })}
            </div>
            <div className="skills-bar core-expertise">
              <h1 className="skills-heading">Industries I have worked with</h1>
              {techStack.industries.map((exp, i) => {
                return (
                  <div key={i} className="skill">
                    <p>{exp}</p>
                  </div>
                );
              })}
            </div>
            <div className="skills-bar core-expertise">
              <h1 className="skills-heading">I am passionate about</h1>
              {techStack.passion.map((exp, i) => {
                return (
                  <div key={i} className="skill">
                    <p>{exp}</p>
                  </div>
                );
              })}
            </div>
          </div> */}

        </div>
      </Fade>

    );
  }
  return null;
}
