import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import webcuts from "../../images/webcuts.png";
import mobile from "../../images/mobile-icon.jpg";
import website_icon from "../../images/computer-icon.jpg";
import ecommerce_icon from "../../images/ecommerce-icon.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "../AboutUs/about";
import ContactUs from "../ContactUs/contact";
import Blog from "../Blog/blog";
import Mobile from "../Services/Apps/mobile";
import Website from "../Services/Website/website";
import Ecommerce from "../Services/Ecommerce/ecommerce";
import TopSection from "../../List";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      dropdownRef.current && !dropdownRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="background">
        <nav className="navbar">
          <div className="logo">
            <img
              src={webcuts}
              alt="Logo"
            />
          </div>
          <ul ref={menuRef} className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li onClick={toggleDropdown} className="dropdown-toggle">
              Services
            </li>
            {isOpen && (
              <ul ref={dropdownRef} className="service-listing">
                <li>
                  <img src={mobile} className="service-icon" />
                  <Link to="/mobile-app" className="dropdown-toggle" onClick={handleLinkClick}>Mobile App</Link>
                </li>
                <li>
                  <img src={website_icon} className="service-icon" />
                  <Link to="/website" className="dropdown-toggle" onClick={handleLinkClick}>Web Development</Link>
                </li>
                <li>
                  <img src={ecommerce_icon} className="service-icon" />
                  <Link to="/ecommerce" className="dropdown-toggle" onClick={handleLinkClick}>E-commerce website</Link>
                </li>
              </ul>
            )}
            <li>
              <Link to="/aboutus" onClick={handleLinkClick}>About Us</Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleLinkClick}>Blogs</Link>
            </li>
            <li>
              <Link to="/contacts" onClick={handleLinkClick}>Contact Us</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/mobile-app" element={<Mobile />} />
        <Route path="/website" element={<Website />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/' element={<TopSection />} />
      </Routes>

    </>

  );
};

export default Navbar;






