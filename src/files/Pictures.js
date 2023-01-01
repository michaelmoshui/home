import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import email from "./email.png";
import photo from "./photo.jpg";
import resume from "./resume.png";
import resumeFile from "./resume.pdf";
import civ102 from "./civ102.pdf";

export const Github = () => {
  return <img src={github}></img>;
};

export const Linkedin = () => {
  return <img src={linkedin}></img>;
};

export const Instagram = () => {
  return <img src={instagram}></img>;
};

export const Email = () => {
  return <img src={email}></img>;
};

export const Photo = () => {
  return <img src={photo} style={{ width: "100%" }}></img>;
};

export const Resume = () => {
  return (
    <a href={resumeFile} target="_blank">
      <img src={resume}></img>
    </a>
  );
};

export const CIV102 = () => {
  return (
    <a href={civ102} target="_blank">
      View
    </a>
  );
};
