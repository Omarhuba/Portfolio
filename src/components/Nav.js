import { Link } from 'react-scroll'
import '../sass/Nav.scss'
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  console.log(button);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <Link to="header" spy={true} smooth={true} offset={-100} duration={500} className="navbar-logo" onClick={closeMobileMenu}>
            Portfolio
            <i className="fab fa-typo3" />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="header" spy={true} smooth={true} offset={-100} duration={500} className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="project-items"
              spy={true} smooth={true} offset={-100} duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              spy={true} smooth={true} offset={-100} duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true} smooth={true} offset={-100} duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};