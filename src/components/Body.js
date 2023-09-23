import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects, skills } from "../data";
import "../css/body.css";
import {
  Github,
  Instagram,
  Linkedin,
  Email,
  Photo,
  Resume,
  ResumeFile,
} from "../files/Pictures";
import YouTubeVideo from "./YouTubeVideo";
import { CIV102 } from "../files/Pictures";
import CIV102Item from "./CIV102Item";

export default function Body() {
  // only show card being pressed

  const iniBooleans = {};
  projects.forEach((value, index) => {
    iniBooleans[value.identification] = false;
  });
  iniBooleans["moshuimusic"] = false;
  iniBooleans["civ102"] = false;

  const [cardVisible, setCardVisible] = useState(iniBooleans);

  return (
    <div className="body-wrapper">
      <div className="introduction" id="introduction">
        <div className="head-photo">
          <Photo />
        </div>
        {/* id for project has to be moved up because header covers it */}
        <span className="self-introduction" id="projects">
          I am a second-year engineering student at the University of Toronto
          with a great passion in emerging software technology. I have had eight
          years of programming experiences and created several projects using
          Python, JavaScript, and MatLab. In my leisure time, I like to play
          badminton and play some music on the guitar and the clarinet.
        </span>
        <div className="social-media">
          <a href="https://github.com/michaelmoshui/" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/wen-tao-mo/" target="_blank">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/michaelmoshui/" target="_blank">
            <Instagram />
          </a>
          <a href="mailto:michaelmoshui@gmail.com" target="_blank">
            <Email />
          </a>
          <Resume />
        </div>
      </div>
      <div className="line-splitter"></div>
      <div className="projects">
        <span className="project-title">Projects</span>
        <div className="projects-wrapper">
          {projects.map((value, index) => {
            return (
              <div className="project-item-card">
                <span className="title">{value.name}</span>
                <div className="short-description">
                  {value.description.slice(0, 80)}
                  {value.description.length > 80 && ". . . ."}
                </div>
                <div className="buttons">
                  <a href={value.link} target="_blank">
                    View
                  </a>
                  <div
                    onClick={() => {
                      setCardVisible({
                        ...iniBooleans,
                        [value.identification]: true,
                      });
                    }}
                  >
                    Details
                  </div>
                </div>
                {cardVisible[value.identification] && (
                  <ProjectItem
                    index={index}
                    name={value.name}
                    description={value.description}
                    tools={value.tools}
                    link={value.link}
                    identification={value.identification}
                    setCardVisible={setCardVisible}
                    iniBooleans={iniBooleans}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="line-splitter"></div>
        <span className="project-title" id="extras">
          Extras
        </span>
        <div className="projects-wrapper">
          <div className="project-item-card">
            <span className="title">Moshui Music</span>
            <div className="short-description">
              During my leisure time, I like to do guitar/clarinet arrangement
              of various types of songs record music videos.
            </div>
            <div className="buttons">
              <a
                href={"https://www.youtube.com/@moshuimusic5869"}
                target="_blank"
              >
                View
              </a>

              <div
                onClick={() => {
                  setCardVisible({
                    ...iniBooleans,
                    ["moshuimusic"]: true,
                  });
                }}
              >
                Details
              </div>
            </div>
            {cardVisible["moshuimusic"] && (
              <ProjectItem
                index={100}
                name={"Moshui Music"}
                description={<YouTubeVideo />}
                tools={[
                  "guitar",
                  "clarinet",
                  "MuseScore",
                  "Adobe Audition",
                  "Adobe Premire Pro",
                ]}
                link="https://www.youtube.com/@moshuimusic5869"
                identification="moshuimusic"
                setCardVisible={setCardVisible}
                iniBooleans={iniBooleans}
              />
            )}
          </div>
          <div className="project-item-card">
            <span className="title">CIV 102 Notes</span>
            <div className="short-description">
              {"CIV102 is a first-year Engineering Science course at the University of Toronto. This course covers various civil engineering topics such as static systems, truss bridge, bending beams, and concrete. Success in CIV 102 requires a strong understanding of civil engineering concepts and solid problem-solving skills to apply theoretical knowledge into problems.".slice(
                0,
                100
              )}
              . . . .
            </div>
            <div className="buttons">
              <CIV102 />

              <div
                onClick={() => {
                  setCardVisible({
                    ...iniBooleans,
                    ["civ102"]: true,
                  });
                }}
              >
                Details
              </div>
            </div>
            {cardVisible["civ102"] && (
              <CIV102Item
                index={101}
                name={"CIV 102 Notes"}
                description={
                  "CIV102 is a first-year Engineering Science course at the University of Toronto. This course covers various civil engineering topics such as static systems, truss bridge, bending beams, and concrete. Success in CIV 102 requires a strong understanding of civil engineering concepts and solid problem-solving skills to apply theoretical knowledge into problems. This hand-written note package includes all the concepts that I think are important for an overall understanding.\n\nCorrection on DAF on page 12:\nDAF = 1 / sqrt((1 - (f/fn)^2)^2 + (2 * Beta * f / fn)^2)"
                }
                tools={["Problem-solving skills"]}
                link="../files/civ102"
                identification="civ102"
                setCardVisible={setCardVisible}
                iniBooleans={iniBooleans}
              />
            )}
          </div>
        </div>
      </div>
      <div className="line-splitter"></div>
      <span className="project-title" id="skills">
        Skills
      </span>
      <div className="projects-wrapper">
        {skills.map((val, ind) => {
          return (
            <div className="skill-item" key={ind}>
              {val.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
