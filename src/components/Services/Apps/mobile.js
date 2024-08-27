import iphone from "../../../images/iphone.png";
import android from "../../../images/mobile-icon.png";
import "./mobile.css";
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

        
        <div className="main-android-app">
          <div class="first-android-row">
        <div className="android-app-section" data-aos="fade-right" data-aos-duration="1000">
            <h3>Mobile Application</h3>
                   <h1 className="text-big" style={{fontSize: '50px'}}>
                    Android App Development Services For Business
                   </h1>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   Give wings to your business with high-end Android app development. 
                   Get the app with seamless features, top-notch transaction securities,
                   and user-friendly panels. Join the online marketplace with exclusive Android apps.
                   </p>
                   
                   <button type="button" className="btn btn-primary" onClick={openModal}>Discuss your Plan</button>
       </div>
      
       <div className="android-app-img-section" data-aos="fade-left" data-aos-duration="1000">
       <img src={android}  alt="android" />
       </div>
       </div>

       {/* <div style={{ marginTop: '200px' }}> */}
       <div class="first-android-row">
       <div className="android-app-img-section" style={{ marginTop: '30px' }}>
       <img src={iphone}  alt="iphone"  data-aos="fade-right" data-aos-duration="1000" />
       </div>
       <div className="android-app-section"  data-aos="fade-left" data-aos-duration="1000">
                  <h1 className="text-big" style={{fontSize: '50px'}}>
                    IOS App
                   </h1>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   Our iOS app revolutionizes personal finance management by providing intuitive tools for budgeting, expense tracking, and financial goal setting. With a sleek interface designed for ease of use, users can effortlessly categorize transactions, visualize spending patterns with interactive charts, and receive proactive alerts to stay on top of their financial health. Whether managing daily expenses or planning for future savings, our app empowers users to make informed financial decisions anytime, anywhere, right from their iPhone or iPad
                   </p>
                   <button type="button" className="btn btn-primary" onClick={openModal}>Discuss your Plan</button>
       </div>
       {showModal && <SignUp closeModal={closeModal} />}
       {/* </div> */}
       </div>
      </div>
      );
};

export default AboutUs;
