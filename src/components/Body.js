import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../data";
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

export default function Body() {
  // only show card being pressed

  const iniBooleans = {};
  projects.forEach((value, index) => {
    iniBooleans[value.identification] = false;
  });
  iniBooleans["moshuimusic"] = false;

  const [cardVisible, setCardVisible] = useState(iniBooleans);

  return (
    <div className="body-wrapper">
      <div className="introduction">
        <div className="title-name">
          <span>Michael Mo</span>
          <span>(Wen Tao)</span>
        </div>
        <div className="head-photo">
          <Photo />
        </div>
        <span className="self-introduction">
          I am a first-year engineering student at the University of Toronto
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
                  {value.description.length > 80 && "..."}
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
        <span className="project-title">Extras</span>
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
        </div>
      </div>
    </div>
  );
}
