import Wordpress from "../../../images/wordpress.png";
import Shopify from "../../../images/shopify.png";
import "./ecommerce.css";
import SignUp from "../../SignupForm/signup";
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



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

        
        <div className="main-ecommerce">
              <div className="first-ecommerce-row">
        <div className="ecommerce-section" data-aos="fade-right" data-aos-duration="1000">
            <h3>ecommerce Website</h3>
                   <h1 className="text-big" style={{fontSize: '50px'}}>
                    Wordpress
                   </h1>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   WordPress is a versatile and user-friendly content management system (CMS) that powers a significant portion of websites on the internet. It provides an intuitive interface that enables users to create, manage, and publish content with ease, whether for blogs, business sites, or e-commerce platforms. With a vast ecosystem of themes and plugins, WordPress offers extensive customization options, allowing users to tailor their websites to their specific needs without requiring advanced coding skills. Its strong community support, regular updates, and scalability make WordPress a popular choice for both beginners and experienced developers looking to build dynamic and engaging websites.
                   </p>
                   <button type="button" className="btn btn-primary" onClick={openModal}>Discuss your Plan</button>
       </div>
       <div className="ecommerce-img-section">
       <img src={Wordpress}  alt="Wordpress" data-aos="fade-right" data-aos-duration="1000"/>
       </div>
       </div>

       {/* <div style={{ marginTop: '200px' }}> */}
       <div className="first-ecommerce-row">
       <div className="ecommerce-img-section">
       <img src={Shopify}  alt="Shopify" data-aos="fade-left" data-aos-duration="1000" />
       </div>
       <div className="ecommerce-section" data-aos="fade-left" data-aos-duration="1000">
                  <h1 className="text-big" style={{fontSize: '50px'}}>
                    Shopify
                   </h1>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   Shopify is a leading e-commerce platform designed to help businesses of all sizes build, manage, and scale their online stores. It offers a comprehensive suite of tools that simplify the process of setting up and running an online shop, including customizable templates, inventory management, secure payment processing, and shipping integrations. Shopify’s user-friendly interface enables users to create a professional-looking store without needing extensive technical knowledge. Additionally, its extensive app marketplace provides a wide range of add-ons and integrations to enhance functionality, from marketing and sales tools to customer support features. With robust security measures and reliable performance, Shopify empowers entrepreneurs and businesses to reach a global audience and grow their online presence effectively.
                   </p>
                   <button type="button" className="btn btn-primary" onClick={openModal}>Discuss your Plan</button>
       </div>
       </div>
       {/* </div> */}
       {showModal && <SignUp closeModal={closeModal} />}
       </div>
      );
};

export default AboutUs;
