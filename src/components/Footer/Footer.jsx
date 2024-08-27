import React, { useState } from 'react';
import "./footer.css";
import webcuts from "../../images/webcuts.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const handleChange = (e) => {
      const value = e.target.value;
      setEmail(value);
      
      if (value === '') {
        setError('Email address is required.');
      } else if (!validateEmail(value)) {
        setError('Invalid email address format.');
      } else {
        setError('');
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateEmail(email)) {
        setSuccess('Subscription successful!');
        setError('');
      } else {
        setSuccess('');
        setError('Invalid email address format.');
      }
    };


  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section">
          <h2 className="text-footer">
            <img src={webcuts} style={{ width: "70px", height: "70px" }} alt="Webcuts Solution Logo" />
            <span style={{ marginLeft: "10px" }}>Webcuts Solution</span>
          </h2>
          <p style={{ textAlign: 'left', color: 'white', fontSize: "20px" }}>
            Our mission is to enhance business growth of our customers with creative design, development, and to deliver high-quality solutions that create value and reliable competitive advantage to customers around the globe.
          </p>
        </div>
        <div className="footer-section">
          <h2 className="text-footer">Company</h2>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li style={{ textAlign: 'left', color: 'white', marginBottom: "2px" }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            </li>
            <li style={{ textAlign: 'left', color: 'white', marginBottom: "2px" }}>
              <Link to="/aboutus" style={{ textDecoration: 'none', color: 'white' }}>About Us</Link>
            </li>
            <li style={{ textAlign: 'left', color: 'white', marginBottom: "2px" }}>
              <Link to="/contacts" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            </li>
            <li style={{ textAlign: 'left', color: 'white', marginBottom: "2px" }}>
              <Link to="/blog" style={{ textDecoration: 'none', color: 'white' }}>Blogs</Link>
            </li>
            <li style={{ textAlign: 'left', color: 'white', marginBottom: "2px" }}>
              <Link to="/mobile-app" style={{ textDecoration: 'none', color: 'white' }}>Mobile App</Link>
            </li>
            <li style={{ textAlign: 'left', color: 'white', marginBottom: "2px" }}>
              <Link to="/website" style={{ textDecoration: 'none', color: 'white' }}>Web Development</Link>
            </li>
            <li style={{ textAlign: 'left', color: 'white', marginBottom: "2px" }}>
              <Link to="/ecommerce" style={{ textDecoration: 'none', color: 'white' }}>E-commerce Website</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="text-footer">Contact</h1>
          <h6 style={{ textAlign: 'left', color: 'white' }}>Webcuts Solution. Phase 8, Sector 73, Mohali (Punjab)</h6>
          <h6 style={{ textAlign: 'left', color: 'white' }}>+(91) 9876735848</h6>
          <h6 style={{ textAlign: 'left', color: 'white' }}>info@webcuts-solution.com</h6>
          <h6 style={{ textAlign: 'left', color: 'white', marginBottom: '20px' }}>Webcuts Solution</h6>
          <form onSubmit={handleSubmit}>

          <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" name="search" placeholder="Enter Email Address" className="form-control"
           value={email} onChange={handleChange} 
           style={{ marginRight: '10px', flex: '1' }} />
          <button type="submit" style={{ backgroundColor: '#007bff',  color: '#fff',  border: 'none',   padding: '10px 20px',  
             borderRadius: '5px',    cursor: 'pointer' }}>Subscribe</button>
          </div>

           </form>
           {error && <div style={{ color: 'white' }} className="error-message">{error}</div>}
           {success && <div style={{ color: 'white' }} className="success-message">{success}</div>}
           
           {/* <h6 style={{ color: 'white' }}>Enter Your E-mail to Subscribe</h6> */}


          <div style={{ display: 'flex', gap: '20px', color: 'white', marginTop: '10px' }}>
          <a href="https://www.facebook.com/share/hraAhduEabJy7jaW/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
           </a>

            <a href="https://www.linkedin.com/company/webcuts-solution/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
            </a>
            <a href="https://www.instagram.com/webcutssolution" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
            </a>
            <a href="https://x.com/WebcutsSolution" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
            </a>
            <a href="https://www.youtube.com/@WebcutsSolution" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
