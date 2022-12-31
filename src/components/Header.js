import "../css/header.css";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="title-name">
          <span>Michael Mo</span>
          <span>(Wen Tao)</span>
        </div>
        <div className="menu">
          <div className="menu-item">
            <a href="#introduction">HOME</a>
          </div>
          <div className="menu-item">
            <a href="#projects">PROJECTS</a>
          </div>
          <div className="menu-item">
            <a href="#extras">EXTRAS</a>
          </div>
        </div>
      </div>
    </header>
  );
}
