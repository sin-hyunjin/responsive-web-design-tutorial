import { useState } from "react";
import { logoCloud } from "@assets/img";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("13");
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-inner">
        <div className="left-section">
          <div className="logo">
            <a href="/">
              <img src={logoCloud} alt="Company Logo" width="47px" />
            </a>
          </div>
          <a href="/">
            <h3>Hyunjin&apos;s Portfolio</h3>
          </a>
        </div>
        {/* max-width: 1024 px 이하에서만 햄버거 메뉴가 나타남 */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="xi-bars"></i>
        </div>

        <div className={`gnb ${isOpen ? "open" : ""}`} id="gnb">
          <div className="menu-items">
            <Link to="home" smooth={true} duration={500}>
              <span>{"HOME"}</span>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <span>{"ABOUT"}</span>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              <span>{"SKILLS"}</span>
            </Link>
            <Link to="archiving" smooth={true} duration={500}>
              <span>ARCHIVING</span>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <span>PROJECTS</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
