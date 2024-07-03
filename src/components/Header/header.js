import React, { useState  } from "react";
import "./header.css";
import webcuts from "../../images/webcuts.png";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import AboutUs from "../AboutUs/about";


const Navbar = () => {
       const [isMenuOpen, setIsMenuOpen] = useState(false);

          const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
       };  

       return (
         <Router>  

        <nav className="navbar background">
        <div className="logo">
                  <img
                  src={webcuts}
                 alt="Logo"
                    />
               </div>
             
        
          {/*  Menu section */}
          <ui className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutus">About US</Link>
                </li>
                <li>
                    <Link to="/traning">Industrial Traning</Link>
                </li>
               <li>
                <Link to="/course">Courses</Link>
                </li>
                <li>
                    <Link to="/video">Video</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                </ui>
                <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Hamburger menu icon */}
            </div>
       </nav>
         </Router>
       );
      
    };
export default Navbar;



 
