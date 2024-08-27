import Reactjs from "../../../images/react.png";
import Laravel from "../../../images/laravel.png";
import Node from "../../../images/node.png";
import "./website.css";
import SignUp from '../../SignupForm/signup'; // Adjust path based on actual directory structure
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useState, useEffect } from 'react';

export const AboutUsComponent = () => {
    
};


const AboutUs = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
    useEffect(() => {
      AOS.init();
  }, []);
  
    return (

        
        <div className="main-website">
           <div className="first-website-row">
        <div className="website-section" data-aos="fade-right" data-aos-duration="1000">
            <h3>Web Developement</h3>
                   <h1 className="text-big" style={{fontSize: '50px'}}>
                    React.js for Dynamic frontend
                   </h1>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   React.js is a powerful Library of javascript which help we can create dynamic website with static content.
                   react.js is a very fast as comparision of other framework. with node.js ya laravel it's work very fast.
                   React.js is a powerful Library of javascript which help we can create dynamic website with static content.
                   react.js is a very fast as comparision of other framework. with node.js ya laravel it's work very fast.
                   </p>
                   <button type="button" className="btn btn-primary" onClick={openModal}>Discuss your Plan</button>
       </div>
       <div className="website-img-section">
       <img src={Reactjs}  alt="Reactjs" data-aos="fade-left" data-aos-duration="1000" />
       </div>
       </div>
       
       {/* <div style={{ marginTop: '200px' }}> */}
       <div className="first-website-row">
       <div className="website-img-section">
       <img src={Laravel}  alt="laravel" data-aos="fade-right" data-aos-duration="1000"/>
       </div>
       <div className="website-section" data-aos="fade-left" data-aos-duration="1000">
                  <h1 className="text-big" style={{fontSize: '50px'}}>
                    Laravel for Backend
                   </h1>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   Laravel is a robust PHP framework designed for developing dynamic and scalable web applications. It employs the Blade templating engine, which enhances the creation of dynamic and reusable views with elegant syntax. Although Laravel is primarily a backend framework, it facilitates frontend development by serving dynamic content and can seamlessly integrate with modern JavaScript libraries like React.js. This integration is often achieved by creating APIs in Laravel’s routes/api.php file, which can then be consumed by frontend applications. Additionally, Laravel provides a suite of built-in services, including a comprehensive authentication system, streamlining common application needs and enabling developers to build secure and efficient web applications.
                   </p>
                   <button type="button" className="btn btn-primary" onClick={openModal}>Discuss your Plan</button>
       </div>
       </div>
       {/* </div> */}
       <div className="first-website-row">
       <div className="website-section" data-aos="fade-right" data-aos-duration="1000">
                   <h1 className="text-big" style={{fontSize: '50px',  marginTop: '80px'  }}>
                    Node js for Backend and Api integration
                   </h1>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   Node.js is a powerful runtime environment that allows developers to run JavaScript on the server side. It is particularly well-suited for building scalable and high-performance backend systems, including API integrations. One of Node.js's key strengths is its asynchronous, non-blocking architecture, which enables it to handle a large number of concurrent connections efficiently. It leverages the V8 JavaScript engine from Google Chrome, which compiles JavaScript to native machine code, enhancing performance and speed. This makes Node.js an excellent choice for real-time applications and services, and it pairs seamlessly with frontend frameworks like React.js, allowing for smooth and efficient full-stack development.
                   </p>
                   <button type="button" className="btn btn-primary" onClick={openModal}>Discuss your Plan</button>
       </div>
       <div className="website-img-section">
       <img src={Node}  alt="node" data-aos="fade-left" data-aos-duration="1000"/>
       </div>
       </div>
       {showModal && <SignUp closeModal={closeModal} />}
       </div>
      );
};

export default AboutUs;
