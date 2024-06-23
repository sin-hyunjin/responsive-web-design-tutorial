import { useState } from "react";
import { useTime } from "@context/TimeContext";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { selectedTime } = useTime();
  const toggleMenu = () => {
    console.log("toggle test", isOpen);
    setIsOpen(!isOpen);
  };
  const handleNavigation = (path) => {
    navigate(path);
    if (isOpen === true) {
      setIsOpen(false);
    }
  };

  return (
    <header className={` ${selectedTime}`}>
      <div className={` header-inner`}>
        <div className="left-section">
          <div className="logo">
            <a href="/">
              {/* <img src={logoCloud} alt="Company Logo" width="47px" /> */}
            </a>
          </div>
          <a href="/">
            <h3>HJ&apos;s </h3>
          </a>
        </div>
        {/* max-width: 1024 px 이하에서만 햄버거 메뉴가 나타남 */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="xi-bars"></i>
        </div>

        <div className={`gnb ${isOpen ? "" : "open"}`} id="gnb">
          <div className="menu-items">
            <Link
              to="0"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => handleNavigation("/0")}
            >
              <span>{"HOME"}</span>
            </Link>
            <Link
              to="1"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => handleNavigation("/1")}
            >
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
