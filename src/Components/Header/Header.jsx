import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link to="/" className="header-logo">
        <img
          src="https://via.placeholder.com/150"
          className="logo-image"
          alt="Logo Placeholder"
        />{" "}
      </Link>
      <div className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
        <FaTimes
          className="fa"
          aria-hidden="true"
          id="close"
          onClick={handleMenuToggle}
        />
        <ul className="list-items">
          <li>
            <Link to="/" onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleMenuToggle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/academics" onClick={handleMenuToggle}>
              Academics
            </Link>
          </li>
          <li>
            <Link to="/admissions" onClick={handleMenuToggle}>
              Admissions
            </Link>
          </li>
          <li>
            <Link to="/faculty" onClick={handleMenuToggle}>
              Faculty
            </Link>
          </li>
          <li>
            <Link to="/students" onClick={handleMenuToggle}>
              Students
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={handleMenuToggle}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleMenuToggle}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <CiMenuBurger className="fa" id="menu" onClick={handleMenuToggle} />
    </nav>
  );
};

export default Header;
