import "../css/footer.css";
import { Github, Linkedin, Instagram, Email } from "../files/Pictures";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>Michael's Website {year}</span>
      <div className="link-icons">
        <div>
          <a href="https://github.com/michaelmoshui/" target="_blank">
            <Github />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/wen-tao-mo/" target="_blank">
            <Linkedin />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/michaelmoshui/" target="_blank">
            <Instagram />
          </a>
        </div>
        <div>
          <a href="mailto:michaelmoshui@gmail.com" target="_blank">
            <Email />
          </a>
        </div>
      </div>
    </footer>
  );
}
